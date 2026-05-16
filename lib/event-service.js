import { demoEvents } from "@/lib/demo-content";
import { connectToDatabase } from "@/lib/db";
import { slugify } from "@/lib/utils";
import Event from "@/models/Event";

export function isEventDatabaseConfigured() {
  return Boolean(process.env.MONGODB_URI);
}

function serializeEvent(event) {
  return {
    ...event,
    _id: event._id?.toString?.() || event._id,
    testimonials: (event.testimonials || []).map((testimonial) => ({
      ...testimonial,
      _id: testimonial._id?.toString?.() || testimonial._id,
    })),
    date: event.date ? new Date(event.date).toISOString() : null,
    createdAt: event.createdAt ? new Date(event.createdAt).toISOString() : null,
    updatedAt: event.updatedAt ? new Date(event.updatedAt).toISOString() : null,
  };
}

function filterDemoEvents({ category, featured } = {}) {
  return demoEvents.filter((event) => {
    const matchesCategory = category ? event.category === category : true;
    const matchesFeatured = featured ? event.featured : true;
    return matchesCategory && matchesFeatured;
  });
}

export async function getPublicEvents({ category, featured } = {}) {
  if (!isEventDatabaseConfigured()) {
    return filterDemoEvents({ category, featured });
  }

  try {
    await connectToDatabase();

    const filters = {};

    if (category) {
      filters.category = category;
    }

    if (featured) {
      filters.featured = true;
    }

    const events = await Event.find(filters)
      .sort({ featured: -1, date: -1, createdAt: -1 })
      .lean();

    return events.map(serializeEvent);
  } catch (error) {
    console.error("Failed to load public events:", error);
    return filterDemoEvents({ category, featured });
  }
}

export async function getEventBySlug(slug) {
  if (!isEventDatabaseConfigured()) {
    return demoEvents.find((event) => event.slug === slug) || null;
  }

  try {
    await connectToDatabase();
    const event = await Event.findOne({ slug }).lean();
    return event ? serializeEvent(event) : null;
  } catch (error) {
    console.error("Failed to load event by slug:", error);
    return demoEvents.find((event) => event.slug === slug) || null;
  }
}

export async function getEventById(id) {
  if (!isEventDatabaseConfigured()) {
    return demoEvents.find((event) => event._id === id) || null;
  }

  try {
    await connectToDatabase();
    const event = await Event.findById(id).lean();
    return event ? serializeEvent(event) : null;
  } catch (error) {
    console.error("Failed to load event by id:", error);
    return demoEvents.find((event) => event._id === id) || null;
  }
}

export async function getAdminEvents() {
  return getPublicEvents();
}

export async function getEventDashboardSummary() {
  const events = await getAdminEvents();
  const featuredEvents = events.filter((event) => event.featured);
  const categories = Array.from(new Set(events.map((event) => event.category))).map((category) => ({
    category,
    count: events.filter((event) => event.category === category).length,
  }));

  return {
    eventCount: events.length,
    featuredCount: featuredEvents.length,
    latestEvents: events.slice(0, 4),
    categories,
    usingDemoContent: !isEventDatabaseConfigured(),
  };
}

function normalizeEventPayload(payload) {
  const media = Array.from(new Set([payload.coverMedia, ...(payload.media || [])].filter(Boolean)));
  const testimonials = (payload.testimonials || []).filter(
    (testimonial) => testimonial.name?.trim() && testimonial.quote?.trim()
  );

  return {
    ...payload,
    date: payload.date || null,
    media,
    testimonials,
  };
}

export async function createEventRecord(payload) {
  await connectToDatabase();

  const event = await Event.create({
    ...normalizeEventPayload(payload),
    slug: slugify(payload.title),
  });

  return serializeEvent(event.toObject());
}

export async function updateEventRecord(id, payload) {
  await connectToDatabase();

  const event = await Event.findByIdAndUpdate(
    id,
    {
      ...normalizeEventPayload(payload),
      slug: slugify(payload.title),
    },
    { new: true, runValidators: true }
  ).lean();

  return event ? serializeEvent(event) : null;
}

export async function deleteEventRecord(id) {
  await connectToDatabase();
  return Event.findByIdAndDelete(id).lean();
}

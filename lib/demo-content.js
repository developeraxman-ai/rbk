import { slugify } from "@/lib/utils";
import { dummyEventMedia } from "@/lib/dummy-event-media";
import { pdfGallery, showcaseShows } from "@/lib/profile-content";

const baseProjects = [
  {
    title: "Weekend With Ramesh",
    category: "event",
    clientName: "Zee Kannada",
    featured: true,
    description:
      "Live-show visuals shaped around stage presence, guest energy, and the kind of broadcast recall that keeps a property culturally visible.",
    coverImage: showcaseShows[0].image,
    media: [
      showcaseShows[0].image,
      pdfGallery.campaigns,
      pdfGallery.people,
    ],
  },
  {
    title: "Sa Re Ga Ma Pa Kannada",
    category: "event",
    clientName: "Zee Kannada",
    featured: true,
    description:
      "Entertainment-property coverage built for performance, stage rhythm, contestants, judges, and audience-facing promotional momentum.",
    coverImage: showcaseShows[1].image,
    media: [
      showcaseShows[1].image,
      pdfGallery.campaigns,
      pdfGallery.postersA,
    ],
  },
  {
    title: "Kannada Celebrity Presence",
    category: "celebrity",
    clientName: "Sandalwood appearances",
    featured: true,
    description:
      "Celebrity-facing image-making shaped by publicity work, star-led campaigns, and strong familiarity with the pace and visual expectations of Kannada cinema.",
    coverImage: pdfGallery.people,
    media: [
      pdfGallery.people,
      pdfGallery.postersB,
      pdfGallery.postersC,
    ],
  },
  {
    title: "Film Publicity & Stills",
    category: "celebrity",
    clientName: "Kannada film campaigns",
    featured: false,
    description:
      "A still-photography body of work spanning posters, publicity material, promotions, and campaign imagery across major Kannada titles.",
    coverImage: pdfGallery.postersB,
    media: [
      pdfGallery.postersB,
      pdfGallery.postersA,
      pdfGallery.postersC,
    ],
  },
  {
    title: "Celebration Storytelling",
    category: "wedding",
    clientName: "Private celebrations",
    featured: true,
    description:
      "Celebration coverage approached with intimacy, elegance, emotional timing, and cinematic framing built for hosts who want beauty without losing authenticity.",
    coverImage: pdfGallery.coverTitle,
    media: [
      pdfGallery.coverTitle,
      pdfGallery.portraitSmile,
      pdfGallery.portraitGlasses,
    ],
  },
  {
    title: "Brand & Documentary Assignments",
    category: "commercial",
    clientName: "Brands, institutions, and documentary commissions",
    featured: false,
    description:
      "Visual assignments across branded promotions, institutional films, and documentary shoots, handled with a practical production eye and clean image discipline.",
    coverImage: pdfGallery.campaigns,
    media: [
      pdfGallery.campaigns,
      pdfGallery.onsetCamera,
      pdfGallery.postersA,
    ],
  },
  {
    title: "Feature Film Camera Work",
    category: "commercial",
    clientName: "Ronny, Jockey 42, Be +ve, Adi Na Pilla",
    featured: false,
    description:
      "Recent cinematography work across shorts and features, backed by years of still-photography, on-set rhythm, and publicity-driven visual craft.",
    coverImage: pdfGallery.onsetCamera,
    media: [
      pdfGallery.onsetCamera,
      pdfGallery.postersA,
      pdfGallery.postersC,
    ],
  },
];

export const demoProjects = baseProjects.map((project, index) => ({
  ...project,
  _id: `demo-${index + 1}`,
  slug: slugify(project.title),
  createdAt: new Date(Date.now() - index * 86400000).toISOString(),
}));

const baseEvents = [
  {
    title: "Royal Ceremony",
    category: "wedding",
    featured: true,
    date: "2026-08-16T00:00:00.000Z",
    description:
      "A complete celebration planned around mandap decor, guest flow, rituals, stage styling, host moments, photography, and a premium reception atmosphere.",
    coverMedia: dummyEventMedia.heroVideo,
    media: [
      dummyEventMedia.heroVideo,
      dummyEventMedia.ceremonyStage,
      dummyEventMedia.receptionCouple,
      dummyEventMedia.celebrationGuests,
    ],
    testimonials: [
      {
        name: "Aarav Sharma",
        role: "Event Host",
        quote:
          "RBK Events kept every ritual, guest movement, and stage moment beautifully composed. The gallery felt like reliving the day again.",
      },
    ],
  },
  {
    title: "Elegant Reception Night",
    category: "reception",
    featured: true,
    date: "2026-07-12T00:00:00.000Z",
    description:
      "A beautifully organised reception with stage design, lighting, entry moments, couple portraits, guest hosting, music, and a polished photo/video gallery.",
    coverMedia: dummyEventMedia.receptionCouple,
    media: [
      dummyEventMedia.receptionCouple,
      dummyEventMedia.ceremonyStage,
      dummyEventMedia.engagementPortrait,
      dummyEventMedia.celebrationGuests,
    ],
    testimonials: [
      {
        name: "Meera Rao",
        role: "Reception Host",
        quote:
          "The reception looked elegant, the timing was smooth, and the team handled the evening without making us worry about details.",
      },
    ],
  },
  {
    title: "Engagement Ceremony",
    category: "engagement",
    featured: true,
    date: "2026-06-21T00:00:00.000Z",
    description:
      "A warm engagement function planned for ring exchange, floral styling, guest seating, couple entry, stage moments, and intimate celebration coverage.",
    coverMedia: dummyEventMedia.engagementPortrait,
    media: [
      dummyEventMedia.engagementPortrait,
      dummyEventMedia.receptionCouple,
      dummyEventMedia.haldiDetails,
    ],
    testimonials: [
      {
        name: "Nikhil Hegde",
        role: "Engagement Host",
        quote:
          "The decor, ring ceremony flow, and candid coverage were handled with warmth. It felt personal and premium at the same time.",
      },
    ],
  },
  {
    title: "Haldi & Mehendi Function",
    category: "haldi-mehendi",
    featured: true,
    date: "2026-09-04T00:00:00.000Z",
    description:
      "A vibrant pre-event function organised with colour, music, decor corners, candid moments, artist coordination, and joyful photo/video coverage.",
    coverMedia: dummyEventMedia.haldiDetails,
    media: [
      dummyEventMedia.haldiDetails,
      dummyEventMedia.celebrationGuests,
      dummyEventMedia.ceremonyStage,
    ],
    testimonials: [
      {
        name: "Priya Menon",
        role: "Function Host",
        quote:
          "The colours, music, decor corners, and candid gallery captured the mood exactly how we imagined it.",
      },
    ],
  },
  {
    title: "Birthday Party",
    category: "birthday",
    featured: true,
    date: "2026-10-18T00:00:00.000Z",
    description:
      "A polished birthday party with theme decor, cake moments, entry styling, entertainment flow, guest hosting, and a share-ready photo/video gallery.",
    coverMedia: dummyEventMedia.celebrationGuests,
    media: [
      dummyEventMedia.celebrationGuests,
      dummyEventMedia.engagementPortrait,
      dummyEventMedia.receptionCouple,
    ],
    testimonials: [
      {
        name: "Kavya S",
        role: "Birthday Party Host",
        quote:
          "The birthday party felt polished and joyful. Guests loved the decor, and the photos were ready to share beautifully.",
      },
    ],
  },
  {
    title: "Sangeet Evening",
    category: "traditional",
    featured: false,
    date: "2026-10-28T00:00:00.000Z",
    description:
      "A music-led evening with performance flow, stage styling, guest entries, artist coordination, lighting cues, and a gallery built for sharing.",
    coverMedia: dummyEventMedia.celebrationGuests,
    media: [
      dummyEventMedia.celebrationGuests,
      dummyEventMedia.receptionCouple,
      dummyEventMedia.heroVideo,
    ],
    testimonials: [
      {
        name: "Rohan Kulkarni",
        role: "Sangeet Host",
        quote:
          "The performance flow, lighting, and entries were coordinated so well that the evening felt effortless.",
      },
    ],
  },
  {
    title: "Corporate Event",
    category: "corporate",
    featured: true,
    date: "2026-11-07T00:00:00.000Z",
    description:
      "A professionally organised corporate event with welcome desk, stage, sound, lighting, team activities, food coordination, and clean event documentation.",
    coverMedia: showcaseShows[2].image,
    media: [
      showcaseShows[2].image,
      dummyEventMedia.ceremonyStage,
      dummyEventMedia.receptionCouple,
    ],
    testimonials: [
      {
        name: "Anita Joseph",
        role: "Corporate Event Lead",
        quote:
          "RBK Events understood the professional tone we needed and delivered a smooth stage, welcome flow, and media archive.",
      },
    ],
  },
];

export const demoEvents = baseEvents.map((event, index) => ({
  ...event,
  _id: `demo-event-${index + 1}`,
  slug: slugify(event.title),
  createdAt: new Date(Date.now() - index * 86400000).toISOString(),
  updatedAt: new Date(Date.now() - index * 86400000).toISOString(),
}));

export const featuredHighlights = [
  "Events and live entertainment approached with cinematic timing and strong audience awareness.",
  "Celebrity-facing visuals shaped by film-publicity experience across Kannada cinema.",
  "A body of work spanning celebrations, brand assignments, documentary shoots, and recent cinematography credits.",
];

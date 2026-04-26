import { slugify } from "@/lib/utils";
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
    title: "Wedding Storytelling",
    category: "wedding",
    clientName: "Private celebrations",
    featured: true,
    description:
      "Wedding coverage approached with intimacy, elegance, emotional timing, and cinematic framing built for families who want beauty without losing authenticity.",
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

export const featuredHighlights = [
  "Events and live entertainment approached with cinematic timing and strong audience awareness.",
  "Celebrity-facing visuals shaped by film-publicity experience across Kannada cinema.",
  "A body of work spanning weddings, brand assignments, documentary shoots, and recent cinematography credits.",
];

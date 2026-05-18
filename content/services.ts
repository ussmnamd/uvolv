export type Service = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  detail: string;
  outcomes: string[];
  startingFrom: string;
};

export const services: Service[] = [
  {
    slug: "ai-automation",
    title: "AI Automation",
    eyebrow: "Replace repeat work",
    summary: "AI workflows that handle lead routing, follow-up, intake, reporting, and internal handoffs.",
    detail:
      "We map your current operations, identify the highest-friction workflows, and build automations that reduce manual work without turning your business into a fragile stack of hacks.",
    outcomes: ["Lead qualification", "Follow-up systems", "Internal task routing", "Reporting loops"],
    startingFrom: "$1,500"
  },
  {
    slug: "custom-software",
    title: "Custom Software",
    eyebrow: "Business systems",
    summary: "Internal tools, portals, dashboards, and SaaS-style products for teams that need more than templates.",
    detail:
      "For businesses outgrowing spreadsheets and disconnected apps, we build focused software that fits the way the business actually operates.",
    outcomes: ["Client portals", "Admin dashboards", "Workflow apps", "SaaS MVPs"],
    startingFrom: "$3,500"
  },
  {
    slug: "websites",
    title: "Premium Websites",
    eyebrow: "Digital presence",
    summary: "High-conversion websites that look serious, load fast, and explain the offer clearly.",
    detail:
      "We design and build websites for service businesses, contractors, startups, and operators who need their site to sell trust before the first call.",
    outcomes: ["Agency websites", "Contractor sites", "Startup landing pages", "SEO-ready builds"],
    startingFrom: "$1,200"
  },
  {
    slug: "funnels",
    title: "Sales Funnels",
    eyebrow: "Lead systems",
    summary: "Landing pages, lead magnets, CRM flows, and automations designed around booked calls.",
    detail:
      "We connect the public-facing offer to the backend follow-up system so leads do not disappear between form fill and sales conversation.",
    outcomes: ["Landing pages", "Audit funnels", "CRM setup", "Email and WhatsApp follow-up"],
    startingFrom: "$1,800"
  }
];

export const getServiceBySlug = (slug: string) => {
  return services.find((service) => service.slug === slug);
};

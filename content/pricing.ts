export const pricingTiers = [
  {
    name: "Launch Site",
    price: "Starting from $1,200",
    description: "For businesses that need a sharp, credible website fast.",
    includes: ["Strategy and copy direction", "Responsive website", "Basic SEO setup", "Contact CTA flow"]
  },
  {
    name: "Automation System",
    price: "Starting from $1,500",
    description: "For teams losing time to repeated manual work.",
    includes: ["Workflow audit", "AI-assisted automation", "Tool integrations", "Handoff documentation"]
  },
  {
    name: "Growth Build",
    price: "Starting from $3,500",
    description: "For startups and SMEs that need web, funnel, and systems working together.",
    includes: ["Website or funnel", "CRM and lead flow", "Custom dashboard or portal", "Launch support"]
  }
] as const;

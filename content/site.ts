export const site = {
  name: "UVOLV",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://uvolv.tech",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "info@uvolv.com",
  booking: process.env.NEXT_PUBLIC_BOOKING_URL || "",
  whatsapp: (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+923332153959").replace(/\D/g, ""),
  description: "Websites, AI automations, sales funnels, and custom software. UVOLV connects your digital presence to the way your business works.",
};
export const navigation = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Process", href: "/#process" },
  { label: "About", href: "/about" },
];
export const services = [
  {
    slug: "websites", number: "01", title: "Websites", short: "Make the right first impression.",
    description: "A clear offer. A considered design. A website that gives the right people a reason to get in touch.",
    label: "Digital presence", headline: "LOOK THE PART.\nWORK EVEN BETTER.",
    intro: "Your website should explain what you do, earn trust, and guide people to the next step. We build around that purpose.",
    outcomes: ["Clear offer and page structure", "Responsive, distinctive design", "Accessible navigation and forms", "Search-ready pages and fast loading"],
    steps: ["Map your audience, offer, and inquiry path.", "Develop the visual direction and page content.", "Build and test the website across screen sizes.", "Connect the agreed inquiry tools and provide a handover."],
    fits: "Service businesses, contractors, startups, and teams that need a website their business can grow into.",
    boundary: "Content creation, ongoing SEO, hosting, and third-party subscriptions are agreed separately in the proposal.",
    example: "connected-website", color: "mint",
  },
  {
    slug: "ai-automation", number: "02", title: "AI automation", short: "Less repeat work. More forward motion.",
    description: "Connect your tools and automate the work between them. Keep people involved where their judgment matters.",
    label: "Connected operations", headline: "GIVE BUSYWORK\nLESS OF YOUR DAY.",
    intro: "We map repeated tasks, connect the right tools, and build workflows with clear review points and recovery paths.",
    outcomes: ["Lead routing and qualification", "Client intake and onboarding", "Reporting and document workflows", "AI classification with human review"],
    steps: ["Audit the workflow and identify its inputs and owners.", "Map the integrations, rules, and review points.", "Build and test normal operation and failure paths.", "Provide documentation, training, and the agreed support."],
    fits: "Teams that move the same information between tools, repeat client setup, or lose time to manual follow-up.",
    boundary: "Tool subscriptions, model usage, and changes outside the agreed workflow scope are separate costs.",
    example: "lead-to-follow-up", color: "lilac",
  },
  {
    slug: "custom-software", number: "03", title: "Custom software", short: "Built around the way you work.",
    description: "Portals, dashboards, and internal tools that replace disconnected spreadsheets with a system your team can use.",
    label: "Business systems", headline: "YOUR PROCESS.\nYOUR SOFTWARE.",
    intro: "When existing tools leave important gaps, we build focused software around your users, data, and daily decisions.",
    outcomes: ["Client and partner portals", "Internal operational dashboards", "Role-based workflow applications", "Focused SaaS products and MVPs"],
    steps: ["Define the users, permissions, and core workflow.", "Prototype the important screens and data model.", "Build the agreed features and test access boundaries.", "Document deployment, maintenance, and ownership."],
    fits: "Businesses outgrowing spreadsheets, teams with specific operational needs, and founders testing a focused software product.",
    boundary: "Features, access rules, integrations, maintenance, and hosting are defined in a custom scope before work starts.",
    example: "operations-dashboard", color: "sand",
  },
  {
    slug: "funnels", number: "04", title: "Sales funnels", short: "Connect interest to the next conversation.",
    description: "Landing pages, lead capture, CRM records, and follow-up. One connected path from first click to a useful conversation.",
    label: "Lead systems", headline: "BETTER LEAD FLOW.\nFEWER LOOSE ENDS.",
    intro: "We connect the public offer to the process behind it, so a new inquiry has a clear destination and next step.",
    outcomes: ["Focused landing pages", "Validated lead capture", "CRM routing and qualification", "Email and messaging follow-up"],
    steps: ["Define the offer, audience, and qualification criteria.", "Design the landing page and inquiry path.", "Connect lead capture to the agreed CRM and follow-up.", "Test consent, delivery, and error handling."],
    fits: "Service businesses, agencies, and operators who need a clearer path from campaign traffic to qualified inquiries.",
    boundary: "Ad spend, campaign management, purchased lead lists, and revenue guarantees are outside the standard build scope.",
    example: "lead-to-follow-up", color: "mint",
  },
] as const;
export const packages = [
  { name: "Foundation", price: "$2,000", note: "One-time project fee", summary: "One focused workflow, connected from start to finish.", features: ["Operations audit and workflow mapping", "1 workflow across up to 3 platforms", "2 revision rounds", "Documentation and walkthrough", "14 days of post-launch support"], delivery: "10–14 business days", exclusion: "Multiple workflows and custom AI agent development are outside this package." },
  { name: "Scale", price: "$3,500", note: "One-time project fee", summary: "Connected workflows across sales, operations, and delivery.", features: ["Full operations audit", "Up to 3 workflows and 6 tools", "AI agent for one defined function", "3 revision rounds and a full handover", "30 days of post-launch support"], delivery: "18–24 business days", exclusion: "Scope covers the agreed workflows. Additional systems require a separate proposal." },
  { name: "Elite", price: "$5,000+", note: "Custom scope after discovery", summary: "A custom AI system for more complex business needs.", features: ["Discovery and architecture session", "Custom AI agents and integrations", "Workflows within the agreed scope", "Documentation, training, and SOPs", "60 days of post-launch support"], delivery: "30–60 business days", exclusion: "Final price and milestones depend on the agreed architecture and delivery scope." },
];
export const processSteps = [
  { title: "Discover", text: "We look at your business, the problem, and the tools you already use.", output: "A clear problem and a practical direction." },
  { title: "Propose", text: "You get the scope, deliverables, price, and delivery plan before work starts.", output: "An agreed scope with clear boundaries." },
  { title: "Build", text: "We design and implement the system, with agreed review points along the way.", output: "A working system ready for testing." },
  { title: "Review", text: "You test the system. We resolve issues and apply the included revision rounds.", output: "A tested build and your sign-off." },
  { title: "Go live", text: "We launch, document the system, and provide the agreed support period.", output: "A clear handover and a supported launch." },
];
export const projects = [
  { slug: "lead-to-follow-up", title: "FROM NEW LEAD\nTO NEXT STEP.", name: "Lead to follow-up", category: "AI automation / Sales funnels", type: "Demonstration", visual: "leads", color: "mint", summary: "An example of an inquiry moving from a website form to qualification, CRM routing, and a reviewed follow-up.", problem: "A new inquiry needs to reach the right person with enough context to act. Repeated copying and unclear ownership create gaps.", workflow: ["Capture and validate the inquiry.", "Classify the request against agreed criteria.", "Create or update the CRM record.", "Assign an owner and prepare the follow-up.", "Ask for human review when information is uncertain."], boundary: "This demonstration uses illustrative data. It is not a client result or a live lead-processing service." },
  { slug: "operations-dashboard", title: "ONE CLEAR VIEW.\nLESS CHASING.", name: "Operations dashboard", category: "Custom software / Reporting", type: "Demonstration", visual: "dashboard", color: "lilac", summary: "An example of project status, incoming requests, and next actions presented in one operational view.", problem: "Information spread across tools makes it harder to see what needs attention. Teams need a clear view with reliable source data.", workflow: ["Read the agreed project and request sources.", "Validate records and mark incomplete information.", "Show status, ownership, and next actions.", "Let authorized users update the workflow.", "Keep an activity record for important changes."], boundary: "The interface contains illustrative data. It does not represent a completed UVOLV HQ application or measured client results." },
  { slug: "connected-website", title: "A WEBSITE WITH\nA NEXT STEP.", name: "Connected website", category: "Websites / Lead systems", type: "Demonstration", visual: "website", color: "sand", summary: "An example of a service website designed around a clear offer, helpful information, and a structured project inquiry.", problem: "A polished website still needs to explain the offer and help the visitor act. The inquiry path should connect to the business process.", workflow: ["Explain the offer and who it serves.", "Show relevant services and delivery information.", "Collect a concise project brief.", "Validate and route the inquiry.", "Confirm delivery and explain the next step."], boundary: "This is a design demonstration. No client endorsement, conversion increase, or revenue result is claimed." },
] as const;
export const faqs = [
  { question: "Can we start with one part of the business?", answer: "Yes. Start with a defined problem. Foundation covers one automation workflow. Websites, funnels, and custom software receive a scope that fits the project." },
  { question: "Can you work with our existing tools?", answer: "We review your tools during discovery. Integrations depend on available APIs, access permissions, and the limits of each platform." },
  { question: "What happens after the build?", answer: "You receive documentation and a walkthrough. Automation packages include 14, 30, or 60 days of support. Ongoing maintenance is agreed separately." },
  { question: "Do you work with agencies?", answer: "Yes. We can scope white-label delivery for agency partners, with clear responsibilities, documentation, and handover terms." },
];

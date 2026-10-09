import type { Metadata } from "next";
import { PageIntro } from "@/components/ui";
import { ServicesSection, ProcessSection, PackagesSection } from "@/components/home-page";
export const metadata: Metadata = { title: "Websites, automation, and business systems", description: "Explore UVOLV websites, AI automation, custom software, and sales funnels. Connected services with clear scope and handover.", alternates: { canonical: "/services" } };
function ServicesPage() { return <><PageIntro label="Connected services" title={"EVERY PART.\nONE BIGGER PICTURE."} description="Start with the problem that matters. We connect the right design, software, and workflow to help your business move forward." /><ServicesSection /><ProcessSection /><PackagesSection /></>; }
export { ServicesPage as default };

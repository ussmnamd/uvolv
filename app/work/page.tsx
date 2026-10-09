import type { Metadata } from "next";
import { PageIntro, Eyebrow } from "@/components/ui";
import { WorkGrid } from "@/components/work-grid";
import { ClientWorkGrid } from "@/components/client-work";
export const metadata: Metadata = { title: "Work and connected system examples", description: "Explore UVOLV website projects and demonstrations of connected lead flows, operational software, and business systems.", alternates: { canonical: "/work" } };
function WorkPage() { return <><PageIntro label="Work & systems" title={"IDEAS ARE GOOD.\nWORKING SYSTEMS ARE BETTER."} description="A closer look at the websites and connected systems we build. Demonstrations are clearly labeled and use illustrative data." /><div className="section-wrap work-page"><Eyebrow>Selected website projects</Eyebrow><ClientWorkGrid /><Eyebrow>Connected system demonstrations</Eyebrow><WorkGrid /><p className="work-page-note">System demonstrations explain an approach. They are separate from client work and do not claim measured business results.</p></div></>; }
export { WorkPage as default };

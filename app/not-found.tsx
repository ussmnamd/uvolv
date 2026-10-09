import { PageIntro, ActionLink } from "@/components/ui";
function NotFound() { return <div className="not-found"><PageIntro label="404 / A missing connection" title={"THIS IS NOT\nTHE NEXT STEP."} description="We could not find that page. Start with the homepage or tell us what you need." /><div className="section-wrap"><ActionLink href="/">Back to the homepage</ActionLink></div></div>; }
export { NotFound as default };

import Image from "next/image";
import { Arrow } from "./ui";

export function SystemVisual({ variant = "leads", compact = false }: { variant?: string; compact?: boolean }) {
  if (variant === "website") return <div className={`website-visual${compact ? " compact" : ""}`} aria-label="Illustrative service website">
    <div className="browser-bar"><i /><i /><i /><span>studio.example</span></div>
    <div className="mini-website"><div className="mini-nav"><b>FORM<span> / </span>STUDIO</b><span>Spaces · Approach · Contact</span></div><p className="mini-label">Architecture for the everyday.</p><strong>MAKE ROOM<br />FOR BETTER.</strong><div className="architecture-visual"><div /><div /><div /><span>Considered spaces.<br />Made for real life.</span></div><div className="mini-site-bottom"><span>Good spaces start with a conversation.</span><span>Start a project ↗</span></div></div>
  </div>;
  if (variant === "dashboard") return <div className={`dashboard-visual${compact ? " compact" : ""}`} aria-label="Illustrative operations dashboard">
    <div className="browser-bar"><i /><i /><i /><span>workspace / overview</span></div>
    <div className="dashboard-content"><aside><b>u<span>.</span></b><span className="active">Overview</span><span>Projects</span><span>Requests</span><span>Activity</span><span>Settings</span></aside><div className="dashboard-main"><div className="dashboard-top"><span>YOUR WORKSPACE</span><span className="status-dot">Example data</span></div><h4>A clearer picture.</h4><div className="dashboard-stats"><div><span>Active projects</span><strong>08</strong><small>Across your workspace</small></div><div><span>For review</span><strong>03</strong><small>Ready for your attention</small></div><div><span>Next actions</span><strong>12</strong><small>Assigned to your team</small></div></div><div className="chart"><div className="chart-title"><b>Work moving forward</b><span>This week</span></div><div className="chart-bars">{[36, 62, 48, 78, 58, 87, 73, 95, 82, 110, 96, 130].map((h, i) => <div key={i} style={{ height: h }} />)}</div><div className="chart-axis"><span>MON</span><span>TUE</span><span>WED</span><span>THU</span><span>FRI</span></div></div><div className="dashboard-row"><span><i /> Website launch</span><span>In review</span><span>View project ↗</span></div></div></div>
  </div>;
  return <div className={`lead-visual${compact ? " compact" : ""}`} aria-label="Illustrative lead routing workflow">
    <div className="flow-heading"><span className="status-dot">CONNECTED WORKFLOW</span><span>Illustrative system</span></div>
    <div className="flow-capture"><span className="flow-app">↗</span><div><small>01 / CAPTURE</small><b>A new inquiry comes in.</b><p>Website form → validated project brief</p></div><span className="flow-check">✓</span></div>
    <div className="flow-line" />
    <div className="flow-middle"><div><span className="flow-app">✳</span><small>02 / QUALIFY</small><b>The right context.</b><p>Service · scope · next step</p></div><div><span className="flow-app">⌘</span><small>03 / CONNECT</small><b>A clear owner.</b><p>CRM record · team assignment</p></div></div>
    <div className="flow-line" /><div className="flow-result"><span className="status-dot">READY FOR REVIEW</span><b>A useful conversation.<Arrow diagonal /></b><span>Human judgment stays in the loop.</span></div>
  </div>;
}

export function HeroShowcase() {
  return <div className="hero-showcase"><div className="showcase-tab"><span className="status-dot">CONNECTED BY DESIGN</span><Arrow diagonal /></div><div className="showcase-caption"><span>From first click.<br /><b>To what happens next.</b></span><span className="showcase-index">UV / 01</span></div><Image className="showcase-device" src="/assets/macbook-mockup-dashboard.png" alt="Illustrative lead dashboard displayed on a laptop" width={1024} height={768} priority sizes="(max-width: 700px) 100vw, 75vw" /><div className="showcase-note"><span className="status-dot">ONE CONNECTED SYSTEM</span><strong>Less copying.<br />More clarity.</strong><div><span>Website</span><Arrow /><span>Workflow</span><Arrow /><span>Business</span></div></div><span className="showcase-disclaimer">Illustrative interface. Example data.</span></div>;
}

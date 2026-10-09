import { ImageResponse } from "next/og";
export const alt = "UVOLV — Build the system behind the sale.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
function SocialImage() { return new ImageResponse(<div style={{ background: "#222222", width: "100%", height: "100%", padding: 24, display: "flex" }}><div style={{ background: "#141414", borderRadius: 30, display: "flex", flexDirection: "column", padding: "60px 70px", width: "100%", color: "#f3efef" }}><div style={{ color: "#83c5be", fontSize: 34, marginBottom: 50 }}>uvolv.</div><div style={{ fontSize: 78, fontWeight: 700, lineHeight: 1.04, letterSpacing: -3 }}>BUILD THE SYSTEM</div><div style={{ fontSize: 78, fontWeight: 700, lineHeight: 1.04, letterSpacing: -3 }}>BEHIND THE SALE.</div><div style={{ color: "#83c5be", fontSize: 22, marginTop: 45 }}>Websites / AI automation / Software / Funnels</div></div></div>, size); }
export { SocialImage as default };

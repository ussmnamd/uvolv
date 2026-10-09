import type { MetadataRoute } from "next";
import { site, services, projects } from "@/content/site";
import { clientWork } from "@/components/client-work";
function sitemap(): MetadataRoute.Sitemap { return ["", "/services", "/work", "/about", "/contact", "/privacy", ...services.map(item => `/services/${item.slug}`), ...[...projects, ...clientWork].map(item => `/work/${item.slug}`)].map(path => ({ url: `${site.url}${path}`, changeFrequency: "monthly", priority: path === "" ? 1 : .7 })); }
export { sitemap as default };

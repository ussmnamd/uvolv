import type { MetadataRoute } from "next";
import { site } from "@/content/site";
function robots(): MetadataRoute.Robots { return { rules: { userAgent: "*", allow: "/", disallow: "/api/" }, sitemap: `${site.url}/sitemap.xml` }; }
export { robots as default };

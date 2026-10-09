import assert from "node:assert/strict";
const base = process.env.PREVIEW_URL || "http://127.0.0.1:4101";
const paths = ["/", "/services", "/services/websites", "/services/ai-automation", "/services/custom-software", "/services/funnels", "/work", "/work/retrotekt", "/work/js-training", "/work/lead-to-follow-up", "/work/operations-dashboard", "/work/connected-website", "/about", "/contact", "/privacy", "/sitemap.xml", "/robots.txt", "/opengraph-image", "/icon.svg"];
const results = await Promise.all(paths.map(async path => {
  const response = await fetch(base + path);
  assert.equal(response.status, 200, `${path} must return 200`);
  const body = await response.text();
  if (!path.includes(".") && path !== "/opengraph-image") {
    assert.equal((body.match(/<h1(?:\s|>)/g) || []).length, 1, `${path} must have one H1`);
    assert.equal(/href="#"/.test(body), false, `${path} must not contain placeholder links`);
  }
  return `${path}: 200`;
}));
console.log(results.join("\n"));
assert.equal((await fetch(base + "/page-that-does-not-exist")).status, 404);
const headers = { "Content-Type": "application/json", Origin: base };
const invalid = await fetch(base + "/api/contact", { method: "POST", headers, body: JSON.stringify({ name: "Test", email: "invalid", message: "Too short" }) });
assert.equal(invalid.status, 400);
const valid = { name: "Preview test", email: "preview@example.com", service: "websites", message: "A preview test of the local inquiry boundary." };
const unconfigured = await fetch(base + "/api/contact", { method: "POST", headers, body: JSON.stringify(valid) });
assert.equal(unconfigured.status, 503, "Unconfigured delivery must not report success");
assert.ok((await unconfigured.json()).error.includes("info@uvolv.com"));
const foreign = await fetch(base + "/api/contact", { method: "POST", headers: { ...headers, Origin: "https://example.com" }, body: JSON.stringify(valid) });
assert.equal(foreign.status, 403);
console.log("404 response, inquiry validation, honest delivery state, and origin check: passed.");

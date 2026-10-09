const services = new Set(["", "websites", "ai-automation", "custom-software", "funnels", "partnership"]);
export function validateInquiry(input) {
  if (!input || typeof input !== "object" || Array.isArray(input)) return { error: "Provide a valid project brief." };
  const fields = { name: 100, email: 254, business: 160, service: 40, budget: 80, timeline: 80, message: 5000, website: 200, package: 30 };
  /** @type {Record<string, string>} */
  const value = {};
  for (const [key, limit] of Object.entries(fields)) {
    if (input[key] !== undefined && typeof input[key] !== "string") return { error: "Use text for the project brief fields." };
    value[key] = (input[key] || "").trim();
    if (value[key].length > limit) return { error: `The ${key} field is too long.` };
  }
  if (value.website) return { error: "We could not accept this inquiry." };
  if (!value.name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.email) || /[\r\n]/.test(value.email)) return { error: "Add your name and a valid email address." };
  if (value.message.length < 20) return { error: "Add at least 20 characters about your project." };
  if (!services.has(value.service)) return { error: "Select one of the listed services." };
  if (!["", "Foundation", "Scale", "Elite"].includes(value.package)) return { error: "Select a listed package or leave it empty." };
  return { value };
}
export function createRateLimiter({ max = 5, windowMs = 15 * 60 * 1000, capacity = 1000 } = {}) {
  const entries = new Map();
  return function allow(key, now = Date.now()) {
    for (const [id, entry] of entries) if (entry.until <= now) entries.delete(id);
    const entry = entries.get(key);
    if (entry && entry.count >= max) return false;
    if (entry) entry.count++;
    else { if (entries.size >= capacity) return false; entries.set(key, { count: 1, until: now + windowMs }); }
    return true;
  };
}

import { test } from "node:test";
import assert from "node:assert/strict";
import { validateInquiry, createRateLimiter } from "../lib/contact.mjs";
const valid = { name: "Test User", email: "test@example.com", service: "websites", message: "We need a clear website for our service business." };
test("accepts and trims a useful brief without requiring optional fields", () => { const result = validateInquiry({ ...valid, name: " Test User " }); assert.equal(result.value.name, "Test User"); assert.equal(result.value.business, ""); });
test("rejects malformed payloads, unknown services, and filled honeypots", () => { for (const input of [null, [], { ...valid, email: "invalid" }, { ...valid, service: "fake" }, { ...valid, website: "spam" }, { ...valid, message: "Short" }, { ...valid, name: 3 }, { ...valid, message: "a".repeat(5001) }]) assert.ok(validateInquiry(input).error); });
test("rate limits repeated inquiries and expires old entries", () => { const allow = createRateLimiter({ max: 2, windowMs: 100, capacity: 2 }); assert.equal(allow("one", 0), true); assert.equal(allow("one", 1), true); assert.equal(allow("one", 2), false); assert.equal(allow("two", 3), true); assert.equal(allow("three", 4), false); assert.equal(allow("one", 101), true); });

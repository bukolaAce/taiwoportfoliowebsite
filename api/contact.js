// Vercel serverless function — lives at /api/contact.js in your project ROOT
// (a sibling of your `src` folder, not inside it). Vercel auto-detects
// anything under /api as a function, regardless of the frontend framework.
/* eslint-env node */
import { neon } from "@neondatabase/serverless";

const sql = neon(process.env.DATABASE_URL);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, message } = req.body ?? {};

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }

  try {
    await sql`
      INSERT INTO messages (name, email, message)
      VALUES (${name}, ${email}, ${message})
    `;
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("DB insert failed:", err);
    return res.status(500).json({ error: "Something went wrong. Please try again." });
  }
}
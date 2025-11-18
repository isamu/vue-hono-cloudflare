import { Hono, type Env } from "hono";

const app = new Hono<{ Bindings: Env }>();

app.post("/api/echo", async (c) => {
  const body = (await c.req.json().catch(() => null)) as {
    text?: string;
  } | null;
  const text = body?.text;

  if (typeof text !== "string" || text.length === 0) {
    return c.json({ error: "text is required" }, 400);
  }

  const processed = text.toUpperCase();
  return c.json({ original: text, processed });
});

app.get("/api/echo", async (c) => {
  return c.json({ message: "hello"});
});
export default app;

import { Hono } from "hono";
import { logger } from "hono/logger";

const app = new Hono();

app.use(logger());

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.get("/echo/:name", (c) => {
  const name = c.req.param("name");
  return c.json({ message: "Hello" + name });
});

export default app;

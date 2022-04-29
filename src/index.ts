import Fastify from "fastify";

const app = Fastify({
  ajv: { customOptions: { removeAdditional: "all" } },
});

app.register(import("./autoload"));

const PORT = Number(process.env.PORT);

app.listen(PORT, "0.0.0.0", (err, address) => {
  if (err) throw err;
  const port = address.split(":")[2];
  console.log("http://localhost:" + port);
});

export const viteNodeApp = app;

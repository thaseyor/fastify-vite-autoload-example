import type { FastifyPluginAsync } from "fastify";

const User = {
  $id: "user",
  type: "object",
  properties: { name: { type: "number" } },
};

const plugin: FastifyPluginAsync = async (fastify): Promise<void> => {
  fastify.addSchema(User);
};

export default plugin;

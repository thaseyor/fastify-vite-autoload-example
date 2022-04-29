import type { FastifyPluginAsync } from "fastify";

const plugin: FastifyPluginAsync = async (fastify): Promise<void> => {
  fastify.get("", async (_request, _reply) => {
    return "ABOBA";
  });
};

export default plugin;

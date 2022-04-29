import type { FastifyPluginAsync } from "fastify";

const plugin: FastifyPluginAsync = async (fastify): Promise<void> => {
  fastify.post("", async (_request, _reply) => {
    return "shesh";
  });
};

export default plugin;

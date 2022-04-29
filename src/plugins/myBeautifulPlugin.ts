import type { FastifyPluginAsync } from "fastify";

const plugin: FastifyPluginAsync = async (fastify): Promise<void> => {
  fastify.decorate("hehe", () => "haha");
};

export default plugin;

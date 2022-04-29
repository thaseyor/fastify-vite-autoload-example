import type { FastifyPluginAsync } from "fastify";

const plugin: FastifyPluginAsync = async (fastify): Promise<void> => {
  fastify.get(
    "",
    {
      schema: {
        querystring: fastify.getSchema("user"),
      },
    },
    async (req) => req.query
  );
};

export default plugin;

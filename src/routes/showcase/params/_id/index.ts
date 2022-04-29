import type { FastifyPluginAsync } from "fastify";

const plugin: FastifyPluginAsync = async (fastify): Promise<void> => {
  fastify.get<{ Params: { id: string } }>(
    "",
    {
      schema: {
        params: {
          type: "object",
          required: ["id"],
          properties: { id: { type: "string" } },
        },
      },
    },
    async (req) => req.params.id
  );
};

export default plugin;

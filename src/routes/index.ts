import type { FastifyPluginAsync } from "fastify";

interface Info {
  routes?: string;
  plugins?: string;
}

const plugin: FastifyPluginAsync = async (fastify): Promise<void> => {
  const info: Info = {};

  fastify.ready(() => {
    info.routes = fastify.printRoutes();
    info.plugins = fastify.printPlugins();
  });

  fastify.get("/", async (_request, _reply) => {
    return "routes: \n" + info.routes + "\nplugins: \n" + info.plugins;
  });
};

export default plugin;

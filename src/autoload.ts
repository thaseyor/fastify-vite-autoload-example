import fp from "fastify-plugin";
import type { FastifyInstance, FastifyPluginAsync } from "fastify";

interface Modules {
  [key: string]: { default: FastifyPluginAsync };
}

interface PluginOptions {
  encapsulate?: boolean;
}

const imported: { [key: string]: Modules } = {
  // @ts-expect-error
  schemas: import.meta.globEager("./schemas/**/*.(ts|js|cjs|mjs)"),
  // @ts-expect-error
  plugins: import.meta.globEager("./plugins/**/*.(ts|js|cjs|mjs)"),
  // @ts-expect-error
  routes: import.meta.globEager("./routes/**/*.(ts|js|cjs|mjs)"),
};

const load = (
  items: Modules,
  type: string,
  options: PluginOptions,
  app: FastifyInstance
) => {
  if (!items) return console.error(`\n [Autoload] Unknown type: ${type} \n`);

  Object.entries(items).forEach(([path, exports]) => {
    const { default: itemModule } = exports;

    if (itemModule === undefined)
      return console.error(
        `\n [Autoload] Please export plugin from module ${path}. \n`
      );

    if (typeof itemModule !== "function")
      return console.error(
        `\n [Autoload] Plugin exported from ${path} is not a function. \n`
      );

    if (type === "routes") {
      const routePath = path
        .replace("./routes", "")
        .replace(/[\\\/][^\\\/]*\..*/, "")
        .replace(/[\\\/]_/g, "/:");

      void app.register(itemModule, { prefix: routePath });
      return;
    }

    void app.register(options.encapsulate ? itemModule : fp(itemModule));
  });
};

const autoload: FastifyPluginAsync<PluginOptions> = async (app, opts) => {
  Object.entries(imported).forEach(([type, items]) => {
    if (items) load(items, type, opts, app);
  });
};

export default fp(autoload, "3.x");

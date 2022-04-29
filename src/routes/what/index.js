const plugin = async (fastify) => {
  fastify.get("", async (req, reply) => {
    console.log(req.user);
    return fastify.hehe() + " from plugin\n";
  });
};

export default plugin;

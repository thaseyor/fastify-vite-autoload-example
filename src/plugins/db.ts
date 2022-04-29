import type { FastifyPluginAsync } from "fastify";
// import mysql from "mysql2";
// const opts = {
//   host: "localhost",
//   user: process.env.DB,
//   password: process.env.PASSWORD,
//   database: process.env.DB,
//   debug: false,
// };

const plugin: FastifyPluginAsync = async (fastify): Promise<void> => {
  // const pool = mysql.createPool(opts);
  // fastify.decorate("db", pool);
  // pool.getConnection(function (err, connection) {
  //   if (err) return console.error(err, opts); // not connected!
  //   connected = true;
  //   connection.query(
  //     "INSERT INTO MyGuests (firstname,lastname) VALUES ('mike', 'stone')",
  //     function (err, results, fields) {
  //       if (err) return console.error(err);
  //       console.log(results); // results contains rows returned by server
  //       console.log(fields); // fields contains extra meta data about results, if available
  //     }
  //   );
  // });
};

export default plugin;

const fastify = require("fastify");

const server = fastify({ logger: true });

server.get("/hello", async () => {
  return {
    message: "hello",
  };
});

server.get("/status", async () => {
  return {
    status: "OK",
  };
});

server.listen(3000, "0.0.0.0", () => {
  server.log.info("Server started");
});

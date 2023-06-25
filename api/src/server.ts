import Fastify from "fastify";
import { fastifyJwt } from "@fastify/jwt";
import cors from "@fastify/cors";
import { appRoutes } from "./routes";

const app = Fastify();

const secretPass = "A247DB24-C8AE-4B8A-8CB2-59637754BF2F";
// process.env.JWT_PASS as string;
console.log(process.env.JWT_PASS);

app.register(cors);
app.register(appRoutes);
app.register(fastifyJwt, {
  secret: secretPass,
});

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log("Servidor aberto na porta.. 3333");
  });

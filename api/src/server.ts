import Fastify from "fastify"
import { fastifyJwt } from "@fastify/jwt";
import cors from '@fastify/cors'
import { appRoutes } from "./routes"

const app = Fastify()

const secretPass = process.env.JWT_PASS as string

app.register(cors)
app.register(appRoutes)
app.register(fastifyJwt, {
    secret: secretPass
})

app.listen({
    port: 3333
})
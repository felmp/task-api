import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import bcrypt from "bcrypt";
import { prisma } from "../lib/prisma";

export class UserController {
  async create(request: FastifyRequest) {
    const createUserBody = z.object({
      name: z.string(),
      email: z.string(),
      password: z.string(),
    });

    const { email, name, password } = createUserBody.parse(request.body);

    await prisma.user.create({
      data: {
        email,
        name,
        password,
      },
    });
  }

  async login(request: FastifyRequest, reply: FastifyReply) {
    const loginUserBody = z.object({
      email: z.string(),
      password: z.string(),
    });

    const { email, password } = loginUserBody.parse(request.body);

    const user = await prisma.user.findFirstOrThrow({
      where: {
        email: {
          equals: email,
        },
      },
    });

    const hashedPass = await bcrypt.compare(password, user.password);

    if (!hashedPass) {
      throw new Error("Email ou senha inválidos");
    }

    const payload = {
      id: user.id,
      user: user.name,
    };

    const token = await reply.jwtSign(payload, {
      sign: {
        expiresIn: "4h",
      },
    });

    const { password: _, ...userLogin } = user;

    reply.send({
      user: userLogin,
      token,
    });
  }
}

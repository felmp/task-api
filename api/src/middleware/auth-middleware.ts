import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { prisma } from "../lib/prisma";
import { User } from "@prisma/client";

export const authMiddleware = async (
  request: FastifyRequest,
  reply: FastifyReply,
  next: NextFunction
) => {
  const authHeader = z.object({
    authorization: z.string(),
  });

  const authorization = authHeader.parse(request.headers);

  if (authorization) {
    await request.jwtVerify(async function (err, decoded) {
      if (err) {
        throw new Error("Erro ao autenticar");
      } else {
        if (decoded) {
          (await prisma.user.findFirst({
            where: {
              id: {
                equals: decoded.id,
              },
            },
          })) as User;
        }
      }
    });
  }
};

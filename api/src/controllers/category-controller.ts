import { User } from "@prisma/client";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { prisma } from "../lib/prisma";

export class CategoryController {
  async index(request: FastifyRequest) {
    const user = request.user as User;

    const category = await prisma.category.findMany({
      where: {
        user_id: user.id,
      },
    });

    return category;
  }

  async create(request: FastifyRequest, reply: FastifyReply) {
    const createCategoryBody = z.object({
      description: z.string(),
    });

    const { description } = createCategoryBody.parse(request.body);

    const user = request.user as User;

    await prisma.category.create({
      data: {
        description,
        user_id: user.id,
      },
    });

    reply.code(200).send({ message: "Categoria criada com sucesso!" });
  }

  async edit(request: FastifyRequest, reply: FastifyReply) {
    const editCategoryParams = z.object({
      id: z.string(),
    });

    const editCategoryBody = z.object({
      description: z.string(),
    });

    const { id } = editCategoryParams.parse(request.params);

    const { description } = editCategoryBody.parse(request.body);

    await prisma.category.update({
      data: {
        description,
      },
      where: {
        id: Number(id),
      },
    });

    return reply.code(200).send({ message: "Categoria editada com sucesso!" });
  }

  async delete(request: FastifyRequest, reply: FastifyReply) {
    const deleteCategoryParams = z.object({
      id: z.string(),
    });

    const { id } = deleteCategoryParams.parse(request.params);

    await prisma.category.delete({
      where: {
        id: Number(id),
      },
    });

    return reply.code(200).send({ message: "Categoria deletada com sucesso!" });
  }
}

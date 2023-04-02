import { User } from '@prisma/client'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'
import { prisma } from '../lib/prisma'


export class TaskController {
    async index(request: FastifyRequest) {
        const user = request.user as User;

        const tasks = prisma.user.findMany({
            select: {
                Task: {}
            },
            where: {
                id: user.id
            }
        })

        return tasks
    }

    async create(request: FastifyRequest, reply: FastifyReply) {
        const taskBody = z.object({
            description: z.string({
                required_error: 'Descrição é obrigatório',
                description: 'Descrição é obrigatória'
            }),
            expected_date: z.string(),
            category_id: z.number().optional()
        })

        
        const { description, category_id, expected_date } = taskBody.parse(request.body)
        
        const user = request.user as User
        
        const verifyCategory = await prisma.category.findMany({
            where: {
                user_id: user.id
            }
        })
        
        if(!verifyCategory)
            reply.code(404).send({ message: 'Você não possue categoria cadastrada.' })

        if(category_id) {
            const verifyCategoryUser = verifyCategory.find(c => c.id == category_id);

            if(!verifyCategoryUser)
            reply.code(404).send({ message: 'Você não possue esta categoria cadastrada.' })
        }

        
        await prisma.task.create({
            data: {
                description,
                created_at: new Date(),
                expected_date: new Date(expected_date),
                category_id: category_id ?? null,
                user_id: user.id
            }
        })

        reply.code(200).send({ message: 'Tarefa cadastrada com sucesso!' })
    }

    async edit(request: FastifyRequest, reply: FastifyReply) {
        const editTaskParams = z.object({
            id: z.string()
        })

        const editTaskBody = z.object({
            description: z.string(),
            expected_date: z.string(),
            category_id: z.number().optional(),
        })

        const { id } = editTaskParams.parse(request.params)
        const { description, expected_date, category_id } = editTaskBody.parse(request.body)

        await prisma.task.update({
            data: {
                description: description,
                expected_date: new Date(expected_date),
                category_id: category_id,
            },
            where: {
                id: id
            }
        })

        return reply.code(200).send({ message: 'Tarefa alterada com sucesso!' })
    }
    
    async delete(request: FastifyRequest, reply: FastifyReply) {
        const deleteTaskParams = z.object({
            id: z.string()
        })

        const { id } = deleteTaskParams.parse(request.params)

        await prisma.task.delete({
            where: {
                id
            }
        })

        return reply.code(200).send({ message: 'Tarefa deletada com sucesso!' })
    }
}
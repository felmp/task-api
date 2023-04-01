import { FastifyInstance } from "fastify"
import { TaskController } from "./controllers/task-controller"
import { UserController } from "./controllers/user-controller"
import { authMiddleware } from "./middleware/auth-middleware"

export async function appRoutes(app: FastifyInstance) {
    app.post('/cadastrar', new UserController().create)
    app.post('/login', new UserController().login)

    app.get('/tarefas', { preHandler: [authMiddleware] }, new TaskController().index)
    app.post('/tarefas/criar', { preHandler: [authMiddleware] }, new TaskController().create)
    app.post('/tarefas/:id', { preHandler: [authMiddleware] }, new TaskController().edit)
    app.delete('/tarefas/:id', { preHandler: [authMiddleware] }, new TaskController().delete)

}
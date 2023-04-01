import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt';
const prisma = new PrismaClient()

async function main() {
    await prisma.user.deleteMany()
    await prisma.category.deleteMany()

    await prisma.user.create({
      data: {
        name: 'Francisco Felipe Ferreira de Sousa',
        email: 'ferreirasousa@alu.uern.br',
        password: (await bcrypt.hash('1234', 10)).toString()
      }
    })

    await prisma.user.create({
      data: {
        name: 'João Lucas Jonas',
        email: 'joaolucas@alu.uern.br',
        password: (await bcrypt.hash('1234', 10)).toString()
      }
    })

    await prisma.user.create({
      data: {
        name: 'Lucas Vitor',
        email: 'lucasvitor@alu.uern.br',
        password: (await bcrypt.hash('1234', 10)).toString()
      }
    })

    await prisma.user.create({
      data: {
        name: 'Miguel',
        email: 'miguel@alu.uern.br',
        password: (await bcrypt.hash('1234', 10)).toString()
      }
    })

    await prisma.category.create({
      data: {
        description: 'Uern',
        user_id: 1
      }
    })

    await prisma.category.create({
      data: {
        description: 'Trabalho',
        user_id: 2
      }
    })
    
    await prisma.category.create({
      data: {
        description: 'Casa',
        user_id: 3
      }
    })

    await prisma.category.create({
      data: {
        description: 'Compras',
        user_id: 4
      }
    })
}


main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
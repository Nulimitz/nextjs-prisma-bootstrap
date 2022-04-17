import { PrismaClient } from "@prisma/client";

const getUserByEmail = async (email) => {
  const prisma = new PrismaClient()
  const user = await prisma.User.findUnique({
    where: {
      email,
    },
    include: {
      accounts: true,
    },
  })
  await prisma.$disconnect()
  return user
}

export { getUserByEmail };

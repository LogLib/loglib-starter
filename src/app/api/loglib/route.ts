//generated by loglib
import { prismaAdapter } from "@loglib/prisma-adapter"
import { createServerRoutes } from "@loglib/next"
import { PrismaClient } from "@prisma/client"

const db = new PrismaClient()

export const { POST, GET } = createServerRoutes({
    adapter: prismaAdapter(db),
    auth: { secret: process.env.LOGLIB_SECRET as string },

})    
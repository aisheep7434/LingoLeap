import { initTRPC } from '@trpc/server'
import { createTRPCReact } from '@trpc/react-query'

export const t = initTRPC.create()

export const router = t.router
export const publicProcedure = t.procedure

export type AppRouter = typeof appRouter

export const trpc = createTRPCReact<AppRouter>()
import { router, publicProcedure } from '../trpc'
import { prisma } from '@/lib/db'

export const appRouter = router({
  hello: publicProcedure
    .query(() => {
      return {
        greeting: 'Hello World!',
      }
    }),
  
  getDecks: publicProcedure
    .query(async () => {
      const decks = await prisma.deck.findMany({
        include: {
          _count: {
            select: { cards: true }
          }
        }
      })
      return decks
    }),
})

export type AppRouter = typeof appRouter
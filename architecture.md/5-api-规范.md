# 5. API 规范

## tRPC 路由定义

```typescript
import { z } from 'zod';
import { createTRPCRouter, publicProcedure, protectedProcedure } from '../trpc';

export const appRouter = createTRPCRouter({
  deck: deckRouter,
  quiz: quizRouter,
  profile: profileRouter,
});

export const deckRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.deck.findMany();
  }),
  getById: protectedProcedure
    .input(z.object({ id: z.number() }))
    .query(({ ctx, input }) => {
      return ctx.prisma.deck.findUnique({
        where: { id: input.id },
        include: { words: true },
      });
    }),
});

export const quizRouter = createTRPCRouter({
  submitResult: protectedProcedure
    .input(z.object({ deckId: z.number(), score: z.number() }))
    .mutation(async ({ ctx, input }) => {
      // Logic to save result and update mastery
      return { success: true };
    }),
});

export const profileRouter = createTRPCRouter({
  getCurrent: protectedProcedure.query(({ ctx }) => {
    return ctx.prisma.profile.findUnique({
      where: { id: ctx.session.user.id },
    });
  }),
});

export type AppRouter = typeof appRouter;
```

import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const listingsRouter = createTRPCRouter({
  create: protectedProcedure //use the protected procedure to create a mutation. This procedure has a middleware that checks if user is logged in
    .input(
      z.object({ name: z.string(), description: z.string(), price: z.number() })
    )
    .mutation(async ({ input, ctx }) => {
      const listing = await ctx.prisma.listing.create({
        data: {
          ...input,
          userId: ctx.auth.userId,
        },
      });
      return listing;
    }),
});

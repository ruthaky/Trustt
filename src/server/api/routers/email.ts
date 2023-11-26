import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { render } from "@react-email/render";
import WelcomeEmail from "emails/email-template";
import {Resend} from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const emailRouter = createTRPCRouter({
  sendMail: publicProcedure
    .input(z.object({ message: z.record(z.string()) }))
    .mutation(async ({ input }) => {
        await resend.emails.send({
          from: process.env.EMAIL_FROM ?? 'onboarding@resend.dev',
            to: [process.env.EMAIL_TO ?? "mubarekendriem@gmail.com"],
            subject: "New Application",
            html: render(WelcomeEmail({props: input.message})),
          });
      return {
        "Success": true
      };
    }),
});
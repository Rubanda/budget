import { db } from './db'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { nanoid } from 'nanoid'
import { NextAuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
// import { SendWelcomeEmail } from './send-email'

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(db),
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/login',
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    })
  ],
  callbacks: {
    async session({ token, session }) {
      if (token) {
        session.user.id = token?.id
        session.user.name = token?.name!
        session.user.email = token?.email!
        session.user.image = token?.picture!
        session.user.username = token?.username
      }

      return session
    },

    async jwt({ token, user }) {
      console.log('[jwt::auth]::token', token)

      console.log('[jwt::auth]::user', user)
      const dbUser = await db.user.findFirst({
        where: {
          email: token.email,
        },
      });
      if (!dbUser) {
        token.id = user!.id
        return token
      }

      if (!dbUser.name) {
        // console.log('[dbUser::auth]::username', dbUser)
        await db.user.update({
          where: {
            id: dbUser.id,
          },
          data: {
            name: nanoid(10),
          },
        });
        const name:any = dbUser?.name
        const email:any= dbUser?.email
        // const res:any = await SendWelcomeEmail({
        //   name,
        //   email
        // }
        // )
        // console.log('[dbUser::auth]::email', res)
      }

      return {
        id: dbUser.id,
        name: dbUser.name,
        email: dbUser.email,
        picture: dbUser.image,
      }
    },
    redirect() {
      return '/'
    },
  },
}
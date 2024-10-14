import { NextAuthOptions } from "next-auth"

import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import { FaGithub } from "react-icons/fa"
import { FcGoogle } from "react-icons/fc"
import { connectDB } from "./mongodb"
import User from "@/models/User"
import { randomBytes, randomUUID } from "crypto"

interface User {
  name: string
  email: string
}

const root = process.env.ROOT

export const authConfig: NextAuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      if(account?.provider === "google") {
        return registerGoogleUser(user as User)
      }
      return false
    },
    async session({ session }) {
      return Promise.resolve(session)
    },
    async jwt({ token, account, profile }) {
      if(account) {
        token.accessToken = account.access_token
        token.name = profile?.name
      }
      return token
    },
  },
  session: {
    strategy: "jwt",
    generateSessionToken: () => {
      return randomUUID?.() ?? randomBytes(32).toString("hex")
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
}

export const login = {
  github: {
    title: "github",
    icon: FaGithub,
  },
  google: {
    title: "google",
    icon: FcGoogle,
  },
}

async function registerGoogleUser( user: User ): Promise<boolean> {
  const { name, email } = user

  try {
    await connectDB()

    const userExists = await User.findOne({ email })
    const userId = name?.replace(" ", ".").toLowerCase()

    if(userExists) {
      return true
    } else {
      const res = await fetch(`${root}/api/user`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId,
          name,
          email,
        }),
      })

      if(res.ok) {
        return true
      }

      return false
    }
  } catch (error) {
    console.error(error)
    return false
  }
}
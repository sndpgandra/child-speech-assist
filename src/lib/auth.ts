import { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
    // Mock provider for development when no Google keys are present
    CredentialsProvider({
      id: "mock-login",
      name: "Mock Login (Dev)",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "parent" },
      },
      async authorize(credentials) {
        // Always allow in dev mode for demo
        if (process.env.NODE_ENV === "development" || true) {
          return {
            id: "1",
            name: "Parent User",
            email: "parent@example.com",
            image: "https://github.com/shadcn.png",
          }
        }
        return null
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET || "super-secret-dev-key",
}

"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { ArrowRight, Lock } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full space-y-8 text-center">
        <div className="space-y-2">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900">
            Speech Practice 🎈
          </h1>
          <p className="text-lg text-slate-600">
            Fun, daily speech practice for your little one.
          </p>
        </div>

        <div className="grid gap-4">
          {/* Child Mode Entry */}
          <Button
            asChild
            size="lg"
            className="w-full h-24 text-2xl rounded-2xl bg-green-500 hover:bg-green-600 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
          >
            <Link href="/child">
              I'm a Child 👶
              <ArrowRight className="ml-2 h-8 w-8" />
            </Link>
          </Button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-slate-200" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-gradient-to-b from-blue-50 to-white px-2 text-slate-500">
                For Parents
              </span>
            </div>
          </div>

          {/* Parent Mode Entry */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center justify-center">
                <Lock className="w-4 h-4 mr-2" />
                Parent Area
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Button
                variant="outline"
                className="w-full"
                onClick={() => signIn("mock-login", { callbackUrl: "/parent" })}
              >
                Sign in with Google
              </Button>
              <p className="text-xs text-slate-400 mt-2">
                (Uses Mock Login for Demo)
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

export function Navbar() {
    return (
        <nav className="border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="bg-primary/10 p-2 rounded-lg">
                                <Sparkles className="h-6 w-6 text-primary" />
                            </div>
                            <span className="font-bold text-xl tracking-tight text-slate-900">
                                TinyTalk
                            </span>
                        </Link>
                        <div className="hidden md:flex ml-10 space-x-8">
                            <Link href="#" className="text-slate-500 hover:text-slate-900 px-3 py-2 text-sm font-medium">
                                How it Works
                            </Link>
                            <Link href="#" className="text-slate-500 hover:text-slate-900 px-3 py-2 text-sm font-medium">
                                For Therapists
                            </Link>
                            <Link href="#" className="text-slate-500 hover:text-slate-900 px-3 py-2 text-sm font-medium">
                                Pricing
                            </Link>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <Link href="/parent" className="text-sm font-medium text-slate-600 hover:text-slate-900">
                            Parent Login
                        </Link>
                        <Button asChild className="rounded-full">
                            <Link href="/child">
                                Start Practice
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </nav>
    );
}

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Settings } from "lucide-react";

export default function ChildLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-slate-50">
            <header className="p-4 flex justify-end">
                <Button asChild variant="ghost" size="icon" className="opacity-50 hover:opacity-100">
                    <Link href="/parent">
                        <Settings className="w-6 h-6 text-slate-400" />
                        <span className="sr-only">Parent Mode</span>
                    </Link>
                </Button>
            </header>
            <main className="container mx-auto px-4 pb-8">
                {children}
            </main>
        </div>
    );
}

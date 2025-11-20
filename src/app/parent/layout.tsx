"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LayoutDashboard, List, Plus, LogOut } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { signOut } from "next-auth/react";

export default function ParentLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();

    const navItems = [
        { href: "/parent", label: "Dashboard", icon: LayoutDashboard },
        { href: "/parent/words", label: "Manage Words", icon: List },
        { href: "/parent/add", label: "Add New Word", icon: Plus },
    ];

    return (
        <div className="min-h-screen bg-slate-50 flex">
            {/* Sidebar */}
            <aside className="w-64 bg-white border-r border-slate-200 hidden md:flex flex-col">
                <div className="p-6 border-b border-slate-100">
                    <h1 className="text-xl font-bold text-slate-800">Parent Admin</h1>
                </div>

                <nav className="flex-1 p-4 space-y-2">
                    {navItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = pathname === item.href;

                        return (
                            <Button
                                asChild
                                key={item.href}
                                variant={isActive ? "secondary" : "ghost"}
                                className={cn(
                                    "w-full justify-start",
                                    isActive && "bg-slate-100 text-slate-900"
                                )}
                            >
                                <Link href={item.href}>
                                    <Icon className="w-4 h-4 mr-2" />
                                    {item.label}
                                </Link>
                            </Button>
                        );
                    })}
                </nav>

                <div className="p-4 border-t border-slate-100">
                    <Button
                        variant="outline"
                        className="w-full justify-start text-red-500 hover:text-red-600 hover:bg-red-50"
                        onClick={() => signOut({ callbackUrl: "/" })}
                    >
                        <LogOut className="w-4 h-4 mr-2" />
                        Sign Out
                    </Button>
                </div>
            </aside>

            {/* Mobile Header (visible only on small screens) */}
            <div className="md:hidden fixed top-0 left-0 right-0 bg-white border-b border-slate-200 z-50 p-4 flex justify-between items-center">
                <span className="font-bold">Parent Admin</span>
                {/* Mobile menu toggle would go here */}
            </div>

            {/* Main Content */}
            <main className="flex-1 p-8 overflow-y-auto mt-14 md:mt-0">
                {children}
            </main>
        </div>
    );
}

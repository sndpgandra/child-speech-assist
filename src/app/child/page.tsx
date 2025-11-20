"use client";

import { CATEGORIES } from "@/lib/types";
import { CategoryCard } from "@/components/child/category-card";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function ChildModeHome() {
    const router = useRouter();

    return (
        <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-extrabold text-slate-800 mb-4">
                    Time to Practice! 🎈
                </h1>
                <p className="text-xl text-slate-600">
                    Pick a card to start playing
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 h-[400px]">
                {CATEGORIES.map((category, index) => (
                    <motion.div
                        key={category.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="h-full"
                    >
                        <CategoryCard
                            category={category}
                            onClick={(id) => router.push(`/child/practice/${id}`)}
                        />
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

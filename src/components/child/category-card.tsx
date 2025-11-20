import { Category } from "@/lib/types";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Dog, Apple, Users } from "lucide-react";
import { motion } from "framer-motion";

interface CategoryCardProps {
    category: Category;
    onClick: (id: string) => void;
}

const iconMap: Record<string, any> = {
    Dog: Dog,
    Apple: Apple,
    Users: Users,
};

export function CategoryCard({ category, onClick }: CategoryCardProps) {
    const Icon = iconMap[category.icon] || Dog;

    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="h-full"
        >
            <Card
                className={cn(
                    "h-full cursor-pointer border-4 border-transparent hover:border-primary/20 transition-colors overflow-hidden",
                    category.color
                )}
                onClick={() => onClick(category.id)}
            >
                <CardContent className="flex flex-col items-center justify-center h-full p-6 space-y-4">
                    <div className="p-4 bg-white rounded-full shadow-sm">
                        <Icon className="w-12 h-12 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-800">{category.name}</h3>
                </CardContent>
            </Card>
        </motion.div>
    );
}

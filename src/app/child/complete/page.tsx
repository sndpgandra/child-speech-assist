"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Trophy, Home } from "lucide-react";
import confetti from "canvas-confetti";
import { useEffect } from "react";

export default function CompletionScreen() {
    const router = useRouter();

    useEffect(() => {
        // Fire confetti on mount
        const duration = 3 * 1000;
        const animationEnd = Date.now() + duration;
        const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

        const randomInRange = (min: number, max: number) => {
            return Math.random() * (max - min) + min;
        }

        const interval: any = setInterval(function () {
            const timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
                return clearInterval(interval);
            }

            const particleCount = 50 * (timeLeft / duration);
            confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
            confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
        }, 250);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 p-4 text-center">
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="mb-8"
            >
                <div className="w-40 h-40 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Trophy className="w-20 h-20 text-yellow-500" />
                </div>
            </motion.div>

            <h1 className="text-4xl font-black text-slate-800 mb-4">
                Great Job! 🌟
            </h1>
            <p className="text-xl text-slate-600 mb-12">
                You practiced all the words!
            </p>

            <Button
                size="lg"
                className="h-16 px-8 text-xl rounded-full"
                onClick={() => router.push('/child')}
            >
                <Home className="w-6 h-6 mr-2" />
                Back to Home
            </Button>
        </div>
    );
}

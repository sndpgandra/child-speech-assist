"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { storage } from "@/lib/storage";
import { Word } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, ArrowRight, Volume2, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function PracticeSession() {
    const params = useParams();
    const router = useRouter();
    const categoryId = params.id as string;

    const [words, setWords] = useState<Word[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false); // For video/pronunciation toggle
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const categoryWords = storage.getWordsByCategory(categoryId);
        setWords(categoryWords);
        setLoading(false);
    }, [categoryId]);

    const currentWord = words[currentIndex];

    const handleNext = () => {
        if (currentIndex < words.length - 1) {
            setCurrentIndex(prev => prev + 1);
            setIsFlipped(false);
        } else {
            // Session complete
            router.push('/child/complete');
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prev => prev - 1);
            setIsFlipped(false);
        }
    };

    if (loading) return <div>Loading...</div>;
    if (words.length === 0) return <div>No words found for this category.</div>;

    return (
        <div className="max-w-4xl mx-auto h-[calc(100vh-100px)] flex flex-col">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => router.push('/child')}
                    className="rounded-full hover:bg-slate-100"
                >
                    <X className="w-8 h-8 text-slate-400" />
                </Button>
                <div className="text-slate-400 font-medium">
                    {currentIndex + 1} / {words.length}
                </div>
            </div>

            {/* Main Card Area */}
            <div className="flex-1 flex items-center justify-center relative">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentWord.id}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        className="w-full max-w-2xl aspect-[4/3]"
                    >
                        <Card className="w-full h-full overflow-hidden shadow-xl border-0 bg-white rounded-3xl relative">
                            {/* Image View */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                                <div className="relative w-full flex-1 mb-8">
                                    {/* Fallback for missing images */}
                                    <div className="w-full h-full bg-slate-100 rounded-2xl flex items-center justify-center text-slate-300">
                                        {currentWord.imageUrl ? (
                                            <Image
                                                src={currentWord.imageUrl}
                                                alt={currentWord.text}
                                                fill
                                                className="object-contain"
                                                onError={(e) => {
                                                    // Fallback logic handled by parent div if image fails to load
                                                    // In a real app we'd have a proper fallback component
                                                    (e.target as HTMLImageElement).style.display = 'none';
                                                }}
                                            />
                                        ) : (
                                            <span className="text-4xl">🖼️</span>
                                        )}
                                    </div>
                                </div>
                                <h2 className="text-6xl font-black text-slate-800 tracking-tight">
                                    {currentWord.text}
                                </h2>
                            </div>
                        </Card>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Controls */}
            <div className="h-32 flex items-center justify-between px-4 mt-8">
                <Button
                    variant="outline"
                    size="icon"
                    className="w-16 h-16 rounded-full border-2"
                    onClick={handlePrev}
                    disabled={currentIndex === 0}
                >
                    <ArrowLeft className="w-8 h-8" />
                </Button>

                <Button
                    size="lg"
                    className="h-20 px-12 rounded-full text-2xl font-bold bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
                    onClick={() => {
                        // Play pronunciation sound (mock for now)
                        // In real app: new Audio(currentWord.audioUrl).play();
                        setIsFlipped(!isFlipped);
                    }}
                >
                    <Volume2 className="w-8 h-8 mr-3" />
                    Hear It
                </Button>

                <Button
                    variant="default" // Changed to primary action style for "Next"
                    size="icon"
                    className="w-16 h-16 rounded-full bg-green-500 hover:bg-green-600 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
                    onClick={handleNext}
                >
                    <ArrowRight className="w-8 h-8 text-white" />
                </Button>
            </div>
        </div>
    );
}

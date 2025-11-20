"use client";

import { useState, useEffect, useRef } from 'react';
import { Word } from '@/lib/types';
import { SpeechRecognitionHandler } from '@/lib/speech-recognition';
import { BigCard } from './BigCard';
import { VideoPrompt } from './VideoPrompt';
import { Assistant } from './Assistant';
import { BookLayout } from './BookLayout';
import confetti from 'canvas-confetti';
import { Mic, MicOff, ArrowRight, RotateCcw, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

interface PracticeSessionProps {
    words: Word[];
    onComplete: () => void;
}

export default function PracticeSession({ words, onComplete }: PracticeSessionProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isListening, setIsListening] = useState(false);
    const [feedback, setFeedback] = useState<'idle' | 'listening' | 'success' | 'try-again'>('idle');
    const [transcript, setTranscript] = useState('');
    const [isMounted, setIsMounted] = useState(false);
    const [direction, setDirection] = useState(1);
    const [isAnimating, setIsAnimating] = useState(false);
    const [bearState, setBearState] = useState<'idle' | 'listening' | 'success' | 'try-again' | 'walking' | 'turning-page'>('idle');
    const [bearPosition, setBearPosition] = useState<'left' | 'center' | 'right'>('left');

    const recognitionRef = useRef<SpeechRecognitionHandler | null>(null);
    const currentWord = words[currentIndex];

    useEffect(() => {
        setIsMounted(true);
        recognitionRef.current = new SpeechRecognitionHandler(
            (result) => {
                setTranscript(result.transcript);
                checkPronunciation(result.transcript);
            },
            (error) => {
                console.error("Speech error:", error);
                setIsListening(false);
                setFeedback('try-again');
                setBearState('try-again');
            }
        );

        return () => {
            recognitionRef.current?.stop();
        };
    }, [currentIndex]);

    // Sync bear state with feedback
    useEffect(() => {
        if (!isAnimating) {
            setBearState(feedback);
        }
    }, [feedback, isAnimating]);

    if (!isMounted) {
        return null;
    }

    const startListening = () => {
        setFeedback('listening');
        setBearState('listening');
        setTranscript('');
        recognitionRef.current?.start();
        setIsListening(true);
    };

    const stopListening = () => {
        recognitionRef.current?.stop();
        setIsListening(false);
        if (feedback === 'listening') {
            setFeedback('idle');
            setBearState('idle');
        }
    };

    const checkPronunciation = (spokenText: string) => {
        setIsListening(false);
        const target = currentWord.text.toLowerCase();
        const spoken = spokenText.toLowerCase();

        if (spoken.includes(target) || target.includes(spoken)) {
            setFeedback('success');
            setBearState('success');
            triggerConfetti();
        } else {
            setFeedback('try-again');
            setBearState('try-again');
        }
    };

    const triggerConfetti = () => {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });
    };

    const nextWord = async () => {
        if (isAnimating) return;

        setIsAnimating(true);
        setDirection(1);

        // Step 1: Bear walks to center
        setBearState('walking');
        setBearPosition('center');
        await new Promise(resolve => setTimeout(resolve, 800));

        // Step 2: Bear walks to right
        setBearPosition('right');
        await new Promise(resolve => setTimeout(resolve, 800));

        // Step 3: Bear reaches up to turn page
        setBearState('turning-page');
        await new Promise(resolve => setTimeout(resolve, 500));

        // Step 4: Page turn happens
        if (currentIndex < words.length - 1) {
            setCurrentIndex(prev => prev + 1);
            setFeedback('idle');
            setTranscript('');
        } else {
            onComplete();
            setIsAnimating(false);
            return;
        }

        await new Promise(resolve => setTimeout(resolve, 600));

        // Step 5: Bear walks back to left
        setBearState('walking');
        setBearPosition('center');
        await new Promise(resolve => setTimeout(resolve, 800));

        setBearPosition('left');
        await new Promise(resolve => setTimeout(resolve, 800));

        // Step 6: Bear returns to idle
        setBearState('idle');
        setIsAnimating(false);
    };

    const pageVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
            rotateY: direction > 0 ? 90 : -90
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
            rotateY: 0
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0,
            rotateY: direction < 0 ? 90 : -90
        })
    };

    return (
        <div className="relative">
            <BookLayout
                leftContent={
                    <div className="flex flex-col items-center justify-between h-full w-full py-8">
                        <div className="w-full flex justify-between px-4">
                            <Button variant="ghost" asChild className="text-slate-400 hover:text-slate-600">
                                <Link href="/child"><Home className="w-6 h-6" /></Link>
                            </Button>
                            <div className="text-slate-400 font-medium">
                                {currentIndex + 1} / {words.length}
                            </div>
                        </div>

                        <div className="flex-1 flex flex-col items-center justify-center space-y-8">
                            {/* Bear is now positioned absolutely outside this container */}

                            <div className="text-center space-y-2">
                                <h2 className="text-2xl font-bold text-slate-700">
                                    {feedback === 'idle' && "Let's say..."}
                                    {feedback === 'listening' && "I'm listening..."}
                                    {feedback === 'success' && "You did it!"}
                                    {feedback === 'try-again' && "Oops, try again!"}
                                </h2>
                                {transcript && (
                                    <p className="text-slate-400 italic">"{transcript}"</p>
                                )}
                            </div>
                        </div>

                        <div className="w-full flex justify-center pb-8">
                            <Button
                                size="lg"
                                className={`rounded-full w-24 h-24 shadow-xl transition-all transform hover:scale-105 ${isListening
                                        ? 'bg-red-500 hover:bg-red-600 animate-pulse'
                                        : 'bg-blue-500 hover:bg-blue-600'
                                    }`}
                                onClick={isListening ? stopListening : startListening}
                            >
                                {isListening ? <MicOff className="h-10 w-10" /> : <Mic className="h-10 w-10" />}
                            </Button>
                        </div>
                    </div>
                }
                rightContent={
                    <div className="h-full w-full flex flex-col items-center justify-center relative">
                        <AnimatePresence initial={false} custom={direction} mode="wait">
                            <motion.div
                                key={currentIndex}
                                custom={direction}
                                variants={pageVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                    x: { type: "spring", stiffness: 300, damping: 30 },
                                    opacity: { duration: 0.2 }
                                }}
                                className="absolute inset-0 flex flex-col items-center justify-center p-8"
                            >
                                <div className="w-full max-w-md space-y-8">
                                    <BigCard
                                        text={currentWord.text}
                                        imageUrl={currentWord.imageUrl}
                                        className={`shadow-xl bg-white ${feedback === 'success' ? 'ring-4 ring-green-400' : ''}`}
                                    />
                                    <VideoPrompt word={currentWord.text} videoUrl={currentWord.videoUrl} />
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Navigation Buttons */}
                        <div className="absolute bottom-8 right-8 z-50">
                            {feedback === 'success' ? (
                                <Button
                                    size="lg"
                                    className="rounded-full w-20 h-20 bg-green-500 hover:bg-green-600 shadow-2xl animate-bounce"
                                    onClick={nextWord}
                                    disabled={isAnimating}
                                >
                                    <ArrowRight className="h-10 w-10" />
                                </Button>
                            ) : (
                                <Button
                                    size="lg"
                                    className="rounded-full w-20 h-20 bg-slate-300 hover:bg-slate-400 text-white shadow-xl"
                                    onClick={nextWord}
                                    disabled={isAnimating}
                                >
                                    <ArrowRight className="h-10 w-10" />
                                    <span className="sr-only">Skip</span>
                                </Button>
                            )}
                        </div>
                    </div>
                }
            />

            {/* Bear positioned absolutely over entire book */}
            <div className="absolute bottom-32 left-0 right-0 pointer-events-none z-40">
                <Assistant state={bearState} position={bearPosition} />
            </div>
        </div>
    );
}

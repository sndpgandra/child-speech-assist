"use client";

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import { SEED_WORDS } from '@/lib/data';
import PracticeSession from '@/components/child/PracticeSession';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export default function PracticePage() {
    const params = useParams();
    const router = useRouter();
    const categoryId = params.category as string;

    const categoryWords = SEED_WORDS.filter(word => word.categoryId === categoryId);

    if (categoryWords.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center h-screen space-y-4">
                <h1 className="text-2xl font-bold text-slate-700">Category not found or empty</h1>
                <Button onClick={() => router.back()}>Go Back</Button>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50 p-4">
            <div className="max-w-4xl mx-auto">
                <Button variant="ghost" onClick={() => router.back()} className="mb-4">
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back to Categories
                </Button>

                <PracticeSession
                    words={categoryWords}
                    onComplete={() => {
                        // Could show a summary screen here, for now just go back
                        alert("Category Complete! Great job!");
                        router.push('/child/dashboard');
                    }}
                />
            </div>
        </div>
    );
}

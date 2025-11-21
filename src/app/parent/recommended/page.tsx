"use client";

import { useState } from 'react';
import { getRecommendedNextWords, getWordsByDifficulty } from '@/lib/wordbank-service';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, Star, TrendingUp } from 'lucide-react';

export default function RecommendedWordsPage() {
    const [childAge, setChildAge] = useState(20); // Default 20 months
    const [showDifficulty, setShowDifficulty] = useState(1);

    // Get recommended words based on age
    const recommendedByAge = getRecommendedNextWords(childAge, 15);

    // Get words by difficulty
    const easyWords = getWordsByDifficulty(1);
    const mediumWords = getWordsByDifficulty(2);
    const hardWords = getWordsByDifficulty(3);

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold text-slate-900">Recommended Words</h1>
                <p className="text-slate-600 mt-2">
                    Personalized word suggestions based on your child's age and development
                </p>
            </div>

            {/* Age Selector */}
            <Card>
                <CardHeader>
                    <CardTitle>Child's Current Age</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        <div className="flex items-center gap-4">
                            <label className="text-sm font-medium text-slate-700 min-w-[120px]">
                                Age: {childAge} months
                            </label>
                            <input
                                type="range"
                                min="12"
                                max="36"
                                value={childAge}
                                onChange={(e) => setChildAge(parseInt(e.target.value))}
                                className="flex-1"
                            />
                        </div>
                        <p className="text-sm text-slate-500">
                            Showing words typically learned around {childAge}-{childAge + 4} months
                        </p>
                    </div>
                </CardContent>
            </Card>

            {/* Recommended Words Based on Age */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Star className="h-5 w-5 text-yellow-500" />
                        Recommended for {childAge} Months
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    {recommendedByAge.length > 0 ? (
                        <>
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 mb-4">
                                {recommendedByAge.map(word => (
                                    <div
                                        key={word.id}
                                        className="border rounded-lg p-4 hover:shadow-md transition-shadow bg-yellow-50 border-yellow-200"
                                    >
                                        <div className="font-medium text-slate-900">{word.text}</div>
                                        <div className="text-xs text-slate-500 mt-1">
                                            AoA: {word.ageOfAcquisition} mo
                                        </div>
                                        <div className="text-xs text-yellow-600 font-medium mt-1">
                                            Level {word.difficultyLevel}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <Link href={`/child`}>
                                <Button className="w-full">
                                    Start Practice Session
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </Link>
                        </>
                    ) : (
                        <p className="text-slate-500 text-center py-8">
                            No recommendations available for this age range. Try adjusting the age slider.
                        </p>
                    )}
                </CardContent>
            </Card>

            {/* Words by Difficulty Level */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <TrendingUp className="h-5 w-5 text-blue-500" />
                        Browse by Difficulty
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex gap-2 mb-4">
                        <Button
                            variant={showDifficulty === 1 ? "default" : "outline"}
                            onClick={() => setShowDifficulty(1)}
                        >
                            Easy ({easyWords.length})
                        </Button>
                        <Button
                            variant={showDifficulty === 2 ? "default" : "outline"}
                            onClick={() => setShowDifficulty(2)}
                        >
                            Medium ({mediumWords.length})
                        </Button>
                        <Button
                            variant={showDifficulty === 3 ? "default" : "outline"}
                            onClick={() => setShowDifficulty(3)}
                        >
                            Hard ({hardWords.length})
                        </Button>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
                        {(showDifficulty === 1 ? easyWords : showDifficulty === 2 ? mediumWords : hardWords)
                            .slice(0, 24)
                            .map(word => (
                                <div
                                    key={word.id}
                                    className="border rounded-lg p-3 hover:shadow-md transition-shadow"
                                >
                                    <div className="font-medium text-slate-900 text-sm">{word.text}</div>
                                    <div className="text-xs text-slate-500 mt-1">
                                        {word.ageOfAcquisition} mo
                                    </div>
                                </div>
                            ))}
                    </div>
                </CardContent>
            </Card>

            {/* Learning Path */}
            <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
                <CardHeader>
                    <CardTitle>💡 Learning Path Tip</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-slate-700">
                        Start with <strong>Level 1 (Easy)</strong> words that match your child's age.
                        Once they master 80% of words at their level, move to the next difficulty level.
                        This gradual progression builds confidence and ensures solid foundation.
                    </p>
                </CardContent>
            </Card>
        </div>
    );
}

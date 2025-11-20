"use client";

import { useState } from 'react';
import { SEED_WORDS } from '@/lib/data';
import { CATEGORIES } from '@/lib/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function WordbankViewerPage() {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [selectedDifficulty, setSelectedDifficulty] = useState<number | null>(null);
    const [ageRange, setAgeRange] = useState<[number, number]>([16, 30]);

    // Filter words
    const filteredWords = SEED_WORDS.filter(word => {
        if (selectedCategory && word.categoryId !== selectedCategory) return false;
        if (selectedDifficulty && word.difficultyLevel !== selectedDifficulty) return false;
        if (word.ageOfAcquisition) {
            if (word.ageOfAcquisition < ageRange[0] || word.ageOfAcquisition > ageRange[1]) return false;
        }
        return true;
    });

    // Group by category
    const wordsByCategory = filteredWords.reduce((acc, word) => {
        if (!acc[word.categoryId]) acc[word.categoryId] = [];
        acc[word.categoryId].push(word);
        return acc;
    }, {} as Record<string, typeof SEED_WORDS>);

    // Statistics
    const totalWords = SEED_WORDS.length;
    const wordsWithAoA = SEED_WORDS.filter(w => w.ageOfAcquisition).length;
    const avgAoA = SEED_WORDS.filter(w => w.ageOfAcquisition).reduce((sum, w) => sum + (w.ageOfAcquisition || 0), 0) / wordsWithAoA;

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold text-slate-900">Wordbank Vocabulary Viewer</h1>
                <p className="text-slate-600 mt-2">
                    Browse the complete vocabulary database with Age of Acquisition data
                </p>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <Card>
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium text-slate-600">Total Words</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-3xl font-bold text-slate-900">{totalWords}</div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium text-slate-600">With AoA Data</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-3xl font-bold text-slate-900">{wordsWithAoA}</div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium text-slate-600">Avg AoA</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-3xl font-bold text-slate-900">{avgAoA.toFixed(1)} mo</div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium text-slate-600">Categories</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-3xl font-bold text-slate-900">{CATEGORIES.length}</div>
                    </CardContent>
                </Card>
            </div>

            {/* Filters */}
            <Card>
                <CardHeader>
                    <CardTitle>Filters</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    {/* Category Filter */}
                    <div>
                        <label className="text-sm font-medium text-slate-700 mb-2 block">Category</label>
                        <div className="flex flex-wrap gap-2">
                            <Button
                                variant={selectedCategory === null ? "default" : "outline"}
                                size="sm"
                                onClick={() => setSelectedCategory(null)}
                            >
                                All
                            </Button>
                            {CATEGORIES.map(cat => (
                                <Button
                                    key={cat.id}
                                    variant={selectedCategory === cat.id ? "default" : "outline"}
                                    size="sm"
                                    onClick={() => setSelectedCategory(cat.id)}
                                >
                                    {cat.name}
                                </Button>
                            ))}
                        </div>
                    </div>

                    {/* Difficulty Filter */}
                    <div>
                        <label className="text-sm font-medium text-slate-700 mb-2 block">Difficulty Level</label>
                        <div className="flex gap-2">
                            <Button
                                variant={selectedDifficulty === null ? "default" : "outline"}
                                size="sm"
                                onClick={() => setSelectedDifficulty(null)}
                            >
                                All
                            </Button>
                            {[1, 2, 3, 4, 5].map(level => (
                                <Button
                                    key={level}
                                    variant={selectedDifficulty === level ? "default" : "outline"}
                                    size="sm"
                                    onClick={() => setSelectedDifficulty(level)}
                                >
                                    Level {level}
                                </Button>
                            ))}
                        </div>
                    </div>

                    {/* Age Range */}
                    <div>
                        <label className="text-sm font-medium text-slate-700 mb-2 block">
                            Age Range: {ageRange[0]}-{ageRange[1]} months
                        </label>
                        <div className="flex gap-4">
                            <input
                                type="range"
                                min="12"
                                max="30"
                                value={ageRange[0]}
                                onChange={(e) => setAgeRange([parseInt(e.target.value), ageRange[1]])}
                                className="flex-1"
                            />
                            <input
                                type="range"
                                min="12"
                                max="30"
                                value={ageRange[1]}
                                onChange={(e) => setAgeRange([ageRange[0], parseInt(e.target.value)])}
                                className="flex-1"
                            />
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Results */}
            <div className="space-y-6">
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-bold text-slate-900">
                        {filteredWords.length} Words
                    </h2>
                </div>

                {Object.entries(wordsByCategory).map(([categoryId, words]) => {
                    const category = CATEGORIES.find(c => c.id === categoryId);
                    return (
                        <Card key={categoryId}>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <span className={`${category?.color} px-3 py-1 rounded-full text-sm`}>
                                        {category?.name || categoryId}
                                    </span>
                                    <span className="text-slate-500 text-sm font-normal">
                                        ({words.length} words)
                                    </span>
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
                                    {words
                                        .sort((a, b) => (a.ageOfAcquisition || 0) - (b.ageOfAcquisition || 0))
                                        .map(word => (
                                            <div
                                                key={word.id}
                                                className="border rounded-lg p-3 hover:shadow-md transition-shadow"
                                            >
                                                <div className="font-medium text-slate-900">{word.text}</div>
                                                <div className="text-xs text-slate-500 mt-1 space-y-1">
                                                    {word.ageOfAcquisition && (
                                                        <div>AoA: {word.ageOfAcquisition} mo</div>
                                                    )}
                                                    {word.difficultyLevel && (
                                                        <div>Level: {word.difficultyLevel}</div>
                                                    )}
                                                    <div className="text-xs text-slate-400">{word.status}</div>
                                                </div>
                                            </div>
                                        ))}
                                </div>
                            </CardContent>
                        </Card>
                    );
                })}
            </div>
        </div>
    );
}

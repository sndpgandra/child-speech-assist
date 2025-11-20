"use client";

import { useEffect, useState } from "react";
import { storage } from "@/lib/storage";
import { Word } from "@/lib/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Clock, Star } from "lucide-react";

export default function ParentDashboard() {
    const [words, setWords] = useState<Word[]>([]);

    useEffect(() => {
        setWords(storage.getWords());
    }, []);

    const stats = {
        total: words.length,
        mastered: words.filter(w => w.status === 'mastered').length,
        practicing: words.filter(w => w.status === 'practicing').length,
        new: words.filter(w => w.status === 'new').length,
    };

    return (
        <div className="space-y-8">
            <div>
                <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
                <p className="text-slate-500">Overview of your child's progress.</p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Mastered Words</CardTitle>
                        <Star className="h-4 w-4 text-yellow-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{stats.mastered}</div>
                        <p className="text-xs text-muted-foreground">
                            {Math.round((stats.mastered / stats.total) * 100) || 0}% of total words
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">In Practice</CardTitle>
                        <Clock className="h-4 w-4 text-blue-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{stats.practicing}</div>
                        <p className="text-xs text-muted-foreground">
                            Currently learning
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">New Words</CardTitle>
                        <CheckCircle className="h-4 w-4 text-slate-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{stats.new}</div>
                        <p className="text-xs text-muted-foreground">
                            Ready to start
                        </p>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

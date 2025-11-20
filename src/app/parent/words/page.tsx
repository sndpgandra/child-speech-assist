"use client";

import { useEffect, useState } from "react";
import { storage } from "@/lib/storage";
import { Word, ProgressStatus } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

export default function WordManagement() {
    const [words, setWords] = useState<Word[]>([]);

    useEffect(() => {
        setWords(storage.getWords());
    }, []);

    const handleStatusChange = (wordId: string, newStatus: ProgressStatus) => {
        storage.updateWordStatus(wordId, newStatus);
        setWords(storage.getWords()); // Refresh list
    };

    const getStatusColor = (status: ProgressStatus) => {
        switch (status) {
            case 'mastered': return 'bg-yellow-500 hover:bg-yellow-600';
            case 'practicing': return 'bg-blue-500 hover:bg-blue-600';
            default: return 'bg-slate-500 hover:bg-slate-600';
        }
    };

    return (
        <div className="space-y-8">
            <div>
                <h2 className="text-3xl font-bold tracking-tight">Manage Words</h2>
                <p className="text-slate-500">Update status or add new words.</p>
            </div>

            <div className="rounded-md border bg-white">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Word</TableHead>
                            <TableHead>Category</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {words.map((word) => (
                            <TableRow key={word.id}>
                                <TableCell className="font-medium">{word.text}</TableCell>
                                <TableCell className="capitalize">{word.categoryId}</TableCell>
                                <TableCell>
                                    <Badge className={getStatusColor(word.status)}>
                                        {word.status}
                                    </Badge>
                                </TableCell>
                                <TableCell className="text-right">
                                    <Select
                                        defaultValue={word.status}
                                        onValueChange={(val) => handleStatusChange(word.id, val as ProgressStatus)}
                                    >
                                        <SelectTrigger className="w-[130px] ml-auto">
                                            <SelectValue placeholder="Status" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="new">New</SelectItem>
                                            <SelectItem value="practicing">Practicing</SelectItem>
                                            <SelectItem value="mastered">Mastered</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}

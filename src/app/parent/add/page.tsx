"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { storage } from "@/lib/storage";
import { CATEGORIES } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AddWord() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        text: "",
        categoryId: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        const newWord = {
            id: Date.now().toString(), // Simple ID generation
            text: formData.text,
            categoryId: formData.categoryId,
            imageUrl: "", // Placeholder for now, could add file upload later
            status: "new" as const,
        };

        storage.addWord(newWord);

        // Simulate delay
        setTimeout(() => {
            router.push("/parent/words");
            router.refresh();
        }, 500);
    };

    return (
        <div className="max-w-md mx-auto">
            <Card>
                <CardHeader>
                    <CardTitle>Add New Word</CardTitle>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <Label htmlFor="text">Word Text</Label>
                            <Input
                                id="text"
                                placeholder="e.g. Elephant"
                                required
                                value={formData.text}
                                onChange={(e) => setFormData({ ...formData, text: e.target.value })}
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="category">Category</Label>
                            <Select
                                required
                                onValueChange={(val) => setFormData({ ...formData, categoryId: val })}
                            >
                                <SelectTrigger>
                                    <SelectValue placeholder="Select category" />
                                </SelectTrigger>
                                <SelectContent>
                                    {CATEGORIES.map((cat) => (
                                        <SelectItem key={cat.id} value={cat.id}>
                                            {cat.name}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>

                        <Button type="submit" className="w-full" disabled={loading}>
                            {loading ? "Adding..." : "Add Word"}
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}

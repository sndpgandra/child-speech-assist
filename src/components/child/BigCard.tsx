import React from 'react';
import Image from 'next/image';
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface BigCardProps {
    text: string;
    imageUrl: string;
    onClick?: () => void;
    className?: string;
}

export function BigCard({ text, imageUrl, onClick, className }: BigCardProps) {
    return (
        <Card
            className={cn(
                "w-full max-w-md aspect-square cursor-pointer hover:scale-105 transition-transform duration-300 border-4 border-blue-200 rounded-3xl overflow-hidden shadow-xl",
                className
            )}
            onClick={onClick}
        >
            <CardContent className="p-0 h-full flex flex-col items-center justify-center bg-white">
                <div className="relative w-3/4 h-3/4 mb-4">
                    <Image
                        src={imageUrl}
                        alt={text}
                        fill
                        className="object-contain"
                        priority
                    />
                </div>
                <h2 className="text-4xl font-bold text-slate-800 tracking-wide">{text}</h2>
            </CardContent>
        </Card>
    );
}

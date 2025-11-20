import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { PlayCircle } from "lucide-react";

interface VideoPromptProps {
    word: string;
    videoUrl?: string;
}

export function VideoPrompt({ word, videoUrl }: VideoPromptProps) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline" className="gap-2">
                    <PlayCircle className="h-5 w-5" />
                    Watch Mouth
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>How to say "{word}"</DialogTitle>
                </DialogHeader>
                <div className="aspect-video bg-slate-50 rounded-lg flex items-center justify-center overflow-hidden">
                    {videoUrl ? (
                        videoUrl.endsWith('.svg') ? (
                            <img
                                src={videoUrl}
                                alt={`Mouth movement for ${word}`}
                                className="w-full h-full object-contain"
                            />
                        ) : (
                            <video
                                src={videoUrl}
                                controls
                                autoPlay
                                className="w-full h-full"
                            />
                        )
                    ) : (
                        <div className="text-slate-400 text-center p-4">
                            <p>Video demonstration coming soon!</p>
                            <p className="text-sm mt-2">(Placeholder for AI-generated lip movement)</p>
                        </div>
                    )}
                </div>
            </DialogContent>
        </Dialog>
    );
}

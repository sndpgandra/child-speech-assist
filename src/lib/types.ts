export type ProgressStatus = 'new' | 'practicing' | 'mastered';

export interface Word {
    id: string;
    text: string;
    categoryId: string;
    imageUrl: string;
    videoUrl?: string; // Optional for now
    status: ProgressStatus;
}

export interface Category {
    id: string;
    name: string;
    icon: string; // Lucide icon name or emoji
    color: string; // Tailwind color class for background
}

export const CATEGORIES: Category[] = [
    { id: 'animals', name: 'Animals', icon: 'Dog', color: 'bg-orange-100' },
    { id: 'food', name: 'Food', icon: 'Apple', color: 'bg-green-100' },
    { id: 'family', name: 'Family', icon: 'Users', color: 'bg-blue-100' },
];

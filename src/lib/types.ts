export type ProgressStatus = 'new' | 'practicing' | 'mastered';

export interface Word {
    id: string;
    text: string;
    categoryId: string;
    imageUrl: string;
    videoUrl?: string; // Optional for now
    status: ProgressStatus;
    difficultyLevel?: number; // 1-5 scale
    ageOfAcquisition?: number; // in months
}

export interface Category {
    id: string;
    name: string;
    icon: string; // Lucide icon name or emoji
    color: string; // Tailwind color class for background
}

export const CATEGORIES: Category[] = [
    { id: 'early-sounds', name: 'Early Sounds', icon: 'Music', color: 'bg-purple-100' },
    { id: 'sounds', name: 'Sounds', icon: 'Volume2', color: 'bg-purple-100' },
    { id: 'body-parts', name: 'Body Parts', icon: 'Hand', color: 'bg-pink-100' },
    { id: 'animals', name: 'Animals', icon: 'Dog', color: 'bg-orange-100' },
    { id: 'food', name: 'Food', icon: 'Apple', color: 'bg-green-100' },
    { id: 'family', name: 'Family', icon: 'Users', color: 'bg-blue-100' },
    { id: 'toys', name: 'Toys', icon: 'Blocks', color: 'bg-yellow-100' },
    { id: 'actions', name: 'Actions', icon: 'Zap', color: 'bg-red-100' },
    { id: 'descriptive', name: 'Descriptive', icon: 'Star', color: 'bg-indigo-100' },
];

import { Word, ProgressStatus } from './types';
import { SEED_WORDS } from './data';

const STORAGE_KEY = 'speech_app_data_v1';

interface StorageData {
    words: Word[];
}

export const storage = {
    // Initialize storage with seed data if empty
    init: (): void => {
        if (typeof window === 'undefined') return;

        const current = localStorage.getItem(STORAGE_KEY);
        if (!current) {
            const initialData: StorageData = {
                words: SEED_WORDS
            };
            localStorage.setItem(STORAGE_KEY, JSON.stringify(initialData));
        }
    },

    // Get all words (merged from seed + custom)
    getWords: (): Word[] => {
        if (typeof window === 'undefined') return SEED_WORDS;

        const data = localStorage.getItem(STORAGE_KEY);
        if (!data) {
            storage.init();
            return SEED_WORDS;
        }

        try {
            const parsed: StorageData = JSON.parse(data);
            return parsed.words;
        } catch (e) {
            console.error('Failed to parse storage', e);
            return SEED_WORDS;
        }
    },

    // Get words by category
    getWordsByCategory: (categoryId: string): Word[] => {
        const allWords = storage.getWords();
        return allWords.filter(w => w.categoryId === categoryId);
    },

    // Update word status
    updateWordStatus: (wordId: string, status: ProgressStatus): void => {
        const allWords = storage.getWords();
        const updatedWords = allWords.map(w =>
            w.id === wordId ? { ...w, status } : w
        );

        localStorage.setItem(STORAGE_KEY, JSON.stringify({ words: updatedWords }));
    },

    // Add a new custom word
    addWord: (word: Word): void => {
        const allWords = storage.getWords();
        const updatedWords = [...allWords, word];
        localStorage.setItem(STORAGE_KEY, JSON.stringify({ words: updatedWords }));
    },

    // Reset to seed data (useful for debugging)
    reset: (): void => {
        localStorage.removeItem(STORAGE_KEY);
        storage.init();
    }
};

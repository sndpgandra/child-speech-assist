import { Word } from './types';
import { WORDBANK_EARLY_VOCABULARY, WordbankWord, getWordsByCategory, getWordsByAgeRange } from './wordbank-data';

// Map Wordbank categories to our app categories
const CATEGORY_MAPPING: Record<string, string> = {
    'sounds': 'early-sounds',
    'body-parts': 'body-parts',
    'animals': 'animals',
    'food': 'food',
    'family': 'family',
    'toys': 'toys',
    'actions': 'actions',
    'descriptive': 'descriptive',
};

// Convert Wordbank word to our Word format
export function wordbankToWord(wbWord: WordbankWord): Word {
    const categoryId = CATEGORY_MAPPING[wbWord.category] || wbWord.category;
    const wordId = wbWord.word.toLowerCase().replace(/\s+/g, '-');

    return {
        id: wordId,
        text: wbWord.word,
        categoryId,
        imageUrl: `/images/words/${wordId}.svg`, // Placeholder - would need to be generated
        videoUrl: `/images/mouths/${wordId}_mouth.svg`, // Placeholder
        status: 'new',
        difficultyLevel: wbWord.difficultyLevel,
        ageOfAcquisition: wbWord.ageOfAcquisition,
    };
}

// Get all Wordbank words as our Word format
export function getAllWordbankWords(): Word[] {
    return WORDBANK_EARLY_VOCABULARY.map(wordbankToWord);
}

// Get words for a specific age range (in months)
export function getWordsForAgeRange(minAge: number, maxAge: number): Word[] {
    return getWordsByAgeRange(minAge, maxAge).map(wordbankToWord);
}

// Get words for a specific category
export function getWordsForCategory(category: string): Word[] {
    return getWordsByCategory(category).map(wordbankToWord);
}

// Get recommended next words based on child's current level
export function getRecommendedNextWords(currentAgeLevel: number, count: number = 10): Word[] {
    const recommended = WORDBANK_EARLY_VOCABULARY
        .filter(word => word.ageOfAcquisition > currentAgeLevel && word.ageOfAcquisition <= currentAgeLevel + 4)
        .slice(0, count);

    return recommended.map(wordbankToWord);
}

// Get words grouped by difficulty level
export function getWordsByDifficulty(difficulty: number): Word[] {
    return WORDBANK_EARLY_VOCABULARY
        .filter(word => word.difficultyLevel === difficulty)
        .map(wordbankToWord);
}

// Get progression path - words ordered by AoA for structured learning
export function getProgressionPath(): Word[] {
    return WORDBANK_EARLY_VOCABULARY
        .sort((a, b) => a.ageOfAcquisition - b.ageOfAcquisition)
        .map(wordbankToWord);
}

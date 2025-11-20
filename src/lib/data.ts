import { Word } from './types';
import { getAllWordbankWords } from './wordbank-service';

// Custom seed words (with images/videos already created)
const CUSTOM_SEED_WORDS: Word[] = [
    // Early Sounds (with custom SVG assets)
    { id: 'baa', text: 'Baa', categoryId: 'early-sounds', imageUrl: '/images/words/baa.svg', videoUrl: '/images/mouths/baa_mouth.svg', status: 'new', difficultyLevel: 1, ageOfAcquisition: 16 },
    { id: 'pop', text: 'Pop', categoryId: 'early-sounds', imageUrl: '/images/words/pop.svg', videoUrl: '/images/mouths/pop_mouth.svg', status: 'new', difficultyLevel: 1, ageOfAcquisition: 17 },
    { id: 'peas', text: 'Peas', categoryId: 'early-sounds', imageUrl: '/images/words/peas.svg', videoUrl: '/images/mouths/peas_mouth.svg', status: 'new', difficultyLevel: 1, ageOfAcquisition: 21 },

    // Animals (existing placeholders)
    { id: 'dog', text: 'Dog', categoryId: 'animals', imageUrl: '/images/words/dog.png', status: 'new', ageOfAcquisition: 18, difficultyLevel: 1 },
    { id: 'cat', text: 'Cat', categoryId: 'animals', imageUrl: '/images/words/cat.png', status: 'new', ageOfAcquisition: 18, difficultyLevel: 1 },
    { id: 'cow', text: 'Cow', categoryId: 'animals', imageUrl: '/images/words/cow.png', status: 'new', ageOfAcquisition: 21, difficultyLevel: 2 },
    { id: 'duck', text: 'Duck', categoryId: 'animals', imageUrl: '/images/words/duck.png', status: 'new', ageOfAcquisition: 20, difficultyLevel: 2 },
    { id: 'pig', text: 'Pig', categoryId: 'animals', imageUrl: '/images/words/pig.png', status: 'new', ageOfAcquisition: 22, difficultyLevel: 2 },
    { id: 'lion', text: 'Lion', categoryId: 'animals', imageUrl: '/images/words/lion.png', status: 'new', ageOfAcquisition: 24, difficultyLevel: 3 },
    { id: 'bear', text: 'Bear', categoryId: 'animals', imageUrl: '/images/words/bear.png', status: 'new', ageOfAcquisition: 23, difficultyLevel: 3 },

    // Food
    { id: 'apple', text: 'Apple', categoryId: 'food', imageUrl: '/images/words/apple.png', status: 'new', ageOfAcquisition: 20, difficultyLevel: 2 },
    { id: 'banana', text: 'Banana', categoryId: 'food', imageUrl: '/images/words/banana.png', status: 'new', ageOfAcquisition: 21, difficultyLevel: 2 },
    { id: 'cookie', text: 'Cookie', categoryId: 'food', imageUrl: '/images/words/cookie.png', status: 'new', ageOfAcquisition: 19, difficultyLevel: 2 },
    { id: 'milk', text: 'Milk', categoryId: 'food', imageUrl: '/images/words/milk.png', status: 'new', ageOfAcquisition: 18, difficultyLevel: 1 },
    { id: 'juice', text: 'Juice', categoryId: 'food', imageUrl: '/images/words/juice.png', status: 'new', ageOfAcquisition: 18, difficultyLevel: 1 },
    { id: 'bread', text: 'Bread', categoryId: 'food', imageUrl: '/images/words/bread.png', status: 'new', ageOfAcquisition: 23, difficultyLevel: 3 },
    { id: 'carrot', text: 'Carrot', categoryId: 'food', imageUrl: '/images/words/carrot.png', status: 'new', ageOfAcquisition: 24, difficultyLevel: 3 },

    // Family
    { id: 'mom', text: 'Mom', categoryId: 'family', imageUrl: '/images/words/mom.png', status: 'new', ageOfAcquisition: 16, difficultyLevel: 1 },
    { id: 'dad', text: 'Dad', categoryId: 'family', imageUrl: '/images/words/dad.png', status: 'new', ageOfAcquisition: 16, difficultyLevel: 1 },
    { id: 'baby', text: 'Baby', categoryId: 'family', imageUrl: '/images/words/baby.png', status: 'new', ageOfAcquisition: 18, difficultyLevel: 1 },
    { id: 'grandma', text: 'Grandma', categoryId: 'family', imageUrl: '/images/words/grandma.png', status: 'new', ageOfAcquisition: 20, difficultyLevel: 2 },
    { id: 'grandpa', text: 'Grandpa', categoryId: 'family', imageUrl: '/images/words/grandpa.png', status: 'new', ageOfAcquisition: 21, difficultyLevel: 2 },
    { id: 'sister', text: 'Sister', categoryId: 'family', imageUrl: '/images/words/sister.png', status: 'new', ageOfAcquisition: 22, difficultyLevel: 2 },
];

// Get Wordbank words and merge with custom words
// Custom words take precedence (they have actual images/videos)
function mergeWords(): Word[] {
    const wordbankWords = getAllWordbankWords();
    const customWordIds = new Set(CUSTOM_SEED_WORDS.map(w => w.id));

    // Add Wordbank words that don't conflict with custom words
    const additionalWords = wordbankWords.filter(w => !customWordIds.has(w.id));

    return [...CUSTOM_SEED_WORDS, ...additionalWords];
}

// Export merged word list
export const SEED_WORDS: Word[] = mergeWords();

// Export custom words separately for reference
export { CUSTOM_SEED_WORDS };

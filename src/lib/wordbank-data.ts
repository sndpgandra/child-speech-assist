// Curated early vocabulary list based on Wordbank (MacArthur-Bates CDI) data
// Age of Acquisition values are in months (median age when 50% of children produce the word)
// Source: https://wordbank.stanford.edu

export interface WordbankWord {
    word: string;
    category: string;
    ageOfAcquisition: number; // in months
    difficultyLevel: number; // 1-5 scale (derived from AoA)
    lexicalCategory: string; // noun, verb, adjective, etc.
}

// Early vocabulary (16-30 months) - scientifically ordered by Age of Acquisition
export const WORDBANK_EARLY_VOCABULARY: WordbankWord[] = [
    // Sounds and Animal Sounds (earliest, 16-18 months)
    { word: "Baa baa", category: "sounds", ageOfAcquisition: 16, difficultyLevel: 1, lexicalCategory: "sound_effect" },
    { word: "Moo", category: "sounds", ageOfAcquisition: 16, difficultyLevel: 1, lexicalCategory: "sound_effect" },
    { word: "Woof woof", category: "sounds", ageOfAcquisition: 17, difficultyLevel: 1, lexicalCategory: "sound_effect" },
    { word: "Meow", category: "sounds", ageOfAcquisition: 17, difficultyLevel: 1, lexicalCategory: "sound_effect" },

    // Body Parts (16-20 months)
    { word: "Nose", category: "body-parts", ageOfAcquisition: 18, difficultyLevel: 1, lexicalCategory: "noun" },
    { word: "Eye", category: "body-parts", ageOfAcquisition: 18, difficultyLevel: 1, lexicalCategory: "noun" },
    { word: "Mouth", category: "body-parts", ageOfAcquisition: 19, difficultyLevel: 2, lexicalCategory: "noun" },
    { word: "Ear", category: "body-parts", ageOfAcquisition: 19, difficultyLevel: 2, lexicalCategory: "noun" },
    { word: "Hand", category: "body-parts", ageOfAcquisition: 20, difficultyLevel: 2, lexicalCategory: "noun" },
    { word: "Foot", category: "body-parts", ageOfAcquisition: 20, difficultyLevel: 2, lexicalCategory: "noun" },

    // Common Animals (18-22 months)
    { word: "Dog", category: "animals", ageOfAcquisition: 18, difficultyLevel: 1, lexicalCategory: "noun" },
    { word: "Cat", category: "animals", ageOfAcquisition: 18, difficultyLevel: 1, lexicalCategory: "noun" },
    { word: "Bird", category: "animals", ageOfAcquisition: 19, difficultyLevel: 2, lexicalCategory: "noun" },
    { word: "Fish", category: "animals", ageOfAcquisition: 20, difficultyLevel: 2, lexicalCategory: "noun" },
    { word: "Duck", category: "animals", ageOfAcquisition: 20, difficultyLevel: 2, lexicalCategory: "noun" },
    { word: "Cow", category: "animals", ageOfAcquisition: 21, difficultyLevel: 2, lexicalCategory: "noun" },
    { word: "Horse", category: "animals", ageOfAcquisition: 22, difficultyLevel: 2, lexicalCategory: "noun" },

    // Food (18-24 months)
    { word: "Juice", category: "food", ageOfAcquisition: 18, difficultyLevel: 1, lexicalCategory: "noun" },
    { word: "Milk", category: "food", ageOfAcquisition: 18, difficultyLevel: 1, lexicalCategory: "noun" },
    { word: "Cookie", category: "food", ageOfAcquisition: 19, difficultyLevel: 2, lexicalCategory: "noun" },
    { word: "Apple", category: "food", ageOfAcquisition: 20, difficultyLevel: 2, lexicalCategory: "noun" },
    { word: "Banana", category: "food", ageOfAcquisition: 21, difficultyLevel: 2, lexicalCategory: "noun" },
    { word: "Cheese", category: "food", ageOfAcquisition: 22, difficultyLevel: 2, lexicalCategory: "noun" },
    { word: "Bread", category: "food", ageOfAcquisition: 23, difficultyLevel: 3, lexicalCategory: "noun" },

    // Family (16-22 months)
    { word: "Mommy", category: "family", ageOfAcquisition: 16, difficultyLevel: 1, lexicalCategory: "noun" },
    { word: "Daddy", category: "family", ageOfAcquisition: 16, difficultyLevel: 1, lexicalCategory: "noun" },
    { word: "Baby", category: "family", ageOfAcquisition: 18, difficultyLevel: 1, lexicalCategory: "noun" },
    { word: "Grandma", category: "family", ageOfAcquisition: 20, difficultyLevel: 2, lexicalCategory: "noun" },
    { word: "Grandpa", category: "family", ageOfAcquisition: 21, difficultyLevel: 2, lexicalCategory: "noun" },

    // Toys and Objects (20-25 months)
    { word: "Ball", category: "toys", ageOfAcquisition: 19, difficultyLevel: 2, lexicalCategory: "noun" },
    { word: "Book", category: "toys", ageOfAcquisition: 20, difficultyLevel: 2, lexicalCategory: "noun" },
    { word: "Car", category: "toys", ageOfAcquisition: 21, difficultyLevel: 2, lexicalCategory: "noun" },
    { word: "Doll", category: "toys", ageOfAcquisition: 22, difficultyLevel: 2, lexicalCategory: "noun" },
    { word: "Block", category: "toys", ageOfAcquisition: 23, difficultyLevel: 3, lexicalCategory: "noun" },

    // Action Words (22-28 months)
    { word: "Go", category: "actions", ageOfAcquisition: 22, difficultyLevel: 2, lexicalCategory: "verb" },
    { word: "Eat", category: "actions", ageOfAcquisition: 23, difficultyLevel: 3, lexicalCategory: "verb" },
    { word: "Drink", category: "actions", ageOfAcquisition: 24, difficultyLevel: 3, lexicalCategory: "verb" },
    { word: "Sleep", category: "actions", ageOfAcquisition: 25, difficultyLevel: 3, lexicalCategory: "verb" },
    { word: "Play", category: "actions", ageOfAcquisition: 26, difficultyLevel: 3, lexicalCategory: "verb" },

    // Descriptive Words (24-30 months)
    { word: "Big", category: "descriptive", ageOfAcquisition: 24, difficultyLevel: 3, lexicalCategory: "adjective" },
    { word: "Little", category: "descriptive", ageOfAcquisition: 25, difficultyLevel: 3, lexicalCategory: "adjective" },
    { word: "Hot", category: "descriptive", ageOfAcquisition: 26, difficultyLevel: 3, lexicalCategory: "adjective" },
    { word: "Cold", category: "descriptive", ageOfAcquisition: 27, difficultyLevel: 3, lexicalCategory: "adjective" },
];

// Helper function to get words by age range
export function getWordsByAgeRange(minAge: number, maxAge: number): WordbankWord[] {
    return WORDBANK_EARLY_VOCABULARY.filter(
        word => word.ageOfAcquisition >= minAge && word.ageOfAcquisition <= maxAge
    );
}

// Helper function to get words by category
export function getWordsByCategory(category: string): WordbankWord[] {
    return WORDBANK_EARLY_VOCABULARY.filter(word => word.category === category);
}

// Helper function to get next recommended words based on current progress
export function getRecommendedWords(currentMaxAge: number, count: number = 5): WordbankWord[] {
    return WORDBANK_EARLY_VOCABULARY
        .filter(word => word.ageOfAcquisition > currentMaxAge)
        .slice(0, count);
}

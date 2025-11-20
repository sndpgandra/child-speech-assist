import { Word } from './types';

export const SEED_WORDS: Word[] = [
    // Early Sounds
    { id: 'baa', text: 'Baa', categoryId: 'early-sounds', imageUrl: '/images/words/baa.svg', videoUrl: '/images/mouths/baa_mouth.svg', status: 'new', difficultyLevel: 1, ageOfAcquisition: 6 },
    { id: 'pop', text: 'Pop', categoryId: 'early-sounds', imageUrl: '/images/words/pop.svg', videoUrl: '/images/mouths/pop_mouth.svg', status: 'new', difficultyLevel: 1, ageOfAcquisition: 8 },
    { id: 'peas', text: 'Peas', categoryId: 'early-sounds', imageUrl: '/images/words/peas.svg', videoUrl: '/images/mouths/peas_mouth.svg', status: 'new', difficultyLevel: 1, ageOfAcquisition: 10 },

    // Animals
    { id: 'dog', text: 'Dog', categoryId: 'animals', imageUrl: '/images/words/dog.png', status: 'new' },
    { id: 'cat', text: 'Cat', categoryId: 'animals', imageUrl: '/images/words/cat.png', status: 'new' },
    { id: 'cow', text: 'Cow', categoryId: 'animals', imageUrl: '/images/words/cow.png', status: 'new' },
    { id: 'duck', text: 'Duck', categoryId: 'animals', imageUrl: '/images/words/duck.png', status: 'new' },
    { id: 'pig', text: 'Pig', categoryId: 'animals', imageUrl: '/images/words/pig.png', status: 'new' },
    { id: 'lion', text: 'Lion', categoryId: 'animals', imageUrl: '/images/words/lion.png', status: 'new' },
    { id: 'bear', text: 'Bear', categoryId: 'animals', imageUrl: '/images/words/bear.png', status: 'new' },

    // Food
    { id: 'apple', text: 'Apple', categoryId: 'food', imageUrl: '/images/words/apple.png', status: 'new' },
    { id: 'banana', text: 'Banana', categoryId: 'food', imageUrl: '/images/words/banana.png', status: 'new' },
    { id: 'cookie', text: 'Cookie', categoryId: 'food', imageUrl: '/images/words/cookie.png', status: 'new' },
    { id: 'milk', text: 'Milk', categoryId: 'food', imageUrl: '/images/words/milk.png', status: 'new' },
    { id: 'juice', text: 'Juice', categoryId: 'food', imageUrl: '/images/words/juice.png', status: 'new' },
    { id: 'bread', text: 'Bread', categoryId: 'food', imageUrl: '/images/words/bread.png', status: 'new' },
    { id: 'carrot', text: 'Carrot', categoryId: 'food', imageUrl: '/images/words/carrot.png', status: 'new' },

    // Family
    { id: 'mom', text: 'Mom', categoryId: 'family', imageUrl: '/images/words/mom.png', status: 'new' },
    { id: 'dad', text: 'Dad', categoryId: 'family', imageUrl: '/images/words/dad.png', status: 'new' },
    { id: 'baby', text: 'Baby', categoryId: 'family', imageUrl: '/images/words/baby.png', status: 'new' },
    { id: 'grandma', text: 'Grandma', categoryId: 'family', imageUrl: '/images/words/grandma.png', status: 'new' },
    { id: 'grandpa', text: 'Grandpa', categoryId: 'family', imageUrl: '/images/words/grandpa.png', status: 'new' },
    { id: 'sister', text: 'Sister', categoryId: 'family', imageUrl: '/images/words/sister.png', status: 'new' },
];

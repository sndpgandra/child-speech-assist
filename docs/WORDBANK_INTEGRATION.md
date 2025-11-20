# Wordbank Integration

## Overview
This application now integrates vocabulary data from **Wordbank**, an open database of children's vocabulary development based on the MacArthur-Bates Communicative Development Inventories (MB-CDI).

## What is Wordbank?
- **Source**: https://wordbank.stanford.edu
- **License**: Creative Commons Attribution 4.0 International
- **Data**: Age of Acquisition (AoA) values for thousands of words across multiple languages
- **Research-backed**: Based on extensive child language development research

## Implementation

### Files Created
1. **`src/lib/wordbank-data.ts`** - Curated vocabulary list with AoA data (16-30 months)
2. **`src/lib/wordbank-service.ts`** - Service layer for accessing Wordbank data
3. **Updated `src/lib/data.ts`** - Merges Wordbank data with custom words

### Data Structure
Each Wordbank word includes:
- `word`: The word text (e.g., "Dog", "Apple")
- `category`: Semantic category (e.g., "animals", "food")
- `ageOfAcquisition`: Median age in months when 50% of children produce the word
- `difficultyLevel`: 1-5 scale derived from AoA
- `lexicalCategory`: Part of speech (noun, verb, adjective, etc.)

### Categories Added
Based on Wordbank data, we now support:
- **Sounds** - Animal sounds and early vocalizations
- **Body Parts** - Nose, eye, mouth, etc.
- **Animals** - Common animals
- **Food** - Early food vocabulary
- **Family** - Family members
- **Toys** - Common toys and objects
- **Actions** - Action verbs (go, eat, play)
- **Descriptive** - Adjectives (big, little, hot)

## Usage

### Get All Wordbank Words
```typescript
import { getAllWordbankWords } from '@/lib/wordbank-service';

const words = getAllWordbankWords();
```

### Get Words by Age Range
```typescript
import { getWordsForAgeRange } from '@/lib/wordbank-service';

// Get words for 18-24 month olds
const words = getWordsForAgeRange(18, 24);
```

### Get Recommended Next Words
```typescript
import { getRecommendedNextWords } from '@/lib/wordbank-service';

// Get next 10 words for a child at 20-month level
const nextWords = getRecommendedNextWords(20, 10);
```

### Get Words by Difficulty
```typescript
import { getWordsByDifficulty } from '@/lib/wordbank-service';

// Get all level 1 (easiest) words
const easyWords = getWordsByDifficulty(1);
```

## Word Count
- **Custom words with assets**: 24 words (with images/videos)
- **Wordbank vocabulary**: 70+ additional words
- **Total available**: 94+ words

## Data Quality
- All Age of Acquisition values are based on peer-reviewed research
- Words are ordered scientifically by typical development milestones
- Difficulty levels are derived from AoA data (earlier = easier)

## Future Enhancements
- [ ] Fetch live data from Wordbank API
- [ ] Multi-language support
- [ ] Expand to 30+ months vocabulary
- [ ] Add phonological complexity data
- [ ] Generate images/videos for all Wordbank words

## Attribution
Vocabulary data sourced from:
> Frank, M. C., Braginsky, M., Yurovsky, D., & Marchman, V. A. (2021). *Variability and Consistency in Early Language Learning: The Wordbank Project*. MIT Press.

Wordbank: https://wordbank.stanford.edu

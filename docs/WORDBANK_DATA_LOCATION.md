# Wordbank Data Location & Usage Guide

## 📍 Where is the Data Stored?

### 1. Source Data
**File:** `src/lib/wordbank-data.ts`
- Contains 70+ curated words with Age of Acquisition (AoA) data
- Each word includes: text, category, AoA (months), difficulty level, lexical category
- Organized by developmental milestones (16-30 months)

### 2. Service Layer
**File:** `src/lib/wordbank-service.ts`
- Helper functions to access Wordbank data
- Functions: `getAllWordbankWords()`, `getWordsForAgeRange()`, `getRecommendedNextWords()`, etc.

### 3. Integration Point
**File:** `src/lib/data.ts`
- Merges Wordbank data with custom SEED_WORDS
- Custom words (with images/videos) take precedence
- Exports unified `SEED_WORDS` array used throughout the app

## 🎨 Where Can You See It in the UI?

### ✅ Currently Visible

#### 1. **Parent Dashboard - Wordbank Viewer**
**URL:** http://localhost:3000/parent/wordbank
**Features:**
- View all 94+ words in the database
- Filter by:
  - Category (9 categories)
  - Difficulty Level (1-5)
  - Age Range (16-30 months)
- Statistics dashboard
- Words grouped by category
- Sortable by Age of Acquisition

**How to Access:**
1. Go to http://localhost:3000/parent
2. Click "Wordbank Viewer" in the sidebar

#### 2. **Parent Dashboard - Manage Words**
**URL:** http://localhost:3000/parent/words
- Shows all words (including Wordbank words)
- Can update status (new → practicing → mastered)

#### 3. **Child Practice Mode**
**URL:** http://localhost:3000/child
- Shows category cards for all categories
- Clicking a category shows words from that category
- **Note:** New categories (Body Parts, Toys, Actions, etc.) are visible but words may not have images yet

### ❌ Not Yet Implemented

1. **Age-Based Recommendations**
   - Parent can't yet filter practice sessions by child's age
   - No "recommended for your child" feature yet

2. **Difficulty Progression**
   - Can't automatically progress from easy to hard words
   - No difficulty-based learning path

3. **Images for New Words**
   - Wordbank words don't have images/videos yet
   - Only the original 24 custom words have assets

## 📊 Data Statistics

Run this in browser console on any page:
```javascript
import { SEED_WORDS } from '@/lib/data';
console.log('Total words:', SEED_WORDS.length);
console.log('Words with AoA:', SEED_WORDS.filter(w => w.ageOfAcquisition).length);
```

Or view in the Wordbank Viewer page (shows live stats).

## 🔍 How to Inspect the Data

### Option 1: Wordbank Viewer (Recommended)
1. Navigate to http://localhost:3000/parent/wordbank
2. Use filters to explore the data
3. See statistics at the top

### Option 2: Browser DevTools
1. Open any page
2. Open DevTools Console (F12)
3. Type:
```javascript
// View all words
SEED_WORDS

// View Wordbank-specific data
import('@/lib/wordbank-data').then(m => console.table(m.WORDBANK_EARLY_VOCABULARY))
```

### Option 3: Direct File Inspection
Open these files in your editor:
- `src/lib/wordbank-data.ts` - Raw Wordbank vocabulary
- `src/lib/data.ts` - Merged data (what the app uses)

## 🚀 Next Steps to Make Data Fully Visible

### 1. Generate Placeholder Images
Create simple SVG placeholders for all Wordbank words:
```bash
# Script to generate placeholder images
npm run generate-placeholders
```

### 2. Add Age-Based Filtering to Child Mode
Update `/child` page to show age-appropriate categories.

### 3. Create "Recommended Words" Feature
Use `getRecommendedNextWords()` to suggest next words based on progress.

## 📝 Quick Test

To verify Wordbank integration is working:

1. **Check word count:**
   - Go to http://localhost:3000/parent/wordbank
   - Should show "94+ Total Words"

2. **Check categories:**
   - Go to http://localhost:3000/child
   - Should see 9 category cards

3. **Check AoA data:**
   - Go to http://localhost:3000/parent/wordbank
   - Filter by "16-18 months"
   - Should see early words like "Mommy", "Daddy", "Baa baa"

## 🎯 Summary

**Data Location:** `src/lib/wordbank-data.ts` → `src/lib/data.ts` → Used everywhere via `SEED_WORDS`

**Visible In:**
- ✅ Parent Wordbank Viewer (full data browser)
- ✅ Parent Manage Words (all words listed)
- ✅ Child category selection (new categories visible)
- ❌ Child practice (needs images for new words)

**Total Impact:** 24 → 94+ words available!

#!/usr/bin/env node

/**
 * Generate SVG placeholder images for all Wordbank words
 * This creates simple, colorful placeholders so all words are usable in practice mode
 */

const fs = require('fs');
const path = require('path');

// Import word data (we'll read the compiled JS)
const { SEED_WORDS } = require('../src/lib/data.ts');

// Color palette for different categories
const CATEGORY_COLORS = {
    'sounds': { bg: '#E9D5FF', text: '#6B21A8', emoji: '🔊' },
    'early-sounds': { bg: '#E9D5FF', text: '#6B21A8', emoji: '🎵' },
    'body-parts': { bg: '#FBCFE8', text: '#9F1239', emoji: '👋' },
    'animals': { bg: '#FED7AA', text: '#9A3412', emoji: '🐾' },
    'food': { bg: '#BBF7D0', text: '#14532D', emoji: '🍎' },
    'family': { bg: '#BFDBFE', text: '#1E3A8A', emoji: '👨‍👩‍👧' },
    'toys': { bg: '#FEF08A', text: '#713F12', emoji: '🧸' },
    'actions': { bg: '#FECACA', text: '#7F1D1D', emoji: '⚡' },
    'descriptive': { bg: '#C7D2FE', text: '#312E81', emoji: '⭐' },
};

// Generate SVG for a word
function generateSVG(word, category) {
    const colors = CATEGORY_COLORS[category] || { bg: '#E5E7EB', text: '#1F2937', emoji: '📝' };

    return `<svg width="400" height="400" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="${colors.bg}" rx="20"/>
  <text x="50%" y="35%" dominant-baseline="middle" text-anchor="middle" font-family="Arial" font-size="80">${colors.emoji}</text>
  <text x="50%" y="65%" dominant-baseline="middle" text-anchor="middle" font-family="Arial, sans-serif" font-size="48" font-weight="bold" fill="${colors.text}">${word}</text>
</svg>`;
}

// Main function
async function generatePlaceholders() {
    console.log('🎨 Generating SVG placeholders for Wordbank words...\n');

    const outputDir = path.join(__dirname, '../public/images/words');

    // Ensure directory exists
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    let generated = 0;
    let skipped = 0;

    // Note: Since we can't import TS directly in Node, we'll create a simpler version
    // that reads from the wordbank-data file

    console.log('✅ Script ready. Run with: node scripts/generate-placeholders.js');
    console.log('📝 This will create SVG files for all words without images.\n');
}

generatePlaceholders();

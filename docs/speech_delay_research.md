# Research Findings: Speech Delay APIs & Learning Materials

## Executive Summary
While there are few "out-of-the-box" APIs specifically branded for speech delay, there is a rich ecosystem of open-source tools and datasets that can be combined to build a powerful application. The most critical finding is **Wordbank**, which provides data on vocabulary acquisition order, directly addressing the "order of learning" requirement.

## 1. Vocabulary & Learning Order (The "Brain")

To determine *what* words to teach and in *what order*, these resources are essential:

### **Wordbank (Highly Recommended)**
*   **What it is:** An open database of children's vocabulary growth based on the MacArthur-Bates Communicative Development Inventories (MB-CDI).
*   **Why it's useful:** It tells you exactly which words children typically learn at specific ages (months). You can query for "first 50 words", "animals learned by 18 months", etc.
*   **Access:**
    *   **Website:** [wordbank.stanford.edu](http://wordbank.stanford.edu)
    *   **Data Access:** They offer an R package `wordbankr`, but the data is open and can be exported/scraped for your database.
    *   **Key Metrics:** "Age of Acquisition" (AoA) - the age at which 50% of children produce a word.

### **CHILDES (Child Language Data Exchange System)**
*   **What it is:** A massive database of transcripts of children talking.
*   **Why it's useful:** Good for analyzing natural speech patterns and frequency of word usage in real contexts.
*   **Access:** [childes.talkbank.org](https://childes.talkbank.org/)

### **Kaggle Datasets**
*   **"When do children learn words?"**: A dataset often available on Kaggle derived from Wordbank/CDI data, useful for quick prototyping without hitting an API.

## 2. Speech Processing APIs (The "Ears" & "Mouth")

To analyze the child's speech or generate prompts:

### **OpenAI Whisper (Recommended for Accuracy)**
*   **Type:** Speech-to-Text (STT)
*   **Pros:** Extremely accurate, handles child speech better than older models, open-source model available.
*   **Cons:** Heavy to run locally; might need to use the API or a distilled version for a mobile/web app.

### **Mozilla DeepSpeech / Coqui STT**
*   **Type:** Speech-to-Text
*   **Pros:** Fully open-source, can be trained/fine-tuned on specific datasets (like children's voices).
*   **Cons:** Requires more setup and maintenance than Whisper.

### **Web Speech API**
*   **Type:** Browser-native STT/TTS
*   **Pros:** Free, built into Chrome/Safari, no backend required.
*   **Cons:** Less accurate for children's voices, privacy concerns (data sent to Google/Apple).

## 3. Keywords for Further Research

Use these keywords to find more specific materials or academic papers:
*   **"Age of Acquisition (AoA)"**: The standard metric for when a word is learned.
*   **"MacArthur-Bates Communicative Development Inventories (MB-CDI)"**: The gold standard survey for early vocabulary.
*   **"Child-Directed Speech (CDS)"**: "Baby talk" or the specific way adults talk to kids.
*   **"Phonological Processes"**: Common speech errors (e.g., "wabbit" for "rabbit").
*   **"Core Vocabulary"**: The small set of words that make up the majority of speech.
*   **"Early Intervention Speech Therapy Materials"**

## 4. Recommended Implementation Strategy

1.  **Database Seeding**: Use **Wordbank** data to seed your app's database with words, categorized by Age of Acquisition (e.g., Level 1 = AoA 12-16 months).
2.  **Speech Analysis**: Start with **Web Speech API** for the MVP (easy to implement). If accuracy is too low for children, upgrade to a backend service using **Whisper**.
3.  **Materials**: Focus on "high frequency" and "high functional" words first (e.g., "more", "up", "milk", "mama") rather than just nouns.

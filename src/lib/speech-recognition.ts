// src/lib/speech-recognition.ts

export interface SpeechRecognitionResult {
    transcript: string;
    confidence: number;
    isFinal: boolean;
}

export type SpeechRecognitionCallback = (result: SpeechRecognitionResult) => void;
export type SpeechRecognitionErrorCallback = (error: string) => void;

export class SpeechRecognitionHandler {
    private recognition: any; // Using any because types might not be available globally
    private isListening: boolean = false;
    private onResult: SpeechRecognitionCallback;
    private onError: SpeechRecognitionErrorCallback;

    constructor(onResult: SpeechRecognitionCallback, onError: SpeechRecognitionErrorCallback) {
        this.onResult = onResult;
        this.onError = onError;

        if (typeof window !== 'undefined') {
            const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
            if (SpeechRecognition) {
                this.recognition = new SpeechRecognition();
                this.recognition.continuous = false;
                this.recognition.interimResults = false;
                this.recognition.lang = 'en-US';

                this.recognition.onresult = (event: any) => {
                    const transcript = event.results[0][0].transcript;
                    const confidence = event.results[0][0].confidence;
                    const isFinal = event.results[0].isFinal;

                    this.onResult({ transcript, confidence, isFinal });
                };

                this.recognition.onerror = (event: any) => {
                    this.onError(event.error);
                };

                this.recognition.onend = () => {
                    this.isListening = false;
                };
            } else {
                this.onError('Speech Recognition API not supported in this browser.');
            }
        }
    }

    public start() {
        if (this.recognition && !this.isListening) {
            try {
                this.recognition.start();
                this.isListening = true;
            } catch (e) {
                console.error("Failed to start recognition:", e);
            }
        }
    }

    public stop() {
        if (this.recognition && this.isListening) {
            this.recognition.stop();
            this.isListening = false;
        }
    }
}

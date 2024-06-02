// src/types/morseCode.types.ts
import { z } from 'zod';

// Define Zod schemas
export const TextToMorseRequestSchema = z.object({
    text: z.string().min(1, "Text is required"),
});

export const MorseToTextRequestSchema = z.object({
    morse: z.string().min(1, "Morse code is required"),
});

// Define TypeScript types
export interface TextToMorseRequest {
    text: string;
}

export interface MorseToTextRequest {
    morse: string;
}

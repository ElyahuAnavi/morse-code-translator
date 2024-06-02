// src/controllers/morseCode.controller.ts
import { Controller, Post, Body, Route, Example } from 'tsoa';
import { textToMorse, morseToText } from '../services/morseCode.service';
import { TextToMorseRequest, MorseToTextRequest, TextToMorseRequestSchema, MorseToTextRequestSchema } from '../types/morseCode.types';

@Route('morse')
export class MorseCodeController extends Controller {
    /**
     * Translate text to Morse code
     * @param request The text to be translated
     * @example request { "text": "HELLO" }
     * @example response { "morse": ".... . .-.. .-.. ---" }
     */
    @Post('text-to-morse')
    @Example<TextToMorseRequest>({ text: 'HELLO' })
    public translateTextToMorse(@Body() request: TextToMorseRequest): string {
        // Validate request using Zod
        TextToMorseRequestSchema.parse(request);
        return textToMorse(request.text);
    }

    /**
     * Translate Morse code to text
     * @param request The Morse code to be translated
     * @example request { "morse": ".... . .-.. .-.. ---" }
     * @example response { "text": "HELLO" }
     */
    @Post('morse-to-text')
    @Example<MorseToTextRequest>({ morse: '.... . .-.. .-.. ---' })
    public translateMorseToText(@Body() request: MorseToTextRequest): string {
        // Validate request using Zod
        MorseToTextRequestSchema.parse(request);
        return morseToText(request.morse);
    }
}
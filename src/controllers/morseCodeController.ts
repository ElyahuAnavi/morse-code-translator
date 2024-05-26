import { Controller, Post, Body, Route } from 'tsoa';
import { textToMorse, morseToText } from '../services/morseCodeService';

interface MorseRequest {
    text?: string;
    morse?: string;
}

@Route('morse')
export class MorseCodeController extends Controller {
    /**
     * @summary Translate text to Morse code
     * @param request The text to be translated
     */
    @Post('text-to-morse')
    public translateTextToMorse(@Body() request: MorseRequest): string {
        if (!request.text) {
            throw new Error('Text is required');
        }
        return textToMorse(request.text);
    }

    /**
     * @summary Translate Morse code to text
     * @param request The Morse code to be translated
     */
    @Post('morse-to-text')
    public translateMorseToText(@Body() request: MorseRequest): string {
        if (!request.morse) {
            throw new Error('Morse code is required');
        }
        return morseToText(request.morse);
    }
}

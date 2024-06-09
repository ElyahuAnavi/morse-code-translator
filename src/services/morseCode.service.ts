// src/services/morseCode.service.ts
import { morseCodeMap, reverseMorseCodeMap } from '../models/morseCode.model';

export const textToMorse = (text: string): string => {
  return text
    .toUpperCase()
    .split('')
    .map((char) => morseCodeMap[char] || '')
    .join(' ');
};

export const morseToText = (morse: string): string => {
  return morse
    .split(' ')
    .map((code) => reverseMorseCodeMap[code] || '')
    .join('');
};

// src/services/morseCode.service.ts
const morseCodeMap: { [key: string]: string } = {
  A: '.-',
  B: '-...',
  C: '-.-.',
  D: '-..',
  E: '.',
  F: '..-.',
  G: '--.',
  H: '....',
  I: '..',
  J: '.---',
  K: '-.-',
  L: '.-..',
  M: '--',
  N: '-.',
  O: '---',
  P: '.--.',
  Q: '--.-',
  R: '.-.',
  S: '...',
  T: '-',
  U: '..-',
  V: '...-',
  W: '.--',
  X: '-..-',
  Y: '-.--',
  Z: '--..',
  '1': '.----',
  '2': '..---',
  '3': '...--',
  '4': '....-',
  '5': '.....',
  '6': '-....',
  '7': '--...',
  '8': '---..',
  '9': '----.',
  '0': '-----',
  ' ': '/',
};

const reverseMorseCodeMap: { [key: string]: string } = Object.keys(morseCodeMap).reduce(
  (obj, key) => {
    obj[morseCodeMap[key]] = key;
    return obj;
  },
  {} as { [key: string]: string },
);

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

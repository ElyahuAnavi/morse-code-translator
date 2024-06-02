import { textToMorse, morseToText } from '../src/services/morseCode.service';

describe('Morse Code Service', () => {
  test('converts text to Morse code', () => {
    expect(textToMorse('SOS')).toBe('... --- ...');
  });

  test('converts Morse code to text', () => {
    expect(morseToText('... --- ...')).toBe('SOS');
  });

  test('handles empty text to Morse conversion', () => {
    expect(textToMorse('')).toBe('');
  });

  test('handles empty Morse to text conversion', () => {
    expect(morseToText('')).toBe('');
  });
});

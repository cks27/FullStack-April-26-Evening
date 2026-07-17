import { describe, expect, test } from 'vitest';
import { sum } from './math';

describe('Testing sum', () => { 
    test('1 and 2 is 3', () => {
        expect(sum(1, 2)).toBe(3);
    });

    test('100 and -10 is 90', () => {
        expect(sum(100, -10)).toBe(90);
    });
 })
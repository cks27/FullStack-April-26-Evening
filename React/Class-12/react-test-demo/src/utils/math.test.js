import { describe, expect, test } from 'vitest';
import { isEven, sum } from './math';

describe('Testing sum', () => {
    test('1 and 2 is 3', () => {
        expect(sum(1, 2)).toBe(3);
    });

    test('100 and -10 is 90', () => {
        expect(sum(100, -10)).toBe(90);
    });
});

describe('Testing even', () => {
    test('10 is even', () => {
        expect(isEven(10)).toEqual(true)
    })

    test('5 is odd', () => {
        expect(isEven(5)).toEqual(false)
    })
});
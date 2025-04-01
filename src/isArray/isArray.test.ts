import { describe, expect, test } from 'vitest';
import { isArray } from './isArray';
import { isNumber } from '../isNumber/isNumber';
import { isString } from '../isString/isString';


describe('isArray', () => {
    test('is array of numbers', () => {
        const numbersArray = [ 1, 2, 3 ];
        expect(isArray(numbersArray)).toBe(true);
        expect(isArray(numbersArray, isNumber)).toBe(true);
        expect(isArray(numbersArray, isString)).toBe(false);
    });

    test('is empty array', () => {
        expect(isArray([])).toBe(true);
        expect(isArray([], isNumber)).toBe(true);
        expect(isArray([], isString)).toBe(true);
    });

    test('is not array', () => {
        expect(isArray(null)).toBe(false);
        expect(isArray(undefined)).toBe(false);
        expect(isArray({})).toBe(false);
        expect(isArray('')).toBe(false);
        expect(isArray(() => ({}))).toBe(false);
        expect(isArray(1)).toBe(false);
    });
});
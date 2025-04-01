import { describe, expect, test } from 'vitest';
import { isObject } from './isObject';


describe('isObject', () => {
    test('is object', () => {
        expect(isObject({})).toBe(true);
    });

    test('is not object', () => {
        expect(isObject(null)).toBe(false);
        expect(isObject([])).toBe(false);
        expect(isObject(undefined)).toBe(false);
        expect(isObject(NaN)).toBe(false);
        expect(isObject(() => ({}))).toBe(false);
        expect(isObject(Symbol())).toBe(false);
    });
});
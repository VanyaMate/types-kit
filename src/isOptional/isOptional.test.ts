import { describe, expect, test } from 'vitest';
import { isOptional } from './isOptional';
import { isString } from '../isString/isString';
import { isArray } from '../isArray/isArray';
import { isUndefined } from '../isUndefined/isUndefined';
import { isNumber } from '../isNumber/isNumber';
import { isObject } from '../isObject/isObject';
import { isNull } from '../isNull/isNull';


describe('isOptional', () => {
    test('undefined check', () => {
        expect(isOptional(undefined, isString)).toBe(true);
        expect(isOptional(undefined, isString)).toBe(true);
    });

    test('not undefined check', () => {
        expect(isOptional([], isArray)).toBe(true);
        expect(isOptional(undefined, isUndefined)).toBe(true);
        expect(isOptional(5, isNumber)).toBe(true);
        expect(isOptional({}, isObject)).toBe(true);
        expect(isOptional(null, isNull)).toBe(true);
    });

    test('not valid check', () => {
        expect(isOptional({}, isArray)).toBe(false);
        expect(isOptional(5, isArray)).toBe(false);
        expect(isOptional('', isArray)).toBe(false);
        expect(isOptional(null, isArray)).toBe(false);
    });
});
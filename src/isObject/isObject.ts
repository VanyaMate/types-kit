import { isArray } from '../isArray/isArray';


export const isObject = function (value: unknown): value is Record<any, any> {
    return typeof value === 'object' && value !== null && !isArray(value);
};
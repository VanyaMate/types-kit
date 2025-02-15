import { isArray } from '../isArray/isArray';
export const isObject = function (value) {
    return typeof value === 'object' && value !== null && !isArray(value);
};

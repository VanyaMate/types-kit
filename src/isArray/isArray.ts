import { isUndefined } from '../isUndefined/isUndefined';


export const isArray = function <T> (array: unknown, guard?: (value: unknown) => value is T): array is Array<T> {
    if (!Array.isArray(array)) {
        return false;
    }

    if (isUndefined(guard)) {
        return true;
    }

    return array.every(guard);
};

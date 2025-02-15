import { isUndefined } from '../isUndefined/isUndefined';
export const isArray = function (array, guard) {
    if (!Array.isArray(array)) {
        return false;
    }
    if (isUndefined(guard)) {
        return true;
    }
    return array.every(guard);
};

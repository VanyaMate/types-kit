import { isUndefined } from '../isUndefined/isUndefined';
export const isOptional = function (value, guard) {
    if (isUndefined(value)) {
        return true;
    }
    return guard(value);
};

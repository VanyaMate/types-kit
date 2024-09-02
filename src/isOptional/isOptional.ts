import { isUndefined } from '../isUndefined/isUndefined.ts';


export const isOptional = function <T> (value: unknown, guard: (value: unknown) => value is T): boolean {
    if (isUndefined(value)) {
        return true;
    }

    return guard(value);
};
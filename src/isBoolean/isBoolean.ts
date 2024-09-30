export const isBoolean = function (value: unknown): value is boolean {
    return typeof value === 'boolean';
};
declare module 'isUndefined/isUndefined' {
    export const isUndefined: (value: unknown) => value is undefined;
}
declare module 'isArray/isArray' {
    export const isArray: <T>(array: unknown, guard?: (value: unknown) => value is T) => array is Array<T>;
}
declare module 'isNumber/isNumber' {
    export const isNumber: (value: unknown) => value is number;
}
declare module 'isString/isString' {
    export const isString: (value: unknown) => value is string;
}
declare module 'isArray/isArray.test' {
}
declare module 'isNull/isNull' {
    export const isNull: (value: unknown) => value is null;
}
declare module 'isObject/isObject' {
    export const isObject: (value: unknown) => value is Record<any, any>;
}
declare module 'isObject/isObject.test' {
}
declare module 'isOptional/isOptional' {
    export const isOptional: <T>(value: unknown, guard: (value: unknown) => value is T) => boolean;
}
declare module 'isOptional/isOptional.test' {
}

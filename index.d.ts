declare module "src/isUndefined/isUndefined" {
    export const isUndefined: (value: unknown) => value is undefined;
}
declare module "src/isArray/isArray" {
    export const isArray: <T>(array: unknown, guard?: (value: unknown) => value is T) => array is Array<T>;
}
declare module "src/isNull/isNull" {
    export const isNull: (value: unknown) => value is null;
}
declare module "src/isNumber/isNumber" {
    export const isNumber: (value: unknown) => value is number;
}
declare module "src/isObject/isObject" {
    export const isObject: (value: unknown) => value is Record<any, any>;
}
declare module "src/isOptional/isOptional" {
    export const isOptional: <T>(value: unknown, guard: (value: unknown) => value is T) => boolean;
}
declare module "src/isString/isString" {
    export const isString: (value: unknown) => value is string;
}
declare module "src/types/TypeAssert" {
    export type TypeAssert<T> = (value: unknown, errorMessage: (value: unknown) => string) => asserts value is T;
}
declare module "src/types/TypeGuard" {
    export type TypeGuard<T> = (value: unknown) => value is T;
}
declare module "index" {
    export { isArray } from "src/isArray/isArray";
    export { isNull } from "src/isNull/isNull";
    export { isNumber } from "src/isNumber/isNumber";
    export { isObject } from "src/isObject/isObject";
    export { isOptional } from "src/isOptional/isOptional";
    export { isString } from "src/isString/isString";
    export { isUndefined } from "src/isUndefined/isUndefined";
    export { TypeAssert } from "src/types/TypeAssert";
    export { TypeGuard } from "src/types/TypeGuard";
}

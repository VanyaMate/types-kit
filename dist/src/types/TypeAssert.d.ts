export type TypeAssert<T> = (value: unknown, errorMessage: (value: unknown) => string) => asserts value is T;

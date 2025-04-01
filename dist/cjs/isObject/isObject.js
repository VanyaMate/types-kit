"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isObject = void 0;
const isArray_1 = require("../isArray/isArray");
const isObject = function (value) {
    return typeof value === 'object' && value !== null && !(0, isArray_1.isArray)(value);
};
exports.isObject = isObject;

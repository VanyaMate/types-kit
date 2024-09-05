"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isArray = void 0;
const isUndefined_1 = require("../isUndefined/isUndefined");
const isArray = function (array, guard) {
    if (!Array.isArray(array)) {
        return false;
    }
    if ((0, isUndefined_1.isUndefined)(guard)) {
        return true;
    }
    return array.every(guard);
};
exports.isArray = isArray;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isOptional = void 0;
const isUndefined_1 = require("../isUndefined/isUndefined");
const isOptional = function (value, guard) {
    if ((0, isUndefined_1.isUndefined)(value)) {
        return true;
    }
    return guard(value);
};
exports.isOptional = isOptional;

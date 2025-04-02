const r = function(n) {
  return n === void 0;
}, o = function(n, t) {
  return Array.isArray(n) ? r(t) ? !0 : n.every(t) : !1;
}, i = function(n) {
  return n === null;
}, e = function(n) {
  return typeof n == "number" && !isNaN(n);
}, u = function(n) {
  return typeof n == "object" && n !== null && !o(n);
}, s = function(n, t) {
  return r(n) ? !0 : t(n);
}, c = function(n) {
  return typeof n == "string";
}, f = function(n) {
  return typeof n == "boolean";
};
export {
  o as isArray,
  f as isBoolean,
  i as isNull,
  e as isNumber,
  u as isObject,
  s as isOptional,
  c as isString,
  r as isUndefined
};

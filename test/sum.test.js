"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var sum_1 = __importDefault(require("../src/sum"));
test('basic', function () {
    var a = 3;
    var b = 2;
    expect((0, sum_1.default)(a, b)).toBe(a + b);
});

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Product = () => {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: "product" },
            react_1.default.createElement("div", { className: "productTitle" }),
            react_1.default.createElement("div", { className: "productCategory" }),
            react_1.default.createElement("div", { className: "productImg" }),
            react_1.default.createElement("div", { className: "productDescription" }))));
};
exports.default = Product;

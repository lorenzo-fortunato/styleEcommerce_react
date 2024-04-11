"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Home = () => {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: "home" },
            react_1.default.createElement("h3", null, "Welcome to Style E-Commerce!"),
            react_1.default.createElement("p", null, "Here you can find all you need for your style! Casual, sporty, maybe elegant..."))));
};
exports.default = Home;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const NotFound = () => {
    return (react_1.default.createElement("div", { className: "not-found" },
        react_1.default.createElement("h2", null, "404 - Sorry"),
        react_1.default.createElement("p", null, "That page cannot be found"),
        react_1.default.createElement(react_router_dom_1.Link, { to: "/" }, "Back to the homepage...")));
};
exports.default = NotFound;

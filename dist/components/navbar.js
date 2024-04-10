"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const Navbar = () => {
    return (react_1.default.createElement("nav", { className: "navbar" },
        react_1.default.createElement("h2", null, "StyleE-commerce"),
        react_1.default.createElement("ul", { className: "menu" },
            react_1.default.createElement("li", { className: "menuItem" },
                react_1.default.createElement(react_router_dom_1.Link, { to: "/" }, "Home")),
            react_1.default.createElement("li", { className: "menuItem" },
                react_1.default.createElement(react_router_dom_1.Link, { to: "/products" }, "Products")),
            react_1.default.createElement("li", { className: "menuItem" },
                react_1.default.createElement(react_router_dom_1.Link, { to: "/users" }, "Users")),
            react_1.default.createElement("li", { className: "menuItem" },
                react_1.default.createElement(react_router_dom_1.Link, { to: "/cart" }, "Cart")),
            react_1.default.createElement("li", { className: "menuItem" },
                react_1.default.createElement(react_router_dom_1.Link, { to: "/login" }, "Login")))));
};
exports.default = Navbar;

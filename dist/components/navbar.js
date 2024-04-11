"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const Navbar = () => {
    const handleLogout = () => {
        localStorage.clear();
        window.location.reload();
    };
    return (react_1.default.createElement("nav", { className: "navbar" },
        react_1.default.createElement("h2", { className: "titleLogin" }, "Style E-Commerce!"),
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
                react_1.default.createElement("button", { className: "btnLogout", onClick: handleLogout }, "Logout")))));
};
exports.default = Navbar;

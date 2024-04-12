"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("./style/css/style.css");
const react_router_dom_1 = require("react-router-dom");
const ProductDetail_1 = __importDefault(require("./components/ProductDetail"));
const Home_1 = __importDefault(require("./components/Home"));
const UserList_1 = __importDefault(require("./components/UserList"));
const Cart_1 = __importDefault(require("./components/Cart"));
const Login_1 = __importDefault(require("./components/Login"));
const useToken_1 = __importDefault(require("./customHook/useToken"));
const Footer_1 = __importDefault(require("./components/Footer"));
const productList_1 = __importDefault(require("./components/productList"));
const navbar_1 = __importDefault(require("./components/navbar"));
function App() {
    const { token, setToken } = (0, useToken_1.default)();
    if (!token) {
        return react_1.default.createElement(Login_1.default, { setToken: setToken });
    }
    return (react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
        react_1.default.createElement("div", { className: "App" },
            react_1.default.createElement(navbar_1.default, null),
            react_1.default.createElement("div", { className: "content" },
                react_1.default.createElement(react_router_dom_1.Routes, null,
                    react_1.default.createElement(react_router_dom_1.Route, { path: '/', element: react_1.default.createElement(Home_1.default, null) }),
                    react_1.default.createElement(react_router_dom_1.Route, { path: '/products', element: react_1.default.createElement(productList_1.default, null) }),
                    react_1.default.createElement(react_router_dom_1.Route, { path: '/products/:id', element: react_1.default.createElement(ProductDetail_1.default, null) }),
                    react_1.default.createElement(react_router_dom_1.Route, { path: '/users', element: react_1.default.createElement(UserList_1.default, null) }),
                    react_1.default.createElement(react_router_dom_1.Route, { path: '/cart', element: react_1.default.createElement(Cart_1.default, null) }))),
            react_1.default.createElement(Footer_1.default, null))));
}
exports.default = App;

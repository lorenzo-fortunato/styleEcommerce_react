"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const use_local_storage_state_1 = __importDefault(require("use-local-storage-state"));
const Cart = () => {
    const [cart, setCart] = (0, use_local_storage_state_1.default)("products");
    const [isPending, setIsPending] = (0, react_1.useState)(true);
    (0, react_1.useEffect)(() => {
        setIsPending(false);
        getProducts();
    }, []);
    const getProducts = () => {
        return Object.values(cart || {});
    };
    const totalPrice = cart.reduce((accumulator, product) => accumulator + product.price, 0);
    const removeFromCart = (id) => {
        setCart(getProducts().filter(e => e.id != id));
    };
    const goToPayment = () => {
        setCart([]);
        alert("You have paid!");
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        isPending && react_1.default.createElement("div", null, "Loading cart..."),
        cart.map((product, index) => (react_1.default.createElement("div", { className: "productCartDetails", key: index },
            react_1.default.createElement("h5", null,
                "Title: ",
                product.title),
            react_1.default.createElement("span", null,
                "Rating: ",
                product.rating.rate),
            react_1.default.createElement("span", null,
                "Price: ",
                product.price,
                "\u20AC"),
            react_1.default.createElement("button", { onClick: () => removeFromCart(product.id) }, "Remove from Cart")))),
        react_1.default.createElement("div", null,
            "Total: ",
            totalPrice,
            "\u20AC"),
        react_1.default.createElement("button", { onClick: goToPayment }, "Go to Payment")));
};
exports.default = Cart;

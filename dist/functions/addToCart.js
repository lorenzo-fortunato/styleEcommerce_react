"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const use_local_storage_state_1 = __importDefault(require("use-local-storage-state"));
const AddToCart = (product) => {
    const [myCart, setMycart] = (0, use_local_storage_state_1.default)('products', {
        defaultValue: []
    });
    setMycart([...myCart, product]);
};
exports.default = AddToCart;

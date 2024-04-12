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
const react_router_dom_1 = require("react-router-dom");
const use_local_storage_state_1 = __importDefault(require("use-local-storage-state"));
const ProductDetail = () => {
    const { id } = (0, react_router_dom_1.useParams)();
    const [singleProduct, setSingleProduct] = (0, react_1.useState)();
    const [myCart, setMycart] = (0, use_local_storage_state_1.default)("products", {
        defaultValue: [],
    });
    (0, react_1.useEffect)(() => {
        getSingleProduct();
    }, []);
    (0, react_1.useEffect)(() => {
        localStorage.setItem("products", JSON.stringify(myCart));
    }, [myCart]);
    const getSingleProduct = () => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then((res) => res.json())
            .then((data) => {
            setSingleProduct(data);
        });
    };
    const addToCart = () => {
        setMycart([...myCart, singleProduct]);
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("h3", { className: "singleDetail" }, singleProduct === null || singleProduct === void 0 ? void 0 : singleProduct.title),
        react_1.default.createElement("div", { className: "singleDetail" },
            "Category: ", singleProduct === null || singleProduct === void 0 ? void 0 :
            singleProduct.category),
        react_1.default.createElement("div", { className: "singleDetail" }, singleProduct === null || singleProduct === void 0 ? void 0 : singleProduct.description),
        react_1.default.createElement("div", { className: "detail" },
            react_1.default.createElement("img", { className: "singleImg", src: singleProduct === null || singleProduct === void 0 ? void 0 : singleProduct.image, alt: singleProduct === null || singleProduct === void 0 ? void 0 : singleProduct.title }),
            react_1.default.createElement("div", { className: "priceProspect" },
                react_1.default.createElement("div", { className: "singlePrice" },
                    "Price: ", singleProduct === null || singleProduct === void 0 ? void 0 :
                    singleProduct.price,
                    "\u20AC"),
                react_1.default.createElement("div", { className: "singleRating" },
                    "Rating score: ", singleProduct === null || singleProduct === void 0 ? void 0 :
                    singleProduct.rating.rate),
                react_1.default.createElement("button", { className: "btnAddToCart", onClick: addToCart }, "Add to cart")))));
};
exports.default = ProductDetail;

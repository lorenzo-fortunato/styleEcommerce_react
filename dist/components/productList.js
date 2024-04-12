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
const ProductList = () => {
    const [data, setData] = (0, react_1.useState)([]);
    const [isPending, setIsPending] = (0, react_1.useState)(true);
    const [error, setError] = (0, react_1.useState)(null);
    const [myCart, setMycart] = (0, use_local_storage_state_1.default)('products', {
        defaultValue: []
    });
    (0, react_1.useEffect)(() => {
        getAllProducts();
    }, []);
    const fetchData = (url) => {
        const abortCont = new AbortController();
        fetch(url, { signal: abortCont.signal })
            .then((res) => {
            if (!res.ok) {
                throw "Cannot fetch data for that resource";
            }
            return res.json();
        })
            .then((data) => {
            setData(data);
            setIsPending(false);
        })
            .catch((err) => {
            if (err.name == "AbortError") {
                console.log("fetch aborted");
            }
            else {
                setIsPending(false);
                setError(err.message);
            }
        });
        return () => abortCont.abort();
    };
    const getAllProducts = () => {
        fetchData("https://fakestoreapi.com/products");
    };
    const getProductsPerCategory = (value) => {
        fetchData(`https://fakestoreapi.com/products/category/${value}`);
    };
    const handleSelection = () => {
        const selection = document.querySelector(".category");
        const value = selection.value;
        if (value == "all") {
            getAllProducts();
        }
        else {
            getProductsPerCategory(value);
        }
    };
    const addToCart = (id) => {
        let singleProduct = data.filter(e => e.id == id);
        setMycart([...myCart, ...singleProduct]);
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: "categoryDiv" },
            react_1.default.createElement("span", null, "Choose your category: "),
            react_1.default.createElement("select", { className: "category", onChange: handleSelection },
                react_1.default.createElement("option", { className: "allCategory", value: "all" }, "All"),
                react_1.default.createElement("option", { value: "electronics" }, "Electronics"),
                react_1.default.createElement("option", { value: "jewelery" }, "Jewelery"),
                react_1.default.createElement("option", { value: "men's clothing" }, "Men's clothing"),
                react_1.default.createElement("option", { value: "women's clothing" }, "Women's clothing"))),
        react_1.default.createElement("ul", { className: "productList" },
            error && react_1.default.createElement("div", null, error),
            isPending && react_1.default.createElement("div", null, "Loading products..."),
            data &&
                data.map((product) => {
                    return (react_1.default.createElement("li", { className: "productItem", key: product.id },
                        react_1.default.createElement(react_router_dom_1.Link, { to: `/products/${product.id}`, className: "productStyle" }, product.title),
                        react_1.default.createElement("p", { className: "productStyle" },
                            "Category: ",
                            product.category),
                        react_1.default.createElement("img", { src: product.image }),
                        react_1.default.createElement("button", { className: "btnAddToCart", onClick: () => addToCart(product.id) }, "Add to cart")));
                }))));
};
exports.default = ProductList;

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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const Login = ({ setToken }) => {
    const [username, setUsername] = (0, react_1.useState)("");
    const [password, setPassword] = (0, react_1.useState)("");
    const [isWrongCredentials, setIsWrongCredentials] = (0, react_1.useState)(false);
    const [isPending, setIsPending] = (0, react_1.useState)(false);
    const clearLogin = () => {
        setUsername("");
        setPassword("");
    };
    function loginUser(credentials) {
        return __awaiter(this, void 0, void 0, function* () {
            return fetch("http://localhost:8080/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(credentials),
            }).then((data) => data.json());
        });
    }
    const handleSubmit = (e) => __awaiter(void 0, void 0, void 0, function* () {
        e.preventDefault();
        try {
            const token = yield loginUser({
                username,
                password,
            });
            setToken(token);
            setIsPending(true);
        }
        catch (error) {
            console.log("something went wrong");
            console.log(error);
            setIsWrongCredentials(true);
            setIsPending(false);
            clearLogin();
        }
    });
    return (react_1.default.createElement("form", { onSubmit: handleSubmit, className: "formLogin" },
        react_1.default.createElement("h2", { className: "titleLogin" }, "Style E-Commerce!"),
        react_1.default.createElement("input", { 
            // className="inputLogin"
            className: isWrongCredentials ? "inputLogin wrongCredentials" : "inputLogin", type: "text", value: username, placeholder: "Username", onChange: (e) => setUsername(e.target.value) }),
        react_1.default.createElement("input", { className: isWrongCredentials ? "inputLogin wrongCredentials" : "inputLogin", type: "text", value: password, placeholder: "Password", onChange: (e) => setPassword(e.target.value) }),
        isWrongCredentials && (react_1.default.createElement("div", null, "Wrong credentials, please retry with others...")),
        !isPending ? (react_1.default.createElement("button", { className: "btnLogin" }, "Login")) : (react_1.default.createElement("button", { disabled: true }, "Logging in..."))));
};
exports.default = Login;

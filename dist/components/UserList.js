"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const useFetch_1 = __importDefault(require("../customHook/useFetch"));
const UserList = () => {
    const { data, isPending, error } = (0, useFetch_1.default)("https://fakestoreapi.com/users?sort=asc");
    console.log(data);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        error && react_1.default.createElement("div", null, error),
        isPending && react_1.default.createElement("div", null, "Loading users..."),
        react_1.default.createElement("table", { className: "userTable" },
            react_1.default.createElement("thead", null,
                react_1.default.createElement("tr", null,
                    react_1.default.createElement("th", null, "Name"),
                    react_1.default.createElement("th", null, "Surname"),
                    react_1.default.createElement("th", null, "Email"))),
            react_1.default.createElement("tbody", null, data &&
                data.map((el) => {
                    return (react_1.default.createElement("tr", { key: el.id },
                        react_1.default.createElement("td", null, el.name.firstname),
                        react_1.default.createElement("td", null, el.name.lastname),
                        react_1.default.createElement("td", null, el.email)));
                })))));
};
exports.default = UserList;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
function useToken() {
    const getToken = () => {
        const tokenString = localStorage.getItem('token');
        const userToken = JSON.parse(tokenString);
        return userToken === null || userToken === void 0 ? void 0 : userToken.token;
    };
    const [token, setToken] = (0, react_1.useState)(getToken());
    const saveToken = (userToken) => {
        localStorage.setItem('token', JSON.stringify(userToken));
        setToken(userToken.token);
    };
    return {
        setToken: saveToken,
        token
    };
}
exports.default = useToken;
;

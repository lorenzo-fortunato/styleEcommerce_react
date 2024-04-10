"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
// PER IL MOMENTO NON VIENE UTILIZZATO
const useFetch = (url) => {
    const [data, setData] = (0, react_1.useState)([]);
    const [isPending, setIsPending] = (0, react_1.useState)(true);
    const [error, setError] = (0, react_1.useState)(null);
    (0, react_1.useEffect)(() => {
        const abortCont = new AbortController();
        fetch(url, { signal: abortCont.signal })
            .then(res => {
            if (!res.ok) {
                throw "Cannot fetch data for that resource";
            }
            return res.json();
        })
            .then(data => {
            setData(data);
            setIsPending(false);
        })
            .catch(err => {
            if (err.name == 'AbortError') {
                console.log('fetch aborted');
            }
            else {
                setIsPending(false);
                setError(err.message);
            }
        });
        return () => abortCont.abort();
    }, [url]);
    return { data, isPending, error };
};
exports.default = useFetch;

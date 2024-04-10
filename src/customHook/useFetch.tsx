import { useEffect, useState } from "react";

// PER IL MOMENTO NON VIENE UTILIZZATO

const useFetch = (url: string) => {
    const [ data, setData ] = useState<any[]>([]);
    const [ isPending, setIsPending ] = useState<boolean>(true);
    const [ error, setError ] = useState<any>(null);

    useEffect(() => {
        const abortCont: any = new AbortController();
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
                } else {
                    setIsPending(false);
                    setError(err.message);
                }
            });
            return (): void => abortCont.abort();
    }, [url]);

    return { data, isPending, error };

};

export default useFetch;
import { useEffect, useState } from "react";

function useCurrInfo(curr){
    const [data, setData] = useState({})
    useEffect(() => {
        let url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${curr}.json`
        fetch(url)
        .then((res) => res.json())
        .then((res) => setData(res[curr]))
    }, [curr])
    console.log(data);
    return data;
}

export default useCurrInfo;
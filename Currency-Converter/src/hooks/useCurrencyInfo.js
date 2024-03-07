import {useEffect, useState} from "react"


function useCurrencyInfo(currency){
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);

        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
            .then((res) => res.json())
            .then((res) => {
                setData(res[currency]);
                setLoading(false); 
            })
            .catch((error) => {
                // Handle error
                console.error('Error fetching currency information:', error);
                setLoading(false); 
            });
    }, [currency]);

    return { data, loading };
}

export default useCurrencyInfo;
    

  
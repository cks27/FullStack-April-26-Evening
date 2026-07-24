import React, {useState} from 'react'

const useHttp = (requestFunction, startWithPending=true) => {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(startWithPending);

    // requestData is an object containing data that we want to forward to our actual api.
    const sendRequest = async() => {
        try {
            setIsLoading(true);
            const data = await requestFunction();
            setIsLoading(false);
            setData(data);
        }
        catch (err) {
            console.log(err);
            setIsLoading(false);
            setError(err.message);
        }
    }

    return { data, error, isLoading, sendRequest };
}

export default useHttp
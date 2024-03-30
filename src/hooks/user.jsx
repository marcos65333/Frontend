import { useState } from "react";
import register from "../services/register";

const useSendData = () => {
    const [response,setResponses] = useState(null);
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(null);

    const registerUser = async (data) => {
        setResponses(null);
        try {
            setError(null);
            setLoading(true);
            const res = await register(data);
            setResponses(res);
            setLoading(false);
            setTimeout(() => {
                setResponses(null);
            }, 3000);
        } catch (error) {
            setError(error);
            setLoading(false);
        }
    };

    return { registerUser, response, loading, error };
}

export default useSendData;
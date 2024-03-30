import {post, eliminar} from "../services/post";
import { useState } from "react";

const useSendPost = () => {
    const [response,setResponses] = useState(null);
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(null);

    const registerPost = async (formData) => {
        try {
            setError(null);
            setLoading(true);
            const res = await post(formData);
            setResponses(res);
            setLoading(false);
            setTimeout(() => {
                setResponses(null);
            }, 2000);
        } catch (error) {
            setError(error);
            setLoading(false);
        }
    };
    return { registerPost, response, loading, error };
}

const useDeletePost = () => {
    const [response,setResponses] = useState(null);
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(null);

    const eliminarPost  = async (id_post) => {
        try {           
            setError(null);
            setLoading(true);
            const res = await eliminar(id_post);
            setResponses(res);
            setLoading(false);
        } catch (error) {
            setError(error);
            setLoading(false);
        }
    };

    return {response, loading, error,eliminarPost };
}

export  {useSendPost,useDeletePost};
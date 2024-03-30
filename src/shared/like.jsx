import { Box } from '@chakra-ui/react';
import { AiOutlineLike } from "react-icons/ai";
import { useState, useEffect } from 'react';
import { EndPoint } from '../config/config';


const Likes = ({ post_ }) => {
    const [likes, setLikes] = useState(post_.likes);
    const [verify, setVerify] = useState(0);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${EndPoint()}/api/user/verify-like?post_id=${post_.post_id}`, {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        'authorization': `Bearer ${localStorage.getItem('jwt')}`
                    }
                });
                const data = await response.json();
                setVerify(data === 1 ? 1 : 0);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, [post_.user_id]);

    const handleLike = () => {
        if (verify === 0) {
            setLikes(likes + 1);
            setVerify(1);
            const fetchData = async () => {
                try {
                    const response = await fetch(`${EndPoint()}/api/user/like-post?post_id=${post_.post_id}`, {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            'authorization': `Bearer ${localStorage.getItem('jwt')}`
                        }
                    });
                    const data = await response.json();
                    console.log(data);
                } catch (error) {
                    console.log(error);
                }
            };
            fetchData();
        }
    };

    return (
        <Like likes={likes} verify={verify} handleLike={handleLike} />
    );
};


const Like = ({ likes, verify, handleLike }) => {
    return (
        <Box className='w-32 bg-slate-100 p-2 border-2 rounded-xl flex justify-center cursor-pointer' onClick={handleLike}>
            <AiOutlineLike size={20} color={verify === 1 ? 'blue' : undefined} />
            <p>{likes === 0 ? '' : likes}</p>
        </Box>
    );
};


export default Likes;
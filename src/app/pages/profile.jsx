import { useParams } from 'react-router-dom';
import { Avatar, Box, Text } from "@chakra-ui/react";
import './styles/profile.css';
import { useState, useEffect } from 'react';
import { IoIosCamera } from "react-icons/io";
import { EndPoint } from '../../config/config';
import ShowPost from '../../shared/showPost.jsx';
import Postear from '../../shared/postear.jsx';
import CambiarFotoPerfil from '../../shared/cambiarFoto.jsx';

const Profile = () => {
    const { username } = useParams();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${EndPoint()}/api/user/get_user_by_username/${username}`, {
                    method: 'GET',
                    headers: {
                        'content-type': 'application/json',
                        'authorization': `Bearer ${localStorage.getItem('jwt')}`
                    },
                });
                const data = await response.json();
                setUser(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching user data:', error);
                setLoading(false);
            }
        };
        fetchData();
    }, [username]);

    if (loading) {
        return <Box className='' fontSize={35} alignItems={'center'} justifyContent={'center'} height={'70vh'} display={'flex'}><Text>Loading...</Text></Box>;
    }

    if (!user) {
        return <Box className='div-profile-padre'><Text>Usuario no encontrado</Text></Box>;
    }

    const path = `/api/post/get_all_my_post/${user[0].user_id}`
    
    return ( 
        <Box className='div-profile-padre'>
            {user.map((user) => (
                <>
                    <Box className='section-img-profile'>

                        <Box className='back-img'>
                            <img src={user.picture} alt="" className='img-back' />
                            < CambiarFotoPerfil />
                        </Box>

                        <Box className='section-info'>
                        </Box>

                        <Box className='section-avatar'>
                            <Avatar size="2xl" name={user.username || username} src={user.picture} />
                            <Box className='div-camera' title='Cambiar'>
                                <IoIosCamera className='icon-camera  cursor-pointer' size={25} />
                            </Box>
                            <Text fontSize="2xl" fontWeight="bold" marginTop="2">{user.full_name || username}</Text>
                        </Box>
                    </Box>

                </>
            ))
            }
                    <Box className='mt-5'>
                        <Postear user={user} />
                     </Box>

                    <Box>
                        <ShowPost user={user} path={path} />
                    </Box>

        </Box>
    );
}

export default Profile;

import React, { useState, useEffect, cloneElement } from 'react';
import DrawerExample from '../../shared/sideBar';
import { EndPoint } from "../../config/config.js";
import { Skeleton, SkeletonCircle, SkeletonText, Stack, Box } from '@chakra-ui/react'
import './layout.css';

const LayoutUser = ({ children }) => {
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${EndPoint()}/api/user/get_user`, {
                    method: 'GET',
                    headers: {
                        'content-type': 'application/json',
                        'authorization': `Bearer ${localStorage.getItem('jwt')}`
                    }
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
    }, []);
    return (
        <>
            {loading ?
                <Box width={'100%'} bg='white' height={'70vh'} display={'flex'} justifyContent={'center'} alignItems={'center'} >
                    <Box width={'50%'}>
                        <SkeletonCircle size='20' />
                        <SkeletonText noOfLines={4} spacing='5' skeletonHeight='2' className='mb-5' />
                        <SkeletonText noOfLines={4} spacing='4' skeletonHeight='2' />
                    </Box>
                </Box>
                :
                <>
                    <DrawerExample user={user} />
                    <div className="content-layout" >
                        <main>
                         {typeof children === 'function' ? children(user) : children}
                        </main>                 
                    </div>
                </>
            }
        </>
    );
};

export default LayoutUser;

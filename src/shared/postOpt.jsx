import { Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'
import { FaTrash, FaShare, FaCopy, FaEdit } from "react-icons/fa";
import { useDeletePost } from '../hooks/post';
import ToastStatus from './toast';
import { useState,useEffect } from 'react';
import copy from '../utils/copy.jsx';
import { CiMenuKebab } from "react-icons/ci";



const OptionsPost = ({ post_, post, setPost }) => {
    const { error, loading, response, eliminarPost } = useDeletePost();

    const handleDelete = async (post_id) => {
        await eliminarPost(post_id);
    };

    useEffect(() => {
        if (response) {
            const newPostList = post.filter((p) => p.post_id !== post_.post_id);
            setPost(newPostList);
        }
    }, [response]);

    return (
        <Menu>
            <ToastStatus response={response} />
            <MenuButton className='p-2' >
                <CiMenuKebab size={20} />
            </MenuButton>
            <MenuList>
                <MenuItem gap={'2'} onClick={() => copy(post_.text_post)}><FaCopy />Copiar</MenuItem>
                <MenuItem gap={'2'}><FaEdit/>Edit</MenuItem>
                <MenuItem gap={'2'}><FaShare />Compartir</MenuItem>
                <MenuItem gap={'2'} onClick={() => handleDelete(post_.post_id)}><FaTrash /> Eliminar</MenuItem>
            </MenuList>
        </Menu>
    );
};

export default OptionsPost;

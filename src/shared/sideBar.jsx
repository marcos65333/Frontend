import React, { useRef } from 'react';
import {
    Drawer,
    DrawerBody,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
} from '@chakra-ui/react';
import { Link, Navigate } from 'react-router-dom';
import { GoHomeFill } from "react-icons/go";
import { BiMessageSquareDetail } from "react-icons/bi";
import { CiMenuBurger } from "react-icons/ci";
import { SlLogout } from "react-icons/sl";
import { FaMagnifyingGlass } from "react-icons/fa6";
import './styles/sideBar.css';
import useUser from '../hooks/userUser.jsx';

const DrawerExample = ({ user }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { isLogged, logout } = useUser();
    const btnRef = useRef();

    if (!isLogged) {
        return <Navigate to="/login" />
    }

    const handleToggleDrawer = () => {
        if (isOpen) {
            onClose();
        } else {
            onOpen();
        }
    };

    const logout_ = () => {
        logout();
    }

    return (
        <>
            <div className='flex items-start justify-start m-2 cursor-pointer w-10 rounded-lg'>
                <CiMenuBurger size={32} onClick={handleToggleDrawer} />
            </div>

            <Drawer
                isOpen={isOpen}
                placement='left'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerContent>
                    <DrawerCloseButton className='close-drawer' />
                    <DrawerBody className='flex justify-start items-start'>
                        <div className='mt-16'>

                            <Link to="/user/feed" className="w-40 flex items-center mb-2 gap-4 text-xl hover:bg-slate-200 rounded-lg p-2 ">
                                <GoHomeFill size={32} /> Inicio
                            </Link>

                            <Link to="/user/explorar" className="w-40 flex items-center mb-2 gap-4 text-xl hover:bg-slate-200 rounded-lg p-2 ">
                                <FaMagnifyingGlass size={32} /> Explorar
                            </Link>

                            <Link to="/user/messages" className="w-40 flex items-center mb-2 gap-4 text-xl hover:bg-slate-200 rounded-lg p-2 ">
                                <BiMessageSquareDetail size={32} /> Mensajes
                            </Link>

                            <Link onClick={logout_} to="/user/messages" className="w-40 flex items-center mb-2 gap-4 text-xl hover:bg-slate-200 rounded-lg p-2 ">
                                <SlLogout size={32} /> Salir
                            </Link>
                        </div>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default DrawerExample;

import { useState,useEffect } from "react";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    useDisclosure,
    Button,
    Spinner,

} from '@chakra-ui/react'
import { Link, Navigate } from 'react-router-dom';
import { IoMdClose } from "react-icons/io";
import useUser from '../../hooks/userUser.jsx';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { error, hasLoginError, isLogged, login, isLoginLoading } = useUser();

    if (isLogged) {
        return <Navigate to="/user/feed" />
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        login({ email, password })
    }

    const handlePassword = (e)=>{
        setPassword(e.target.value)
    }

    const handleEmail = (e)=>{
        setEmail(e.target.value)
    }



    return (
        <>
            <Modal isOpen={onOpen} onClose={onClose} size={'xl'}>
                <ModalOverlay />
                <ModalContent>
                    <Link to='/' className=" hover:bg-gray-200 font-bold m-2 p-2 flex justify-center rounded-lg w-10" ><IoMdClose /></Link>
                    <ModalHeader fontSize={'32px'} textAlign={'center'} marginTop={'30px'}>Inicia sesión en  Social Latin</ModalHeader>
                    <ModalBody>
                        <form  className="flex flex-col justify-center items-center p-5 w-full" onSubmit={handleSubmit}>
                            <div className="mt-1">

                                {isLoginLoading ?
                                    <div className="flex items-center justify-center w-96">
                                        <Spinner />
                                    </div> :

                                    <>
                                        <div className="mb-4 w-lg">
                                            <input required type="text" value={email} placeholder="email" className="input border-2 rounded-lg border-blue-400 p-2 w-96" onChange={handleEmail} />
                                        </div>

                                        <div className="mb-4 w-lg">
                                            <input required type="password" value={password}  placeholder="password" className="input border-2 rounded-lg border-blue-400 p-2 w-96" onChange={handlePassword} />
                                        </div>

                                        {error ?
                                            <div className="flex items-center text-center justify-center w-96">
                                                <p className="text-red-500">{error.detail}</p>
                                            </div>
                                            : null
                                        }

                                        <div className="mt-5 justify-center text-center">
                                            <button type="submit" className="text-white border-2 rounded-xl p-2 bg-black w-96">Ingresar</button>
                                        </div>

                                        <div className="mt-5 justify-center text-center">
                                            <Button className="  hover:bg-gray-200 border-2 rounded-xl p-2 bg-white-400 w-96">¿Olvidaste tu contraseña?</Button>
                                        </div>
                                    </>
                                }


                            </div>
                        </form>

                    </ModalBody>

                    <ModalFooter display={'flex'} justifyContent={'center'} gap={'5'} alignItems={'center'} >
                        <h1 className=''>
                            ¿Nuevo en  Social Latin?
                        </h1>
                        <Link to="/register" className="text-blue-500">Crear cuenta</Link>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default Login;
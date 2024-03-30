import { useState } from "react";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    useDisclosure,
    Spinner,
    Stack,
    Alert,
    AlertIcon,

} from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import { IoMdClose } from "react-icons/io";
import {PasswordInput, PasswordSecurity} from "../../shared/passwordInput";
import {verify_age,verify_email,verify_password,verify_username} from '../../utils/regex';
import useSendData from "../../hooks/user.jsx";
import SweetAlert from "../../utils/sweet.js";

const Register = () =>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [name, setName] = useState('');
    const [birthday, setBirthday] = useState('');
    const { isOpen, onOpen, onClose } = useDisclosure()
    const {error,loading,registerUser,response} = useSendData();

    
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!verify_email(email)){
              SweetAlert("center","error","Please enter a valid email")
            return;    
        }

        if(!verify_username(username)){
            SweetAlert("center","error","Please enter a valid username")
            return;
        }

        if(!verify_password(password)){
            return;
        }

        if(!verify_age(birthday)){
            SweetAlert("center","error","You must be 18 years old to register")
            return;
        }
        const data = {
            user_id: 0,
            email: email,
            password: password,
            user_name: username,
            full_name: name,
            birthday_date: birthday,
            register_date: null,
            picture: null
        }
        registerUser(data);
    }


    return (
        <>
            <Modal isOpen={onOpen} onClose={onClose} size={'xl'} >
                <ModalOverlay />
                <ModalContent>
                    <Link to='/' className=" hover:bg-gray-200 font-bold m-2 p-2 flex justify-center rounded-lg w-10" ><IoMdClose /></Link>
                    <ModalHeader fontSize={'32px'} textAlign={'center'} marginTop={'10px'}>Únete hoy a  Social Latin</ModalHeader>
                    <ModalBody>
                    <form action="" className="flex flex-col justify-center items-center  w-full" onSubmit={handleSubmit}>
                        <div className="mt-1">

                            <div className="mb-3">
                                <input required type="text" placeholder="Username" className="input border-2 rounded-lg  p-2 w-96 " onChange={(e) => setUsername(e.target.value)} />
                            </div>

                            <div className="mb-3">
                                <input required type="text" placeholder="FullName" className="input border-2 rounded-lg  p-2 w-96" onChange={(e) => setName(e.target.value)} />
                            </div>

                            <div className="mb-3 w-lg">
                                <input required type="text" placeholder="Email" className="input border-2 rounded-lg  p-2 w-96" onChange={(e) => setEmail(e.target.value)} />
                            </div>

                            <div className="mb-3 ">
                             <PasswordInput  onChange={(value) => setPassword(value)} />
                             <PasswordSecurity password={password} />
                            </div>

                            <div className="mb-3 grid row-span-2">   
                                <input required type="date" placeholder="year"  className="input border-2 rounded-lg p-2 w-96" onChange={(e) => setBirthday(e.target.value)} />                   
                            </div>

                            { loading ? 
                                <div className="flex items-center justify-center w-96">
                                    <Spinner />
                                </div> : 
                                null
                            }

                            { error?
                                <div className="flex items-center justify-center w-96">
                                    <p className="text-red-500">{error.detail}</p>
                                </div> 
                                : null
                            }

                            { response ? 
                                <div className="flex items-center justify-center w-96">
                                    <Stack spacing={3}>
                                            <Alert status={response.type}>
                                                <AlertIcon />
                                                {response.detail}
                                            </Alert>
                                    </Stack>
                                </div> 
                                : null
                            }

                         
                            <div className="mt-5 mb-5">
                                <button className="text-white border-2   rounded-xl p-2  bg-black w-96">Unirse</button>
                            </div>


                        </div>
                    </form>

                    </ModalBody>

                    <ModalFooter display={'flex'} justifyContent={'center'} gap={'5'} alignItems={'center'} >
                            <h1 className=''>
                                ¿Ya tienes una cuenta?
                            </h1>
                            <Link to="/login"  className="text-blue-500">Iniciar sesión</Link>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}


export default Register;


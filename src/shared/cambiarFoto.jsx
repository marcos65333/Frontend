import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    useDisclosure,
    ModalCloseButton,
    Button
} from '@chakra-ui/react'
import { IoIosCamera,IoMdTrash } from "react-icons/io";
import { useState } from 'react';

const CambiarFotoPerfil = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [file, setFile] = useState(null)

    const handleFile = (e) => {
        setFile(e.target.files[0])
    }

    const handleDelete = () => {
        setFile(null)
    }
    return (
        <>
            <IoIosCamera onClick={onOpen} className='icon-camera-back cursor-pointer' size={35} title='Cambiar' />

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader textAlign={'center'}>Cambiar foto de perfil</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <input value={file} type="file" onChange={handleFile}  />
                        <div className='flex justify-center text-center'>
                            {file &&  
                            <>
                                <div style={{position:'absolute',top:'22%',left:'65%'}}>
                                    < IoMdTrash color='white' size={20}  title='Eliminar' className='cursor-pointer' onClick={handleDelete}/>
                                </div>
                                <img src={URL.createObjectURL(file)} alt="preview" className='p-2 rounded-xl h-80 text-center' />
                            </>
                            }
                        </div>

                        <div className='flex justify-center text-center mt-5'>
                            <Button colorScheme='blue' mr={3}  className='bg-blue-400 text-center'>Cambiar</Button>
                        </div>
                    </ModalBody>

                    <ModalFooter>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )

}

export default CambiarFotoPerfil;
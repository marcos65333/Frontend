import {
    Box, Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button
} from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { EndPoint } from '../config/config';
import { MdOutlineModeComment } from "react-icons/md";
import Picture from './picture';
import { IoMdArrowRoundBack } from "react-icons/io";
import { FaRegComments } from "react-icons/fa6";
import { FaPaperPlane } from "react-icons/fa";
import { CiImageOn } from "react-icons/ci";


const Comments = ({ post_id, author }) => {
    const [comments, setComments] = useState([]);
    const [show, setShow] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${EndPoint()}/api/get_comment/${post_id}`, {
                    method: 'GET',
                    headers: {
                        'content-type': 'application/json',
                    }
                });
                const data = await response.json();
                if (response.status === 200 && data.response != 'No hay post con ese id') {
                    setComments(data);
                }
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, [post_id]);


    return (
        <>
            < BasicUsage comments={comments} show={show} setShow={setShow} author={author} />
        </>
    );
};


function BasicUsage({ comments, show, setShow, author }) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Box className='w-32 bg-slate-100 p-2 border-2 rounded-xl flex justify-center cursor-pointer' onClick={onOpen}>
                <MdOutlineModeComment size={20} />
                {comments.length === 0 ?

                    <>
                        {comments.map((comment, index) => {
                            return (
                                <p key={index} >{comment.size}</p>
                            );
                        })
                        }
                    </>
                    :
                    null
                }
            </Box>
            <Modal
                isOpen={isOpen}
                onClose={onClose}
                size={'full'}
            >
                <ModalOverlay />
                <ModalContent>

                    <ModalHeader display={'flex'} alignItems={'center'} className='gap-20' >
                        < IoMdArrowRoundBack size={20} onClick={onClose} className='cursor-pointer' />
                        <p>
                            Publicacion de {author}
                        </p>
                    </ModalHeader>
                    <ModalBody >
                        <Box display={'flex'} justifyContent={'center'}   alignItems={'center'} >
                            {comments.length === 0 ?
                                <Box className='text-center' marginTop={100} >
                                    <Box className='justify-center' display={'flex'}>
                                        <FaRegComments size={100} />
                                    </Box>
                                    <Box className=' mb-2'>
                                        <p className='font-bold'>Todavía no hay comentarios</p>
                                    </Box>
                                    <Box>
                                        <p>Sé la primera persona en comentar.</p>
                                    </Box>
                                </Box>
                                :
                                <>
                                    {comments.map((comment, index) => {
                                        return (
                                            <Box key={index} display={'flex'} alignItems={'center'} gap={'3'}>
                                                < Picture user={comment} show={true} />
                                                <Box className='bg-slate-200 p-2 border-2 rounded-xl w-96'>
                                                    <p className=''>{comment.post_text}</p>
                                                </Box>
                                            </Box>
                                        );
                                    })
                                    }
                                </>

                            }
                        </Box>
                    </ModalBody>
                    <ModalFooter display={'flex'} justifyContent={'center'}>
                        <form action="" className='flex justify-center items-center gap-2'>
                            < CiImageOn size={30} />
                            <input type="text" placeholder='Escribe un comentario' className='w-72   p-2 border-2 rounded-full' />
                            <FaPaperPlane size={30} />
                        </form>
                    </ModalFooter>                 
                </ModalContent>
            </Modal>
        </>
    )
}


export default Comments;
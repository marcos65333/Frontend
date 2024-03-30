import {
  Avatar,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  useDisclosure,
  Button,
  ModalCloseButton,
  FormControl,
  Textarea,
  Box,
  Text,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import AddOptions from "./add";
import Picture from "./picture";
import { useSendPost } from '../hooks/post';
import ToastStatus from './toast';
import { FaRegTrashCan } from "react-icons/fa6";
import './styles/postear.css'

const Postear = ({ user }) => {

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [post, setPost] = useState("");
  const [image, setImage] = useState([]);
  const { error, loading, registerPost, response } = useSendPost();
  const handleImageChange = (selectedImage) => {
    setImage([...image, selectedImage]);
  };

  const handleDeleteImage = (index) => {
    const newImage = image.filter((_, i) => i !== index);
    setImage(newImage);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append("post_id", 0);
    formData.append("user_id", 0);
    formData.append("likes", 0);
    formData.append("retweets", 0);
    formData.append("text_post", post);
    formData.append("date", new Date());
    for (var i = 0; i < image.length; i++) {
      formData.append("images", image[i]);
    }
    if (post.length > 0) {
      registerPost(formData);
      setPost("");
      setImage([]);
    } else {
      const error = document.getElementById("error");
      error.innerText = "No puedes enviar un post vacio";
      setTimeout(() => {
        error.style.display = "none";
      }, 2200);
      return;
    }
  }

  useEffect(() => {
    if (response) {
      const EventSendPost = new CustomEvent('newPost');
      window.dispatchEvent(EventSendPost);
    }
  }, [response]);

  return (
    <>
      <div className="flex justify-center items-center gap-2 border-2 rounded-xl p-2 bg-white" >
        {user.length > 0 &&
          <>
            {user.map((user, index) => (
              <Picture user={user} show={true} key={index} />
            ))}

            <input onClick={onOpen} type="text" placeholder={`¿Qué estas pensando, ${user[0]?.full_name}?`} className="w-80 h-14 p-2 border-2 rounded-full border-slate-400" />
          </>
        }
        <hr />
      </div>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign={"center"}>Create post</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <ToastStatus response={response} />

              {user.length > 0 &&
                <>
                  {user.map((user, index) => (
                    <Box key={index}>
                      <Picture user={user} key={index} />
                      <Textarea value={post} marginTop={"5px"} placeholder={`What's on your mind? ${user?.full_name}`} onChange={(e) => setPost(e.target.value)} />
                      <Text id="error" className="text-red-400 mt-1" />
                    </Box>
                  ))}
                </>
              }

                {image.length > 0 && (
                  <Box className="grid grid-cols-3 gap-2 mt-2">
                    {image.map((selectedImage, index) => (
                      <Box key={index} position="relative">
                        <Box className="container-icon">
                          <FaRegTrashCan 
                          title="Eliminar"
                            color="white"
                            size={24}
                            className="cursor-pointer trash-icon"
                            onClick={() => handleDeleteImage(index)}
                          />
                        </Box>
                        <img
                          src={URL.createObjectURL(selectedImage)}
                          alt="Selected Image"
                          className="img-post"
                        
                        />
                      </Box>
                    ))}
                  </Box>
                )}          
              <AddOptions onImageSelect={handleImageChange} />

            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button type="submit" onClick={handleSubmit} className="border-2 w-96 bg-gray-600">Post</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Postear;

import {Box,Text} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { EndPoint } from "../config/config.js";
import Picture from "./picture.jsx";
import OptionsPost from "./postOpt.jsx";
import Reactions from "./reactions.jsx";
import ShowImages from "./showImages.jsx";

const ShowPost = ({ user,path }) => {

  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(true);

  path ? path = path : path = '/api/post/get_all_post';
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${EndPoint()+path}`, {
          method: 'GET',
          headers: {
            'content-type': 'application/json',
            'authorization': `Bearer ${localStorage.getItem('jwt')}`
          }
        });
        const data = await response.json();
        if (response.status === 200) {
          setPost(data);
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching post data:', error);
        setLoading(false);
      }
    };
    
    fetchData();

    window.addEventListener('newPost', fetchData);
    return () => {
      window.removeEventListener('newPost', fetchData);
    };
   
  }, [EndPoint(),setPost]);
  return (
    <>
      {post.length === 0 ? (
        <Box className="border-8 rounded-2xl p-2 bg-white">
          <p>No hay publicaciones para mostrar</p>
        </Box>
      ) : (
        post.map((post_, index) => (
          <Box key={index} className="m-1 p-2 bg-white border  rounded-md ">

            <Box className="flex justify-between">
              <Picture user={post_} mt={2} post_date={post_.post_date} />
              <Box>
                { post_.user_id === user.user_id &&
                  <OptionsPost post_={post_} post={post} setPost={setPost} />
                }
              </Box>
            </Box>

            <Box className="m-2 mt-5 mb-1">
              <Text>{post_.text_post}</Text>
            </Box>

            {post_.images && post_.images.length > 0 && <ShowImages images={post_.images} />}

            < Reactions post_={post_} />

          </Box>
        ))
      )}
    </>
  )
}

export default ShowPost;
import { Box } from '@chakra-ui/react';
import { AiOutlineLike } from "react-icons/ai";
import { MdOutlineModeComment } from "react-icons/md";
import { TbLocationShare } from "react-icons/tb";
import Likes from './like';
import Comments from './comment';

const Reactions = ({ post_ }) => {
    return (
        <Box display='flex' marginTop='10px' alignItems='center' justifyContent='center' gap='2'>
            
            <Likes post_={post_} />
            
            <Comments post_id={post_.post_id} author={post_.full_name} />
            
            <Box className='w-32 bg-slate-100 p-2 border-2 rounded-xl flex justify-center'>
                <TbLocationShare size={20} />
            </Box>
        </Box>
    );
};


export default Reactions;

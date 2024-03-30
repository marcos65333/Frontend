import React, { useEffect } from 'react';
import { useToast } from '@chakra-ui/react';

const ToastStatus = ({ response }) => {
  const toast = useToast();

  useEffect(() => {
    if (response) {
      toast({
        title: `${response.response} `,
        status: response.type,
        isClosable: true,
        duration: 2000,
        position: 'top-center',
        
      });
    }
  }, [response, toast]);

  return null;
};

export default ToastStatus;

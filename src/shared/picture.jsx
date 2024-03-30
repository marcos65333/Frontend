import { Avatar, Box, Text } from "@chakra-ui/react";
import React from "react";
import { formatRelative, subDays } from "date-fns";
import { es, ru } from 'date-fns/locale'

const Picture = ({ user, show, mt, post_date }) => {
  const formatDate = (dateString) => {
    try {
      const date = new Date(dateString);
      const formattedDate = formatRelative(date, new Date(), { locale: es });
      return formattedDate;
    } catch (e) {
      console.log("error", e)
    }
  }

  const goProfile = () => {
    console.log(user?.user_name)
    window.location.href = `/user/${user?.user_name}`;
  }

  return (
    <Box display={"flex"} alignItems={"center"} gap={"2"} className={mt}>
      <Avatar size='lg' name='Dan Abrahmov' src={user?.picture} onClick={goProfile} className="cursor-pointer" />
      {show ??
        <Box>
          <Text fontWeight={"bold"} >{user?.full_name}</Text>
          <Text fontSize={'13px'}>{formatDate(post_date)}</Text>
        </Box>
      }
    </Box>
  )
}

export default Picture;

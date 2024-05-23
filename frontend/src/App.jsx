import { Button, Stack, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Container } from '@chakra-ui/react'
import Navbar from './components/Navbar'
import UserData from './components/UserData'
export const BASE_URL = import.meta.env.MODE === "development" ? "http://127.0.0.1:5000/api" : "/api"
const App = () => {
  const [users,setUsers]=useState([])
  return (
    <Stack minH={"100vh"}>
        <Navbar setUsers={setUsers}/>
    <Container maxW={"1200px"}>
    <Text fontWeight={"bold"} 
    fontSize={{base:"3xl", md:"50"}}
    letterSpacing={"2px"}
    textTransform={"uppercase"}
    textAlign={"center"}
    mb={6}
    >
   <Text as={"span"} bgGradient="linear(to-r, cyan.400, blue.500)" bgClip="text">
    My Besties 
    </Text>
    🚀
    </Text>
    <UserData users={users} setUsers={setUsers}/>
    </Container>
   
        
    </Stack>
  )
}

export default App

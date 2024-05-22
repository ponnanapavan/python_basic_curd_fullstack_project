import { Button, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { Container } from '@chakra-ui/react'
import Navbar from './components/Navbar'
import UserData from './components/UserData'
const App = () => {
  return (
    <Stack minH={"100vh"}>
        <Navbar/>
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
    <UserData/>
    </Container>
   
        
    </Stack>
  )
}

export default App

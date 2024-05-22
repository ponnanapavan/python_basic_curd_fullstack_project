import { Container,Box, Flex, Text, Button, useColorMode, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import {IoMoon} from 'react-icons/io5';
import {LuSun} from "react-icons/lu"
import CreateUserModel from './CreateUserModel';
const Navbar = ({setUsers}) => {
    const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Container maxW={"900px"}>
        <Box px={4} my={4} borderRadius={5 } bg={useColorModeValue("gray.200", "gray.700")}>
            <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
                <Flex alignItems={"center"} justifyContent={"center"} gap={3} display={{base:"none",sm:'flex'}}>
                    <img src='/react.png ' width={50} height={50}></img>
                    <Text fontSize={"40px"}>+</Text>
                    <img src='/python.png ' width={50} height={40}></img>
                    <Text fontSize={"40px"}>=</Text>
                    <img src='/explode.png ' width={45} height={45}></img>
                </Flex>
                <Flex gap={3} alignItems={"center"}>
                    <Button onClick={toggleColorMode}>
                        {colorMode === "light" ? <IoMoon/> : <LuSun size={20}/>}
                    </Button>
                    <CreateUserModel setUsers={setUsers}/>

                </Flex>
            </Flex>
        </Box>

    </Container>
  )
}

export default Navbar

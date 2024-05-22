import { Avatar, Box, Card, CardBody, CardHeader, Flex, Heading, IconButton, Text, useToast } from '@chakra-ui/react'
import React from 'react'
import { BiTrash } from 'react-icons/bi'
import EditModel from './EditModel'
import { BASE_URL } from '../App'
const UserCard = ({user, setUsers}) => {
    const toast=useToast();
async function handleDeleteUsers(){
    try{
           const response=await fetch(BASE_URL+'/friends/'+user.id,{
            method:'DELETE'
           })
              const data=await response.json();
              setUsers((prevUsers)=>prevUsers.filter((u)=> u.id !== user.id))
              toast({
                status:"success",
                title:"success",
                description:"Friend deleted sucessfully",
                duration:2000,
                position:"top-center"
              })

    }catch(err){
        toast({
            title:'An error occured',
            status:err.message,
            duration:4000,
            isClosable:true
          })

    }
}
  return (
   <Card>
    <CardHeader>
        <Flex  gap={4}>
            <Flex flex={"1"} gap={"4"} alignItems={"center"}>
               <Avatar src={user.imgUrl}/>
              <Box>
                <Heading size={'sm'}>{user.name}</Heading>
                <Text>{user.role}</Text>
               </Box>
            </Flex>

            <Flex>
                <EditModel user={user} setUsers={setUsers}/>
                <IconButton onClick={handleDeleteUsers} variant='ghost' colorScheme='red' size={'sm'} aria-label='See-menu' icon={<BiTrash size={20}/>}>

                </IconButton>

            </Flex>
      
        </Flex>
    </CardHeader>
    <CardBody>
        <Text>{user.description}</Text>
    </CardBody>
   </Card>
  )
}

export default UserCard

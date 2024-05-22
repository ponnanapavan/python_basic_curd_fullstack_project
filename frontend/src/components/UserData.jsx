import { Flex, Grid, Spinner, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'

import UserCard from './UserCard'

const UserData = ({users, setUsers}) => {
 const [loading,setLoading]=useState(true)
  useEffect(()=>{
    const getUsers=async ()=>{
      try{
            const response=await fetch("http://127.0.0.1:5000/api/friends")
            const data=await response.json();
            console.log(data)
            if(!data.length){
              throw new Error(data.error);
            }
                setUsers(data);
                console.log(data)

      }catch(err){
        console.log(err)

      }
      finally{
        setLoading(false)
      }
    }
       getUsers();

  },[setUsers])
  return (
   <>
    <Grid templateColumns={{
        base:"1fr",
        md:'repeat(2, 1fr)',
        lg:"repeat(3, 1fr)"

    }} gap={4}>
        {users.map((user)=>(
            <UserCard key={user.id} user={user} setUsers={setUsers}/>
        ))}
    </Grid>
     {loading && (
      <Flex justifyContent={'center'}>
        <Spinner size={"xl"}/>
      </Flex>
     )}

     {!loading && users.length === 0 && (
      <Flex justifyContent={'center'}>
        <Text fontSize={"xl"}>
          <Text as={"span"} fontSize={"2xl"} fontWeight={"bold"} mr={2}>
            poor you!😒
          </Text>
          No friends found.

        </Text>

      </Flex>
     )}
   </>
  )
}

export default UserData

import { Button, Flex, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Radio, RadioGroup, Textarea, useDisclosure, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import { BiAddToQueue } from "react-icons/bi"
import { BASE_URL } from '../App'
const CreateUserModel = ({setUsers}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [isloading, setIsLoading]=useState(false);
    const [inputs,setInputs]=useState({
      name:'',
      role:'',
      description:'',
      gender:''
    })
        const toast=useToast()
    async function handlesubmit(e){
      e.preventDefault()
      setIsLoading(true)
      try{

        const response=await fetch(BASE_URL+'/friends',{
          method:'POST',
          headers:{
            'Content-Type':'application/json'
          },
             body:JSON.stringify(inputs)
        })
            const data=await response.json();
            if (data.error) {
              throw new Error(data.error); 
            }

            toast({
              status:"success",
              title:"Yayy!❤️",
              description:"Friend created sucessfully",
              duration:2000,
              position:"top-center"
            })
              
            onClose();
            setUsers((prevUsers)=>[...prevUsers, data]);
            setInputs({
              name:"",
              role:"",
              description:"",
              gender:""
            })
      }catch(err)
      {
        toast({
          status:"error",
          title:"An error occured",
          description:err.message,
          duration:4000,
          
        })
      }finally{
        setIsLoading(false);
       
      }
    }
  return (
    <>
    <Button onClick={onOpen}>
        <BiAddToQueue size={20}/>
    </Button>
    <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay/>
        <form onSubmit={handlesubmit} >
        <ModalContent>
            <ModalHeader>My new Bff 😍</ModalHeader>
            <ModalCloseButton/>
            <ModalBody pb={6}>
              <Flex alignItems={"center"} gap={4}>
              <FormControl>
                    <FormLabel>Full Name</FormLabel>
                   <Input type='text' placeholder='enter your name' value={inputs.name} onChange={(e)=>setInputs({...inputs, name:e.target.value})}></Input>
                    
                </FormControl>
                <FormControl>
                    <FormLabel>Role</FormLabel>
                   <Input type='text' placeholder='coder'
                   value={inputs.role} onChange={(e)=>setInputs({...inputs, role:e.target.value})}></Input>
                    
                </FormControl>
               
              </Flex>
              <FormControl mt={4}>
                    <FormLabel>Description</FormLabel>
                   <Textarea resize={"none"} overflow={"hidden"} 
                     value={inputs.description} onChange={(e)=>setInputs({...inputs, description:e.target.value})}
                   ></Textarea>
                    
                </FormControl>
                <RadioGroup mt={4}>
                   <Flex gap={3}>
                    <Radio value='male' onChange={(e)=>setInputs({...inputs, gender:e.target.value})}>Male</Radio>
                    <Radio value='female' onChange={(e)=>setInputs({...inputs, gender:e.target.value})}>Female</Radio>
                   </Flex>
                    
                </RadioGroup>
            </ModalBody>
            <ModalFooter>
                <Button type='submit' colorScheme='blue' mr={3} isLoading={isloading}>
                   Add
                </Button>
                <Button onClick={onClose}>Cancel</Button>
               
            </ModalFooter>
        </ModalContent>
        </form>



    </Modal>
    </>
  )
}

export default CreateUserModel

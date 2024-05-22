import { Button, Flex, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Radio, RadioGroup, Textarea, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { BiAddToQueue } from "react-icons/bi"
const CreateUserModel = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
    <Button onClick={onOpen}>
        <BiAddToQueue size={20}/>
    </Button>
    <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay/>
        <ModalContent>
            <ModalHeader>My new Bff 😍</ModalHeader>
            <ModalCloseButton/>
            <ModalBody pb={6}>
              <Flex alignItems={"center"} gap={4}>
              <FormControl>
                    <FormLabel>Full Name</FormLabel>
                   <Input type='text' placeholder='enter your name'></Input>
                    
                </FormControl>
                <FormControl>
                    <FormLabel>Role</FormLabel>
                   <Input type='text' placeholder='coder'></Input>
                    
                </FormControl>
               
              </Flex>
              <FormControl mt={4}>
                    <FormLabel>Description</FormLabel>
                   <Textarea resize={"none"} overflow={"hidden"} ></Textarea>
                    
                </FormControl>
                <RadioGroup mt={4}>
                   <Flex gap={3}>
                    <Radio value='male'>Male</Radio>
                    <Radio value='female'>Female</Radio>
                   </Flex>
                    
                </RadioGroup>
            </ModalBody>
            <ModalFooter>
                <Button colorScheme='blue' mr={3}>
                   Add
                </Button>
                <Button onClick={onClose}>Cancel</Button>
               
            </ModalFooter>
        </ModalContent>



    </Modal>
    </>
  )
}

export default CreateUserModel

import React from 'react';
import {useDisclosure} from '@chakra-ui/react';

import ChequeImg from "./oneView.png";


import {
    Input,Image,GridItem,Grid,Center,
    Box,Tooltip,Text,IconButton,CheckCircleIcon,
    Button,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
  } from "@chakra-ui/react"



  const Cheque=(props)=> {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  
    return (
      <>
        <Button ref={btnRef} colorScheme="red" ml="28px" size="sm" onClick={onOpen}  >
          View
        </Button>
        <Drawer
         size="xl"
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay>
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>Cheque</DrawerHeader>
  
              <DrawerBody>
              <Box height="100%" bg="#F7FAFC">

                        
              <Center fontSize="2rem" mt="50px" mb="5px"> Cheque</Center>

                            <Box
                            mt={{ base: '50px', md: '125px' }}
                            ml={{ base: '20px', md: '320px' }}
                            marginBottom="0"
                            pt="150px"
                            height="100%"
                            mr="10px"
                            >


                                <Grid
                                    h="600px"
                                    templateRows="repeat(2, 1fr)"
                                    templateColumns="repeat(6, 1fr)"
                                    gap={2}
                                    >
                                    <GridItem rowSpan={2} colSpan={2} >
                                        <Center>
                                        <Image
                                            height="100%"
                                            width="100%"
                                            borderRadius="10px"
                                            ml="0px"
                                            objectFit="cover"
                                            src={ChequeImg}
                                            alt="Staff"
                                        />
                                        </Center>

                                        
                                    </GridItem>
                                    
                                    <GridItem  rowSpan={2} colSpan={4}  >

                                    <Box
                                        borderStyle="solid"
                                        borderColor="#3182CE"
                                        borderWidth="1px"
                                        h="40px"
                                        w="100%%"
                                        m="10px"
                                        mt="10px"
                                        mb="10px"
                                        padding= "3px 5px"
                                        borderRadius="5px"
                                    >
                                    <Text fontSize="1.2rem">  Cheque ID :{props.Chequeid}</Text>
                                </Box>
                                
                                <Box
                                        borderStyle="solid"
                                        borderColor="#3182CE"
                                        borderWidth="1px"
                                        h="40px"
                                        w="100%%"
                                        m="10px"
                                        mt="10px"
                                        mb="20px"
                                        padding= "3px 5px"
                                        borderRadius="5px"
                                    >
                                       <Text fontSize="1.2rem"> SENDER : {props.SName}</Text>
                                </Box>
                                
                                <Box
                                        borderStyle="solid"
                                        borderColor="#3182CE"
                                        borderWidth="1px"
                                        h="40px"
                                        w="100%%"
                                        m="10px"
                                        mt="10px"
                                        mb="10px"
                                        padding= "3px 5px"
                                        borderRadius="5px"
                                    >
                                       <Text fontSize="1.2rem"> Reciver : {props.RName}</Text>
                                </Box>

                                <Box
                                        borderStyle="solid"
                                        borderColor="#3182CE"
                                        borderWidth="1px"
                                        h="40px"
                                        w="100%%"
                                        m="10px"
                                        mt="10px"
                                        mb="10px"
                                        padding= "3px 5px"
                                        borderRadius="5px"
                                    >
                                       <Text fontSize="1.2rem"> Statue :{props.status}</Text>
                                </Box>

                                <Box
                                        borderStyle="solid"
                                        borderColor="#3182CE"
                                        borderWidth="1px"
                                        h="40px"
                                        w="100%%"
                                        m="10px"
                                        mt="10px"
                                        mb="10px"
                                        padding= "3px 5px"
                                        borderRadius="5px"
                                    >
                                       <Text fontSize="1.2rem"> Amount: {props.amount}</Text>
                                </Box>

                                <Box
                                        borderStyle="solid"
                                        borderColor="#3182CE"
                                        borderWidth="1px"
                                        h="40px"
                                        w="100%%"
                                        m="10px"
                                        mt="10px"
                                        mb="10px"
                                        padding= "3px 5px"
                                        borderRadius="5px"
                                    >
                                       <Text fontSize="1.2rem"> Signature: {props.sig}</Text>
                                </Box>
                                

                                <Button bg="#C53030" ml="10px"> Reject</Button>

                                <Button bg="#2F855A" ml="160px"> Accept</Button>


                                


                                    </GridItem>

                                    </Grid>
                            

                            </Box>

                            </Box>


              </DrawerBody>
  
              <DrawerFooter>
                <Button variant="outline" mr={3} onClick={onClose}>
                  Cancel
                </Button>
               
              </DrawerFooter>
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>
      </>
    )
  }

  export default    Cheque;
import React from 'react';
import { useMediaQuery } from "@chakra-ui/react"
import {
  Flex, Box, Button,ReactRouterLink,Center,VStack,} from '@chakra-ui/react';

import { Link } from 'react-router-dom';



function Sidebar(props) {
    const [isLargerThanPhone] = useMediaQuery("(min-width: 800px)")
  
  
  return (
    <>

    {isLargerThanPhone ? 

      <Flex
        paddingTop="0px"
        h="800px"
        left="0px"
        top="0px"
        width={{ base: '100%', md: '200px' }}
        height={{ base: '520px', md: '100%' }}
        borderTop="1px"
        rounded="md"
        borderTopColor="#3182CE"
        borderTopWidth="85px"
        position="fixed"
        borderBottomColor="#3182CE"
        borderBottomWidth="5px"
        position="fixed"
        ml="0px"
        backgroundColor="#1A202C "
        zIndex="30"
      >
        <Box
          width="100%"
          borderStyle="solid"
          borderColor="gray.600"
          borderWidth="0px"
        >
         

          <Box h="50px" mb="70px"> </Box>
          

          <Box width="100%">
            <VStack              
              spacing={5}
              align="stretch"
            >

           


              <Link as={ReactRouterLink} to="/StaffchangeDetails">
                <Button
                  h="50px"
                  w="100%"
                  _hover={{
                    background: '#3182CE',
                    color: 'white',
                    transitionDuration: '0.6s',
                  }}
                  rounded="box"
                  boxShadow="dark-lg"
                  colorScheme="gray.600"
                >
                  <Center>Change Details</Center>
                </Button>
              </Link>


              <Link as={ReactRouterLink} to="/StaffchangePassword">
                <Button
                  h="50px"
                  w="100%"
                 
                  _hover={{
                    background: '#3182CE',
                    color: 'white',
                    transitionDuration: '0.6s',
                  }}
                  rounded="box"
                  boxShadow="dark-lg"
                  colorScheme="gry.600"
                >
                  Change Password
                </Button>
              </Link>

              
            </VStack>
          </Box>
        </Box>
      </Flex> :null}
    </>
  );
}

export default Sidebar;

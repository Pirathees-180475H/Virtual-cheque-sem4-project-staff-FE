import React from 'react';
import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,Button,Box
  } from "@chakra-ui/react";


function AlertDialogExample() {
        const [isOpen, setIsOpen] = React.useState(false)
        const onClose = () => setIsOpen(false)
        const cancelRef = React.useRef()
      
        return (
          <>
            <Button colorScheme="red"  onClick={() => setIsOpen(true)}>
              View Requst
            </Button>
      
            <AlertDialog
             
              isOpen={isOpen}
              leastDestructiveRef={cancelRef}
              onClose={onClose}
            >
              <AlertDialogOverlay >
                <AlertDialogContent marginTop="250px">
                  <AlertDialogHeader fontSize="lg" fontWeight="bold">
                        Accept OR Delete
                  </AlertDialogHeader>
      
                  <AlertDialogBody>
                      Accept or Delete.
                  </AlertDialogBody>
      
                  <AlertDialogFooter>
                    
                    <Button colorScheme="red" onClick={onClose} ml={3}>
                      Delete
                    </Button>
                    
                    <Button colorScheme="green" onClick={onClose} ml={3}>
                     Accept
                    </Button>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialogOverlay>
            </AlertDialog>
          </>
        )
      }
   


export default AlertDialogExample

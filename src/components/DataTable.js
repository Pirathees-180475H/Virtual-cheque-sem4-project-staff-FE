import React ,{useState}from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, TableCaption } from "@chakra-ui/react";
import {Modal,ModalOverlay,ModalContent,ModalHeader,ModalFooter,ModalBody,ModalCloseButton,Lorem,Button} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,Input
  } from "@chakra-ui/react"

  import Model from './CustomerModel'



const DataTable = ({data}) => {
    const columns = data[0] && Object.keys(data[0]);

    console.log(columns);

    const onClickHandler=(row)=>{

    }


    
    return (
       
        <Table variant="striped" colorScheme="gray">
            <hr/>
        
            <Thead>
                <Tr>{data[0] && columns.map((heading)=><Th>{heading}</Th>)}</Tr>
            </Thead>

            <Tbody> 
                {data.map(row => 
                <Tr>
                    { columns.map(column => <Td>{row[column]}</Td> )}
                   
                    <Td> 
                      <Model Customer={row}/>   
                    </Td>
            
                </Tr>
               
                )}
  
            </Tbody>

         </Table> 
    )
}

export default DataTable

import React from 'react';
import {Text,Box,Image} from '@chakra-ui/react';
import './ChequeCard.css';
import './ChequeAvatar.css';
import ChequeModel from './OneChequeModel';
import Cheque from "./chequex.png";

const ChequeCard = props => {
  return (
    <div className="cardd" style={props.style}>
       
   
    <Image
        marginTop="25px"
        borderRadius="full"
        boxSize="100px"
        src={Cheque}
        alt="Segun Adebayo"
      />
        
        <Text fontSize="1.5rem"> Send: {props.SName}</Text> 
        <Text fontSize="1.5rem"> Date: {props.Date}</Text> 
        <Text fontSize="1.5rem">Recive: {props.RName}</Text>
        <ChequeModel SName={props.SName}
        
         RName={props.RName}
         Date={props.Date}
         Chequeid={props.Chequeid}
         status={props.status}
         sig={props.sig}
         amount={props.amount}/>
    </div>
   
  );
};

export default ChequeCard;

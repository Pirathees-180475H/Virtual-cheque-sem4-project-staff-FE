import React from 'react';
import { Link } from 'react-router-dom';
import Alt from './AcceptDlt';
import{Box}from '@chakra-ui/react';

import Card from './NRLCard';
import './NewRegisterItem.css';

const RegisterItem = props => {
  return (

    <Box margin="auto">
    <li className="user-oitem">
      <Card className="user-oitem__content">
        <Link >
         
          <div className="user-oitem__info">
            <h2>{props.name}</h2>
            <h3>
              Email :{props.mail}
              
            </h3>

           
          </div>
        </Link>
      </Card>

      <Alt/>
    </li>
    </Box>
  );
};

export default RegisterItem;

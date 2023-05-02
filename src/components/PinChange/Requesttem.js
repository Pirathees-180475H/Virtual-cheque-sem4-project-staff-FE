import React from 'react';
import { Link } from 'react-router-dom';

import Avatar from './PinChangeAvatarCard/Avatar';
import Card from './PinChangeAvatarCard/Card';
import './RequestItem.css';

import {Text } from '@chakra-ui/react';

import Accept from'./AcceptDlt';

const UserItem = props => {
  return (
    <li className="user-item">
      <Card className="user-item__content">

        <Link >
          <div className="user-item__image">
            <Avatar image={props.image} alt={props.name} />
          </div>
          <div className="user-item__info">
            <h2>{props.name}</h2>

            
            <Text fontSize="1.2rem">
               {"Reason ->"}{props.reason}
            </Text>
                  <br/>
                  <Accept/>
          </div>
        </Link>

      </Card>
    </li>
  );
};

export default UserItem;

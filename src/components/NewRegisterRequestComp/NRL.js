import React from 'react';

import ReqItem from './NewRegisterItem';
import Card from './NRLCard';
import './NRL.css';

const UsersList = props => {
  if (props.items.length === 0) {
    return (
      <div >
        <Card>
          <h2>No new joine  found.</h2>
        </Card>
      </div>
    );
  }

  return (
    <ul className="users-olist">
      {props.items.map(user => (
        <ReqItem
          key={user.id}
          
          name={user.name}
          mail={user.mail}
        />
      ))}
    </ul>
  );
};

export default UsersList;

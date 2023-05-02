import React from 'react';

import RequestItem from './Requesttem';
import Card from './PinChangeAvatarCard/Card';
import './RequestList.css';

const RequestList = props => {
  if (props.items.length === 0) {
    return (
      <div className="center">
        <Card>
          <h2>No Pin Change Requests found.</h2>
        </Card>
      </div>
    );
  }

  return (
    <ul className="users-list">
      {props.items.map(request => (
        <RequestItem
          key={request.request_id}
          id={ request.request_id}
          image={request.image}
          name={request.customername}
          reason={request.reason}
        />
      ))}
    </ul>
  );
};

export default RequestList;

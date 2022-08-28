import React, { memo } from 'react';
import UserItem from './UserItem';

const Users = ({ users, addUser }) => {
  console.log('Users Component Rendered');

  return (
    <div className="users">
      <button id="add-button" onClick={addUser}>
        Add User
      </button>
      {users?.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
};

export default memo(Users);

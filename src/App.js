import React, { useState } from 'react';

import AddUser from './Components/Users/AddUser';
import UsersList from './Components/Users/UsersList';
function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (userName, userAge) => {
    // When state update relies on the previous state, use function form so
    // the function automatically gets the previous state as an arg
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { id: Math.random().toString(), name: userName, age: userAge },
      ];
    });
  };

  return (
    <React.Fragment>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </React.Fragment>
  );
}

export default App;

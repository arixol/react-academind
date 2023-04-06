import React, { useState } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.module.css';

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault(); // prevent form submission
    if (!enteredUsername.trim().length || !enteredAge.trim().length) {
      setError({
        title: 'Invalid User',
        message: 'Please enter a valid name.',
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: 'Invalid Age',
        message: 'Please enter a valid age.',
      });
      return;
    }
    props.onAddUser(enteredUsername, enteredAge);
    setEnteredAge(''); // must also map value to element -- value={enteredUsername}
    setEnteredUsername(''); // must also map value to element -- value={enteredAge}
  };

  const usernameChangedHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangedHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const clearErrorHandler = (event) => {
    setError(null);
  };

  return (
    <div>
      {error && error.hasOwnProperty('title') && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onClick={clearErrorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            onChange={usernameChangedHandler}
            value={enteredUsername}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            onChange={ageChangedHandler}
            value={enteredAge}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;

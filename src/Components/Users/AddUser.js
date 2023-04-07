import React, { useState, useRef } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.module.css';

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  // const [enteredUsername, setEnteredUsername] = useState(''); // Could avoid maintaining state on every keystroke by using refs to read entered value
  // const [enteredAge, setEnteredAge] = useState('');
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault(); // prevent form submission
    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;
    if (!enteredName.trim().length || !enteredUserAge.trim().length) {
      setError({
        title: 'Invalid User',
        message: 'Please enter a valid name.',
      });
      return;
    }
    if (+enteredUserAge < 1) {
      setError({
        title: 'Invalid Age',
        message: 'Please enter a valid age.',
      });
      return;
    }
    props.onAddUser(enteredName, enteredUserAge);
    nameInputRef.current.value = ''; // Note: should rarely use refs to manipulate DOM
    ageInputRef.current.value = ''; // Note: should rarely use refs to manipulate DOM
    // setEnteredAge(''); // must also map value to element -- value={enteredUsername}
    // setEnteredUsername(''); // must also map value to element -- value={enteredAge}
  };

  const usernameChangedHandler = (event) => {
    // setEnteredUsername(event.target.value);
  };

  const ageChangedHandler = (event) => {
    // setEnteredAge(event.target.value);
  };

  const clearErrorHandler = (event) => {
    setError(null);
  };

  // Input elements below:
  //     - Uncontrolled Component when using ref: Internal state (value reflected in them) is not controlled by React when using refs because this
  //         relies on default behavior of input and the entered value is reflected and we just fetch it with a React feature but we don't feed data
  //         back into the input, we're using the regular DOM API to set the value.
  //     - Controlled Component: Manage state and update state on every keystroke and feed state back into input with value prop.
  return (
    <React.Fragment>
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
            // onChange={usernameChangedHandler}
            // value={enteredUsername}
            ref={nameInputRef}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            // onChange={ageChangedHandler}
            // value={enteredAge}
            ref={ageInputRef}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </React.Fragment>
  );
};

export default AddUser;

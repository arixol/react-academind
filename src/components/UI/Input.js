import React from 'react';

import classes from './Input.module.css';

// Wrap in forwardRef to use refs with custom component
// Forwards ref set on <Input> comopnent used in MealItemForm
const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input
        ref={ref}
        {...props.input}
      />
    </div>
  );
});

export default Input;

import React from 'react';

const UserInputContainer = (props) => {
  if (props.secondNumber) {
    return (
      <div>
        <input autoComplete='off' type='text' id=''></input>
      </div>
    )
  } else {
    return (
      <div></div>
    )
  }
}

export default UserInputContainer;
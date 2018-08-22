// import React, {Component} from 'react';
const inputs = (state=[], action) => {
  switch (action.type) {
    case 'Add_Input':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          canceled: false
        }
      ];
    case 'Cancel_input':
      return state.filter(input=>{
        return input.id !== action.id;
      });
    default:
      return state;
  }
};

export default inputs;

import React from 'react';
import './style.css';

const Pill = props => {
  const {inputList} = props;
  console.log(`input list: ${inputList}`);
  return (
    <div className="pillBox">
      {
        inputList.map((input, index) => {
            return (
                <p className="pillItem">
                  {input.text}
                  <span
                    key={index}
                    className="glyphicon glyphicon-remove"
                    role="button"
                    id="close-btn"
                    onClick={()=>props.hidePill(input.id)}
                  >
                  </span>
                </p>
            )
        })
      }
    </div>

  )
}

export default Pill;

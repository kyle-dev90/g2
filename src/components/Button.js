import React from 'react';

const Button = React.memo((props) => {
  return props.active ? (
    <button onClick={props.onClick} className={props.className}>
      {props.text}
    </button>
  ) : (
    <button className="btn-disable">{props.text}</button>
  );
});

export default Button;

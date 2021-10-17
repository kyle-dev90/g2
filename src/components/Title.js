import React from 'react';

const Title = React.memo((props) => {
  return <h1>{props.text}</h1>;
});

export default Title;

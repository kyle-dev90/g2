import React from 'react';

const Subtitle = React.memo((props) => {
  return <h2>{props.text}</h2>;
});

export default Subtitle;

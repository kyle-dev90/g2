import React from 'react';

const Subtext = React.memo((props) => {
  return <h3>{props.text}</h3>;
});

export default Subtext;

import React from 'react';
import 'src/assets/styles/styles.css';

const Loading = React.memo((props) => {
  return (
    <div className="container">
      <div>
        <h3>Loading...</h3>
      </div>
    </div>
  );
});

export default Loading;

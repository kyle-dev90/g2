import React from 'react';

const QuestionNumber = React.memo((props) => {
  return (
    <p>
      {props.num} / {props.total}
    </p>
  );
});

export default QuestionNumber;

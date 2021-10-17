import React from 'react';

const values = ['true', 'false'];

const AnswerRadio = React.memo((props) => {
  return (
    <div className="d-flex justify-center">
      {values.map((val, id) => {
        return (
          <div
            key={id}
            className="answer-div"
            onClick={() => props.setAnswer(val)}
          >
            <input
              type="radio"
              name="answer"
              onChange={() => props.setAnswer(val)}
              checked={props.answer === val}
            />
            <span>{val}</span>
          </div>
        );
      })}
    </div>
  );
});

export default AnswerRadio;

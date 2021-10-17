import React from 'react';
import RichText from './RichText';

const QuestionBlock = React.memo((props) => {
  return (
    <div className="d-flex question-div">
      {props.showAnswer && (
        <div className="answer-result">{props.question.correct_answer}</div>
      )}
      <div className="">
        <RichText text={props.question.question} />
      </div>
    </div>
  );
});

export default QuestionBlock;

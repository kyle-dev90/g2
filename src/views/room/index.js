import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addScore, setGameOver } from 'src/redux/slices/question';
import QuestionNumber from 'src/components/QuestionNumber';
import Button from 'src/components/Button';
import Title from 'src/components/Title';
import QuestionBlock from 'src/components/QuestionBlock';
import AnswerRadio from 'src/components/AnswerRadio';
import { useHistory } from 'react-router-dom';
import 'src/assets/styles/styles.css';

function RoomView() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { questions, totalCount } = useSelector((state) => state.question);
  const [question, setQuestion] = useState();
  const [num, setNum] = useState(0);
  const [answer, setAnswer] = useState(null);

  useEffect(() => {
    setQuestion(questions[num]);
  }, [dispatch, questions, num]);

  const onNext = useCallback(() => {
    if (num + 1 < totalCount) {
      if (question.correct_answer.toLowerCase() === answer) {
        dispatch(addScore());
      }
      setNum(num + 1);
      setQuestion(questions[num + 1]);
      setAnswer(null);
    }
  }, [
    answer,
    num,
    totalCount,
    question,
    questions,
    setNum,
    setQuestion,
    setAnswer,
    dispatch
  ]);

  const onDone = useCallback(() => {
    dispatch(setGameOver());
    history.push('/end');
  }, [history, dispatch]);

  const nextBtnMemo = useMemo(() => {
    if (num + 1 === totalCount) {
      return (
        <Button
          onClick={onDone}
          active={true}
          text="Done"
          className="btn-next"
        />
      );
    } else {
      return (
        <Button
          onClick={onNext}
          active={answer}
          text="Next"
          className="btn-next"
        />
      );
    }
  }, [answer, num, onDone, onNext, totalCount]);

  const questionBlockMemo = useMemo(() => {
    return question && <QuestionBlock showAnswer={false} question={question} />;
  }, [question]);

  const questionMemo = useMemo(() => {
    return (
      question && (
        <div>
          <Title text={question.category} />
          <div className="d-flex justify-center">{questionBlockMemo}</div>
          <QuestionNumber num={num + 1} total={totalCount} />
          <AnswerRadio setAnswer={setAnswer} answer={answer} />
          {nextBtnMemo}
        </div>
      )
    );
  }, [question, num, totalCount, answer, nextBtnMemo, questionBlockMemo]);

  return <div className="container">{questionMemo}</div>;
}

export default RoomView;

import React, { useMemo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setInitialize } from 'src/redux/slices/question';
import { useHistory } from 'react-router-dom';
import Button from 'src/components/Button';
import QuestionBlock from 'src/components/QuestionBlock';
import Title from 'src/components/Title';
import 'src/assets/styles/styles.css';

function EndView() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { totalCount, score, questions } = useSelector(
    (state) => state.question
  );

  const questionsMemo = useMemo(() => {
    return (
      questions &&
      questions.map((question, id) => {
        return <QuestionBlock showAnswer={true} question={question} key={id} />;
      })
    );
  }, [questions]);

  const playAgain = useCallback(() => {
    dispatch(setInitialize);
    history.push('/');
  }, [dispatch, history]);

  return (
    <div className="container">
      <div>
        <Title text="Your scored" />
        <Title text={`${score} / ${totalCount}`} />
        <div className="d-grid justify-center">{questionsMemo}</div>
        <br />
        <Button
          onClick={playAgain}
          text="PLAY AGAIN?"
          className="btn-begin"
          active={true}
        />
      </div>
    </div>
  );
}

export default EndView;

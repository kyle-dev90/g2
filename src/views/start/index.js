import React, { useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import Title from 'src/components/Title';
import Subtitle from 'src/components/Subtitle';
import Subtext from 'src/components/Subtext';
import Button from 'src/components/Button';
import Loading from 'src/components/Loading';
import { useDispatch, useSelector } from 'react-redux';
import { getQuestions } from 'src/redux/slices/question';
import 'src/assets/styles/styles.css';

function StartView() {
  const dispatch = useDispatch();

  const { isLoading } = useSelector((state) => state.question);

  useEffect(() => {
    dispatch(getQuestions());
  }, [dispatch]);

  const contentMemo = useMemo(() => {
    return isLoading ? (
      <Loading />
    ) : (
      <div>
        <Title text="Welcome the the Trivia Challenge!" />
        <Subtitle text="You will be presented with 10 True or False questions." />
        <Subtext text="Can you score 100%?" />
        <Link to="/room">
          <Button text="BEGIN" active={true} className="btn-begin" />
        </Link>
      </div>
    );
  }, [isLoading]);

  return <div className="container">{contentMemo}</div>;
}

export default StartView;

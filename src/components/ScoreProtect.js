import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

function ScoreProtect({ children }) {
  const { totalCount, gameOver } = useSelector((state) => state.question);

  if (totalCount === 0 || !gameOver) {
    return <Redirect to="/" />;
  }

  return <>{children}</>;
}

export default ScoreProtect;

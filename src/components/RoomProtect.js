import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

function RoomProtect({ children }) {
  const { totalCount } = useSelector((state) => state.question);

  if (totalCount === 0) {
    return <Redirect to="/" />;
  }

  return <>{children}</>;
}

export default RoomProtect;

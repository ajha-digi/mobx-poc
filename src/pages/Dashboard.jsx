import React from 'react';
import useContextStore from '../hooks/useContextStore';

function Dashboard() {
  const {myName, setMyName} = useContextStore();
  console.log(myName, setMyName);
  return (
    <div>Dashboard</div>
  )
}

export default Dashboard
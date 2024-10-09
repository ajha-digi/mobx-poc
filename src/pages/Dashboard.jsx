import React, {useEffect} from 'react';
import { toJS } from 'mobx';
import useContextStore from '../hooks/useContextStore';
import { observer } from 'mobx-react-lite';
import doubler from '../store';

function Dashboard() {
  useEffect(() => {
    const fetchData = async () => {
        await doubler.fetchTodo("https://jsonplaceholder.typicode.com/todos/1");
    };
    fetchData();
}, []);
  const {myName, setMyName} = useContextStore();
  console.log(myName, setMyName);
  console.log(toJS(doubler.todo));
  return (
    <div>Dashboard</div>
  )
}

export default observer(Dashboard)
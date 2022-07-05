import React from 'react';
import Header from '../components/Header';
import ShowTasks from '../components/ShowTasks';
import { useState, useEffect } from 'react';
// import data from '../helper/starterData';

const Home = () => {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem('tasks')) || []
  );

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  console.log(tasks);
  return (
    <div>
      <Header tasks={tasks} setTasks={setTasks} />
      <ShowTasks />
    </div>
  );
};

export default Home;

import { useState } from 'react';
import data from '../data';

const Home = () => {
  const [courses, setCourse] = useState(data);
  return (
    <>
      <h1>Home</h1>
    </>
  );
};

export default Home;

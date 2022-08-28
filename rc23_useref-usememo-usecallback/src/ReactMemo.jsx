import React, { useState } from 'react';
import Header from './components/Header';
import fs from './assets/fs.png';
import aws from './assets/aws.png';

const ReactMemo = () => {
  const [count, setCount] = React.useState(0);
  const [img, setImg] = useState();

  const increase = () => setCount(count + 1);
  return (
    <div>
      <Header img={img} />
      <p>Count: {count}</p>
      <button onClick={increase}>Increase</button>
      <button onClick={() => setImg(fs)}>FS</button>
      <button onClick={() => setImg(aws)}>AWS</button>
    </div>
  );
};

export default ReactMemo;

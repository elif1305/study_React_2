import React, { useEffect, useRef, useState } from 'react';

const UseRefComponent = () => {
  const [value, setValue] = useState(0);
  //* useRef birinci kullanım
  //* DOM elementlerine ulaşmamızı sağlar
  const inputRef = useRef(null);
  const divRef = useRef();

  //* useRef ikinci kullanım
  //* hafızada yeri değişmeyen bir obje oluşturur
  //   const valueObj = {current: 0}
  const valueRef = useRef(0);
  console.log('valueRef', valueRef);
  useEffect(() => {
    // console.log(document.querySelector('input'));
    // document.querySelector('input').focus();
    // console.log(inputRef.current);
    // inputRef.current.focus();
    // valueRef.current++;
  }, []);

  const ChangeBGColor = () => {
    // divRef.current.style.backgroundColor = 'orange';
    // const colors = [
    //   'orange',
    //   'pink',
    //   'purple',
    //   'red',
    //   '#00ff00',
    //   'rgb(150, 150, 150)',
    // ];
    // const random = Math.trunc(Math.random() * colors.length);
    // console.log(random);
    // divRef.current.style.backgroundColor = colors[random];
    divRef.current.style.backgroundColor = inputRef.current.value;
  };

  const increase = () => {
    setValue(value + 1);
    valueRef.current++;
  };
  console.log(value);

  return (
    <div ref={divRef} className="useref">
      <h2>UseRef Component</h2>
      <input ref={inputRef} type="color" placeholder="Enter text..." />
      <button onClick={ChangeBGColor}>ChangeBGColor</button>
      <button onClick={increase}>increase Value</button>
    </div>
  );
};

export default UseRefComponent;

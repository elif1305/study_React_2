import {useState} from 'react'
import Decrement from './Decrement';
import Increment from './Increment';

function Counter() {
    console.log(window);
    const [counter, setCounter] = useState("0")


    return (
      <div className="App">
       <h1>counter</h1><span>{counter}</span>
       <Decrement counter={counter} setCounter={setCounter}/>
       <Increment counter={counter} setCounter={setCounter}/>
      </div>
      
    );
  }
  
  export default Counter;
  
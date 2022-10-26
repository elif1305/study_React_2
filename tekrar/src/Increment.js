function Increment(props) {
    
    return (
      <div className="App">
       <button onClick={()=>props.setCounter(props.counter+1)}>inc {props.counter} </button>
      </div>
    );
  }
  
  export default Increment;
  
import Elif from "./Elif";

function Decrement(props) {
    const {
        counter, 
        setCounter
    }=props;
    return (
      <div className="App">
       <button onCljsick={()=> setCounter(counter-1)}>dec {counter}</button>
      <Elif asd={counter}/>
      </div>
    );
  }
  
  export default Decrement;
  
  // state: componente aittir
  //prop: baskka bir componente ait degerdr.
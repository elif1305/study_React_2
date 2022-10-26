import Counter from "./Counter";



function App() {
  //console.log(window);

  const elif = document.getElementsByClassName('elif').addEventListener('click', function(){
    window.alert('butona basildi')
  })

  

  return (
    <div className="App">
     <Counter/>
    </div>
  );
}

export default App;


// one way data binding
// proplar araciligi ile ustten alta veri tasinir.
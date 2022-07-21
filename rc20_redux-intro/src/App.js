import './App.css';
import Counter from './components/counter/Counter';
import Todo from './components/todo/Todo';
import {createStore} from "redux"; 
import {provider} from "react-redux";
import reducer from './redux';

function App() {
  const store = createStore(reducer)
  return (
    <div className="app">
      <provider store={store}>
      <Counter />
      {/* <Todo /> */}
      </provider>
    </div>
  );
}

export default App;



// redux : harici bir kutuphanedir.
// global state management kutuphanesidir.
// gecmisi flux ve elm neye dayanir.
// dan abramov tarafindan gelistirilimistir.(reactin gelistiricisi)
// complex statelerin oldugu uygulamalarda tercih edileblir.
//!kurulumu
// npm install redux react-redux
// yarn add redux react-redux


//
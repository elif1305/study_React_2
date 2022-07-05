import AddTaskForm from './AddTaskForm';
import { useState } from 'react';

const Header = ({ tasks, setTasks }) => {
  const [show, setShow] = useState(false);
  const [btnStyle, setBtnStyle] = useState({
    name: 'SHOW ADD TASK BAR',
    bgColor: 'purple',
  });

  //! React, default olarak state'leri hemen degistirmeyebilir.
  //! Ekstra render'lari azaltmak icin state'leri toplu (batch) bir sekilde gunceller.
  //! Bir event handler icerisindeki ardasik state'ler event bitiminde toplu bir
  //! sekilde guncellenmis olur.State'lerin guncelenmesi gelis sirasina gorere yapilir.
  //! Ayni event icerisinde birbirine bagli state'leri kullanirken buna dikkat etmek gerkir.

  //? https://stackoverflow.com/questions/48563650/does-react-keep-the-order-for-state-updates

  const handleShow = () => {
    if (show) {
      setBtnStyle({
        name: 'SHOW ADD TASK BAR',
        bgColor: 'purple',
      });
    } else {
      setBtnStyle({
        name: 'CLOSE ADD TASK BAR',
        bgColor: 'red',
      });
    }
    setShow(!show);
  };
  console.log(show);

  return (
    <header className="header">
      <h1>TASK TRACKER</h1>
      <button
        onClick={handleShow}
        className="btn"
        style={{ backgroundColor: btnStyle.bgColor }}
      >
        {btnStyle.name}
      </button>
      {show && <AddTaskForm tasks={tasks} setTasks={setTasks} />}
    </header>
  );
};

export default Header;

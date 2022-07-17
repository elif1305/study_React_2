import { useState } from 'react';
import StudentList from './components/StudentList';
import { StudentContext } from './context/StudentContext';
import data from './data';

function App() {
  const [students, setStudents] = useState(data);

  const changeColor = (id, color) => {
    setStudents(
      students.map((student) =>
        student.id === id ? { ...student, color: color } : student
      )
    );
  };
  return (
    <div>
      {/* <StudentList students={students} /> */}
      {/* <StudentContext.Provider value={{ students, setStudents }}> */}

      {/*  STEP 2 SARMALLAMA */}
      <StudentContext.Provider value={{ students, changeColor }}>
        <StudentList />
      </StudentContext.Provider>
    </div>
  );
}
export default App;

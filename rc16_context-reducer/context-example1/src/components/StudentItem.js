import { useContext } from 'react';
import { StudentContext } from '../context/StudentContext';

const StudentItem = ({ student }) => {
  const { id, name, age, color, email } = student;

  // const { students, setStudents } = useContext(StudentContext);
  const { changeColor } = useContext(StudentContext);

  // const changeColor = (id, color) => {
  //   setStudents(
  //     students.map((student) =>
  //       student.id === id ? { ...student, color: color } : student
  //     )
  //   );
  // };
  return (
    <div
      style={{
        background: student.color,
        paddingBottom: '2rem',
        paddingTop: '1rem',
        marginBottom: '1rem',
      }}
    >
      <h3>NAME:{name}</h3>
      <h4>EMAIL:{email}</h4>
      <h4>AGE:{age}</h4>
      Color:{' '}
      <input
        type="text"
        name="color"
        value={color}
        onChange={(e) => changeColor(id, e.target.value)}
      />
    </div>
  );
};

export default StudentItem;

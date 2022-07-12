import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Instructors = () => {
  const navigate = useNavigate();

  const [instructors, setInstructors] = useState([]);

  const getInstructors = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => setInstructors(data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getInstructors();
  }, []);

  return (
    <div className="container text-center mt-4">
      <h1>INSTRUCTOR LIST</h1>
      <div className="row justify-content-center g-4">
        {instructors?.map((inst) => {
          const { id, name } = inst;
          return (
            <div
              className="col-sm-12 col-md-6 col-lg-4"
              key={id}
              // onClick={() => navigate(`/instructors/${id}`)}
              //! Relative path
              onClick={() => navigate(`${id}`, { state: inst })}
              //? Absolute path
              // onClick={() => navigate(`/instructors/${id}`, { state: inst })}
              style={{ cursor: 'pointer' }}
            >
              <img
                src={`https://avatars.dicebear.com/v2/avataaars/${id}.svg`}
                alt=""
              />
              <h6>{name}</h6>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Instructors;

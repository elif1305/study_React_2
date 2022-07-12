import { useParams, useNavigate } from 'react-router-dom'; //! usenavigate kullanimi icin step 1
import { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';

const InstructorDetail = () => {
  //! Linkteki parametreyi almak icin useParams Hook'u kullanilabilir.
  const { id } = useParams();

  const navigate = useNavigate();   //! usenavigate kullanimi icin step 2

  //! navigate ile gonderilen state(veriyi) yakalamak icin ise
  //! useLocation Hook'u kullanilabilir.
  // const location = useLocation();
  // const inst = location.state;

  const [inst, setInst] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => setInst(data))
      .catch((err) => console.log(err));
  }, [id]);

  console.log(inst);

  return (
    <div className="container text-center">
      <h3>{inst.name}</h3>
      <img
        className="w-50"
        src={`https://avatars.dicebear.com/v2/avataaars/${id}.svg`}
        alt=""
      />
      <h4>{inst.email}</h4>
      <h4>{inst.phone}</h4>
      <div>
        <button onClick={() => navigate('/')} className="btn btn-success me-2">   //! usenavigate kullanimi icin step 3
          Home
        </button>
        <button onClick={() => navigate(-1)} className="btn btn-warning">   //! usenavigate kullanimi icin step 3
          Go Back
        </button>
      </div>
    </div>
  );
};

export default InstructorDetail;

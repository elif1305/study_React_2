import errorImg from '../img/404.png';

const NotFound = () => {
  return (
    <div className="container text-center mt-4">
      <img className="w-75" src={errorImg} alt="" />
      <div className="mt-4">
        <button className="btn btn-info me-2">Go Home</button>
        <button className="btn btn-warning">Go Back</button>
      </div>
    </div>
  );
};

export default NotFound;

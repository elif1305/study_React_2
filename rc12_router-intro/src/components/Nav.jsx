import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div>
      <ul className="container d-flex justify-content-around mt-4">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/instructors">Instructors</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;

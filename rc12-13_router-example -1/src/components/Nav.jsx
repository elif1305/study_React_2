import logo from '../img/logo.png';
import { Link, NavLink } from 'react-router-dom';

// Burada Navlink in import edilip kullanilmasinin amaci uzerine tiklandiginda aktiflik ozelligi var. 
// bu nedenle avantajli

function Nav() {
  return (
    <nav className="navbar navbar-expand-md navbar-light">
      <div className="container-fluid">

        <Link to="/" className="navbar-brand">     // a tagi yerine link to yu kullan. 
          <img src={logo} alt="" />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">

        
          <ul className="navbar-nav ms-auto mb-2 me-3 mb-lg-0">

            <li className="nav-item">
              <NavLink
                style={({ isActive }) => ({ color: isActive && 'red' })}
                // is active true ise rengi red yap.
                to="/"
                className="nav-link active"
                aria-current="page"
              >
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                style={({ isActive }) => ({ color: isActive && 'red' })}
                to="/instructors"
                className="nav-link"
                aria-current="page"
              >
                Instructors
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                style={({ isActive }) => ({ color: isActive && 'red' })}
                to="/contact"
                className="nav-link"
                aria-current="page"
              >
                Contact
              </NavLink>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;

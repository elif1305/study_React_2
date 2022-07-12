import { Link } from 'react-router-dom';

// burada link import edilmeyip bunlarin yerine a tag i kullnilsaydi router isini yapamazdi. sayfalarin yenilenmeden yani router in calismasi icin link in kullanilmasi gerekir.

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

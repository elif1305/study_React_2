import { Link, Outlet } from 'react-router-dom';

const Paths = () => {
  return (
    <div className="container mt-4">
      <h1>
        Online IT Courses to Become a Qualified IT Professional with Clarusway
      </h1>

      <p className="fs-5">
        Join outstanding companies with rewarding salaries. We offer the
        highest-demand IT skills YOU need for success! CHOOSE THE BEST COURSE
        FOR YOU Upgrade your career with the best online training led by top IT
        experts!
      </p>
      <div>
        <Link className="btn btn-success w-50" to="fullstack">
          Fullstack
        </Link>
        <Link className="btn btn-warning w-50" to="aws">
          Aws-Devops
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default Paths;

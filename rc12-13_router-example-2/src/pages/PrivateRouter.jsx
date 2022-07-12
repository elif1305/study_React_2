import { Outlet, Navigate } from 'react-router-dom';

const PrivateRouter = () => {
  //? Aslinda bu bilgi Global state'den okunacak
  const isAuthenticated = false;

  return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRouter;

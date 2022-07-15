import { Navigate, Outlet } from 'react-router-dom';

const PrivateRouter = () => {
  const user = JSON.parse(sessionStorage.getItem('user'));  // session a gonderdigmiz user bilgisini almak icin, parse edip username kismina aliyoruz.

  return user ? <Outlet /> : <Navigate to="/login" />;   // user varsa outlet i calistir yoksa navigate ile bizi login e yonlendir demek.

  // outlet : privateRouter a gelirken altinda bulunan childlar demek(nasted routers)
};

export default PrivateRouter;

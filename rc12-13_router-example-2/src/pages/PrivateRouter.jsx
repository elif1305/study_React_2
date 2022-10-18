import { Outlet, Navigate } from 'react-router-dom';

const PrivateRouter = () => {
  //? Aslinda bu bilgi Global state'den okunacak
  const isAuthenticated = false;

  return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRouter;

//! NOTE : yukarida link to yerine Navigate kullanildi. cunku link to kullanildiginda 
//! otomatik o istenilen sayfayi acmaz. kullanicinin tiklmasini bekler. yani orada Navigate 
//! yerine link to yazilsaydi login butonunu acardi bizim login e tilkayip login sayfasini acmamiz gerkeitdi.
//! navlink to da link to ile aynidir bu konuda.
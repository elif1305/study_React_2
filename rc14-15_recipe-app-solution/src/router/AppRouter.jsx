import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalStyles } from '../components/globalStyles/Global.styles';
import Navbar from '../components/nav/Navbar';
import About from '../pages/about/About';
import Home from '../pages/home/Home';
import Login from '../pages/login/Login';
import PrivateRouter from './PrivateRouter';
import Detail from '../pages/detail/Detail';
import Register from '../pages/register/Register';
const AppRouter = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />

        <Route path="about" element={<PrivateRouter />}>  
          <Route path="" element={<About />} />
          {/* <Route path="" element={<About />} />  bu outlet tir. */}
           {/* about sayfasi cagrildiginda direk about sayfasina gitme once pivateRouter sayfasina git , user bilgisi varsa (user :true oldugu icin) about e yonlendir, yoksa login e yonlendirir demek. */}
           {/* <Route path="" element={<About />} /> burada path in ici bostur. eger dolu olursa about/x yani pathin icine yazilan sayfaya gider  */}
          
        </Route>

        <Route path="detail" element={<PrivateRouter />}>
          <Route path="" element={<Detail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;

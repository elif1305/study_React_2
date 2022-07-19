import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Navbar from '../components/Navbar';
import Login from '../pages/Login';
import PrivateRouter from './PrivateRouter';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;

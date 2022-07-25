import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MyNavbar from "../components/MyNavbar";
import Login from "../pages/Login";
import Register from "../pages/Register";
import News from "../pages/News";

import PrivateRouter from "./PrivateRouter";

const AppRouter = () => {
  return (
    <Router>
      <MyNavbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/" element={<PrivateRouter />}>
          <Route path="" element={<News />} />
        </Route>
      </Routes>
    </Router>
  );
};
export default AppRouter;

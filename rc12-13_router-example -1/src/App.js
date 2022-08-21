import Footer from './components/Footer';
import Nav from './components/Nav';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Instructors from './pages/Instructors';
import NotFound from './pages/NotFound';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import InstructorDetail from './pages/InstructorDetail';

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />      //! hep gozukmesi gereken comp. oldugu icin routes un disinda
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/instructors" element={<Instructors />} />
          <Route path="/instructors/:id" element={<InstructorDetail />} />  //! step 4 kullan
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />       //! hep gozukmesi gereken comp. oldugu icin routes un disinda
        <Routes></Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

import Footer from './components/Footer';
import Nav from './components/Nav';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Instructors from './pages/Instructors';
import NotFound from './pages/NotFound';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="container">
      <BrowserRouter>
      {/* her sayfada gorunmesini istedigimiz componentleri bu kisma yaziyoruz.(nav, footer vs) */}
        <Nav />  
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="instructors" element={<Instructors />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

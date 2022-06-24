import Card from './components/Card';
import Footer from './components/Footer';
import Header from './components/Header';

import './scss/App.scss';
import data from './data';

function App() {
  return (
    <>
      <Header />
      <Card data={data} /> // bu ornekte tum datayi gonderiyoruz.
      <Footer />
    </>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);




// nav  => ul -> li-> link to
// logo => link to

// nav=> ul -> li -> Navlink
// navlink ve link to icin tiklamak icin link olmali.
// navlink = link to (tek fark navlink te active lik ozelliginin olmasi)

// fonksiyon(event) icinde => useNavigate yani navigate().
// useNavigate ile bilgi de gonderileblir.
// gonderilen bu bilgiler useLocation ile yakalanir.

// useParams : linkte gonderilen parametreyi yakalamak icin 

//Navigate(component olan) : component seviyesinde kullanilir
// or: nasted route larda yonlendirme icin kullanilir.

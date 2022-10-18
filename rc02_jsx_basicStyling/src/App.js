//? React,JSX kullanmaktadir.
//? JSX'de, HTMl elementleri dogrudan JS icerisinde kullanilabilir
//! Componentler, HTML,CSS ve JS kodlarindan meydana gelmiş
//! bir kod parcacigidir.
//! Bir componentin return () kismi ise JSX kodlari icerir.
//! JSX'in kendine gore bazi kurallari vardir. Ornegin bir
//! component eger birden fazla html elementi dondurmesi
//! gerekirse bunlari tek bir container elemani ile sarmayalarak
//! dondurmelidir.container icin div, article, header, <> v.b
//! herhangi bir element kullanilabilir.

import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";   
//? asagida div in icine eklerken , <hea.. diye yazmaya basladiginda 
//? alt kisimda cikiyor ona tikladiginda otomatik olarak importu buraya ekler.

//? App componentinin tanimlanmasi
//! NOTE : div icerisinde olmasaydi asagiya h2 ile yazilan yazi hata verirdi. 
//! yani birden fazla element varsa div ile sarmallanmasi gerekir.
function App() {
  return (  // returnden sonra parantez kullanmayacaksan hemen yanina yazmak gerekiyor. Parantez koyarak alt satira inileblir.
    //!JSX return un asagisi JSX tir.
    //? stillendirme yapilmayacaksa container icin <> kullanilablir.
    //? comoponentlerin siralamasi onemlidir.
    <div>  
      <Header></Header>
      <Content></Content>
      <h1>APP</h1>
      <h2>APP</h2>
      <Footer></Footer>

    </div>
  );
}

export default App;

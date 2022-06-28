//* ========================== HOOKS ====================================
//! Hook'lar fonksiyonel component'ler icerisinde state'leri kullanmamiza
//! olanak saglayan ozel fonksiyonlardir.
//! React 16.8 versiyonu ile gelmistir ve geldikten sonra Class-componentler'in
//! kullanimi cok azaltmistir.

//? React'ta useState(), useEffect(), useContext() gibi bir cok built-in
//? Hook bulunmaktadir. Ayrica custom hook tanimlamak da mumkundur.

//* Hook Kullanim Kurallari:
//* 1. İlk olarak import edilmedlir. import { useState } from "react";
//* 2. Hook'lar ust seviyede kullanilmalidir. Yani Hook'lar bir
//*    dongunun, kosul cumleciginin ve icice fonksiyonlarin icerisinde
//*    kullanilmamalidir.
//* 3. Hook'lar sadece React Fonksiyonel componentleri icerisinde cagrilmalidir.
//*    Normal Javascript fonksiyonlari icerisinde cagrilmamalidir
//*    (Custom hook'lar icerisinde bir hook cagrilabilir)  Custom hook: kendimizin yazdigi hook
//?    https://reactjs.org/docs/hooks-rules.html
//* =====================================================================

import { useState } from 'react';

const UseStateExample = () => {
  //* useState en cok kullanilan Hook'tur.
  //* Bir state'in degisken, dizi ve obje ile kullanilabilmesine olanak saglar
  //? useState hook'u 2 deger dondurur.
  //?  1.si state degiskenidir.
  //?  2.si ise state'i degistirmeye izin veren bir setter metodudur.
  //? useState parametre olarak state'in ilk degerini alir.
  const [count, setCount] = useState(0); //! array destruc., siranin onemi vardir. burada 0 initial degerdir.
  //! count(degisken) : state degiskeni , setCount : methodu (fonksiyon)



  //? objenin icerisinde belli bir yeri degistirmek istiyorsak , key: value yapisine dikkat etmemiz gerekir. 2- once objeyi ac sonra iligli yeri degistir
  const [info, setInfo] = useState({
    name: 'Ella Jhonson',
    email: 'ej@gmail.com',
    age: 28,
  });

  const inc = () => {
    setCount(count + 1);
  };

  const dec = () => {
    setCount(count - 1);
  };

  const incAge = () => {
    // setInfo(info.age + 1);
    // console.log(info.age);  // BU SEKILDE YAPILDIGINDA INFOYU BOZUYOR. 

    // setInfo({ name: 'Ella Jhonson', email: 'ej@gmail.com', age: 28 }); // TAMAMINI DEGISTIRECEKSEK SORUN OLMUYOR. FAKAT SADECE OR: AGE I DEGISTIRECEKSEK ONCE ACMAMIZ GERKIYOR. ASAGIDAKI GIBI

    //? key:Value
    setInfo({ ...info, age: info.age + 1 });  //! ONEMLI COK KULLANILAN BIR YAPI
  };

  console.log(info);
  return (
    <div className="container text-center mt-4">
      <section>
        <h1 className="display-4 text-danger m-4">USESTATE COUNT:{count}</h1>
        <button onClick={inc} className="btn btn-success">
          INC
        </button>
        <button onClick={() => setCount(0)} className="btn btn-dark">
          CLR
        </button>
        <button onClick={dec} className="btn btn-warning">
          DEC
        </button>
      </section>

      <section>
        <h1 className="display-4 text-danger m-4">USESTATE OBJECT</h1>
        <h2>{info.name}</h2>
        <h3>{info.email}</h3>
        <h3>{info.age}</h3>
        <button onClick={incAge} className="btn btn-info">
          inc age
        </button>
      </section>
    </div>
  );
};

export default UseStateExample;

//?========================================================
//?                  USEEFFECT HOOK
//?========================================================
//! UseEffect Hook'u fonksiyonel componentler'te yan etkileri
//! (side effect) gerceklestirmek icin kullanilir.
//! componentDidMount,componentDidUpdate,ve componentWillUnmount
//! metotlarinin bir birlesimi gibi dusunulebilir.

import { useState, useEffect } from 'react';

//! useEffect(() => {
//*   /* ComponentDidMount code */
//! }, []);

//! useEffect(() => {
//*   */ componentDidUpdate code */
//! }, [var1, var2]);

//! useEffect(() => {
//!   return () => {
//*     //* componentWillUnmount code */
//!   };
//! }, []);

//! useEffect(() => {
//*   //* componentDidMount code + componentDidUpdate code */

//!   return () => {
//*     //* componentWillUnmount code */
//!   };
//! }, [var1, var2]);

const UseEffectHook = () => {
  const [count, setCount] = useState(0);

  //! ComponentDidMount'un Useeffect deki karsiligi:   COK KULLANILIR ONEMLI!
  // useEffect(() => {
  //   console.log('Mounted'); //! fetch, asyn-await ,localStorage, setTimeout
  //   setTimeout(() => {
  //     alert('Data Fetched');
  //   }, 3000);
  // },[]);


  // componentDidUpdate tek basina calisacak sekilde yazilamior, bu nedenle didMount ile birlikte yaziliyor. 
  //! ComponentDidMount + componentDidUpdate
  // useEffect(() => {
  //   console.log('Mounted + Updated');
  //   setTimeout(() => {
  //     alert('Data Fetched');
  //   }, 1000);
  // },[count] );    // [] dependicy arrayi silersekte aynisi olur , yani mounted ve updated birlikte calisir. countu takip et degistiginde tekrar calistir demek. count un yanina virgul koyularak baska degerlerde takip edileblir.
                      // dependecny arrayin icine degismini takip etmek istediklerimizi yaziyoruz.


  //! ComponentDidMount + componentWillUnmount
  const fetchData = () => {
    console.log('Data Fetched');
  };

  useEffect(() => {
    //! ComponentDidMount                              COK KULLANILIR ONEMLI!
    const timerId = setInterval(fetchData, 1000);
    console.log('Mounted');
    return () => {
      //! componentWillUnmount                        COK KULLANILIR ONEMLI!
      clearInterval(timerId);
      console.log('Unmounted');
    };
  }, []);

  console.log('rendered');
  return (

    <div className="container text-center mt-4">

      <h1 className="text-danger">USEEFFECT</h1>

      <h3>Count:{count}</h3>

      <button className="btn btn-warning" onClick={() => setCount(count + 1)}>
        INC
      </button>

    </div>
  );
};

export default UseEffectHook;


//! NOTE: mount sadece bir kez calisir.


//* lifecycle in fonksiyonlarda useEffect ile kullanimi:
useEffect(() => {
  first
  //componentDidMount + componentDidUpdate

  return () => {
    //componentWillUnmount
    second
  }
}, [third])  // dependency array(update)

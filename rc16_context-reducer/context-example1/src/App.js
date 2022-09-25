import { useState } from 'react';
import StudentList from './components/StudentList';
import { StudentContext } from './context/StudentContext';
import data from './data';

function App() {
  const [students, setStudents] = useState(data);


  // changeClour fonksoyinunu burda tanimladik asagilara gonderdik
  const changeColor = (id, color) => {
    setStudents(
      students.map((student) =>
        student.id === id ? { ...student, color: color } : student  // burada student(:student) yerine null diyemeyiz, cunku map, filter gibi fonk. illaki birsey return etmelidir.
      )
    );
  };
  return (
    <div>
      {/* <StudentList students={students} /> */}
      {/* <StudentContext.Provider value={{ students, setStudents }}> */}

      {/*  STEP 2 SARMALLAMA */}
      <StudentContext.Provider value={{ students, changeColor }}>
        <StudentList />
      </StudentContext.Provider>
    </div>
  );
}
export default App;


// bir component hem local hem global sekilde veri kullanablir.
// contex ve redux, global state yonetim yontemleridir.

//==========================
//! CONTEXT- REDUCER
//==========================

// CONTEXT:
// glabal alan:
// token
// langaage
// theme
// vs..

// -paylasim yapmak istediigmiz yerleri context ile sarmallama yapiyoruz.
// cantext API reactta varolandir, kuruluma geek yoktur.

// - REDUX: 3rd kutuphane kurulum gerekir. contextin yetersiz kalmasi durumunda genelde redux kullaniliyor.

// - global state ler cogalinca yonetimi contex ile zorlasiyor. 
// 10-15 glabla state varsa redux tercih edilmeli.

// - contex daha pratik

// -neden kullanilmali?
// proplarin dagilimi bazen zorlasiyor
// language gibi token gibi kulalnimlarda contexlerin kullanimi daha kolay olur

// - glabalstate in dezavantaji
// 1-bir componenti glabal state bagmli yaptimgimiz zaman o component glabal state bagimli oalcak , dolayisiyla o componenti alip baska yerlerde kullanamayiz.
// yani yeniden kullanilablirlik acisindan bakildiginda prop mantigi daha iyi 
// reactin temel felsefesi yeniden kullanilabliri componentlere dayanir

// 2- or : theme nin rengi darka gecti buna bagli olarak butun bu statei kulalnan herkese yeniden render gelir
// globalstateleri dikkatli kullanilmazsa eksesif render a sebep olur 

// interview:
// 1- localstate-globalstate kavramlari nedir?
// 2- globalstate nasil yonetilir?
// context ve ya redux ile
// 3- prop drilling nedir ? nasil cozulur?
// prop drilling: proplarin elden ele uzatilmasidir(minibus ornegi)
// cozumu : global state kullanmaktir.
// context API ve REDUX gibi
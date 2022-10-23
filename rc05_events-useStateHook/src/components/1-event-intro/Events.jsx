// * =======================================================
// *                     EVENTS
// * =======================================================

//? ReactJS, Tarayicilar arasi uyumluluk ve performans artisi gibi
//? sebeplerden oturu Sentetik Event olarak adilandirilan Olaylari
//? kullanir. Sentetik Event, aslinda tarayicinin dogal event'larinin
//? bir sarmalayici (Wrapper) arabirimle ortulmesi ile olusur. Bu sayede,
//? React ortaminda kullanilan event'larin bilindik tarayicilarda
//? sorunsuz calismasini saglanir.
//? Ayrinti icin : https://reactjs.org/docs/events.html

const Events = () => {
  let info = 'EVENTS';

  const handleClick = () => {
    alert('Btn Clicked');
  };

  const handleClear = (text) => {
    alert(text);
  };
  const handleChange = (e) => {
    info = 'HOOKS';
    console.log(info);              // Cconsole  a bakildiginda yazi degisrek hooks oluyor. fakat dom a basmiyor.
    console.log(e.target);
  };

  return (
    <div className="container text-center mt-4">
      {/* info bir degisken oldugu icin {} icinde yazilmasi gerekir. */}
      <div className="display-4 text-danger m-4">{info}</div>  
     
     
     {/* ORNEK 1 */}
      {/* onclick prog.ni handleclick i tanimladik(baska bir seyde yazabilirz bize bagli buraya yazilacak 
        isimyuruyerek ), fakat handleclick i tanimlamamaiz gerekiyor. burasi jsx alani. js alanina gecmemiz 
        gerekiyor. yani return un ust kismi. */}
      <button onClick={handleClick} className="btn btn-warning">      
        Click
      </button>


       {/* ORNEK 2 */}
      {/* Eger bir event fonksiyonunun paremetresi olmasi gerkiyorsa
      bu fonksiyon bir arrow fonks. tarafindan  cagrilmalidir. Aksi
      takdirde event fonksiyonu event gerceklesmeden cagirilir */}
      {/* paremetre olmasa da istenilirse hep arrow function yontemi kullanilablir.
      Yukardakinin ezberlenmesine gerek kalmaz */}
      <button
        onClick={() => handleClear('Clear Btn pressed')}
        className="btn btn-dark"
      >
        Clear
      </button>



       {/* ORNEK 3 */}
      <button onClick={(e) => handleChange(e)} className="btn btn-danger">
        Change
      </button>
    </div>
  );
};

export default Events;

//! eger ki eventlara yazacagimiz fonksiyonlarda bir parametre varsa o fonksyionu arrow funct icinde cagir, parametresiz ise dogrudan referansi ile cagir.
//! or : paremetresiz:  
// <button onClick={handleClick} className="btn btn-warning">      
//Click
//</button>
//! parametreli:
//<button
//onClick={() => handleClear('Clear Btn pressed')}
//className="btn btn-dark"
//>
//Clear
//</button>


//! info console'da guncellendigini ancak DOM'da guncellenmedigini gorduk.
//* Bunun sebebi REACT'in aksi belirtilmedigi surece elementleri
//* static olarak kabul etmesinden kaynaklanir.

//* React bunu DOM islemlerini minimize etmek icin yapmaktadir.
//* REACT'a hangi elementleri interaktif oldugu belirtilmelidir.
//! React'a elementlerin interaktif oldugunu belirtmek icin state'ler kullanilir.
//! State, elementlerin degisiklik durumlarini tutan nesnelerdir.
//? ReactJs'de state'leri kullanmak icin  2 ayri Component yapisi bulunmaktadir.
//? 1. Statefull Classes (Class Components).
//? 2. Hooks (Functional Components).

//?Biz su ana kadar uygulamalarimizda Fonksiyonel Component'leri kullandik.
//? Yaygin kullanim Fonksiyonel Component'lerdir.

import btnStyle from './buton.module.css';

//* Eğer CSS'deki class adi kebap-case seklinde yazilmis ise
//* module ile bu class'a erismek icin ornekte goruldugu gibi
//* koseli parentez ile erisim yapilir.Koseli parentez erisimi
//* en garanti yontemdir.

//* ORN:moduleName["class-adi"]

const Buton = ({ btnName }) => {
  return (
    <div className={btnStyle["title"]}>
      <button className={btnStyle["btn-blue"]}>{btnName}</button>
    </div>
  );
};

export default Buton;


//! buton un div ine title classi verildi. card in div ine de title classi verildi. yani ikisine de ayni class ismi verildi.
//! bu duurmda biri digerini ezer. bu sorunun cozulmesi icin :
//? 1- btn.css dosyasinin adini module.css olarak degistir.
//* module.css unique className'ler ürettiği için istenmeyen stil ezilmeleri olmaz.
//? 2- import btnStyle from './buton.module.css'; seklinde import et.
//? 3- className ini  -> className={btnStyle["title"]}  seklinde yaz. 
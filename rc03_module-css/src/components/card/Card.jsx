import Buton from '../buton/Buton';
import cardStyle from './card.module.css';


//* module.css unique className'ler ürettiği için istenmeyen stil ezilmeleri olmaz.

const Card = ({ img, btnName, dil }) => {
  return (
    <div>
      <h1 className={cardStyle['title']}>{dil}</h1>
      <img className={cardStyle['images']} src={img} alt="img" />
      <Buton btnName={btnName} />
    </div>
  );
};

export default Card;


//! buton un div ine title classi verildi. card in div ine de title classi verildi. yani ikisine de ayni class ismi verildi.
//! bu duurmda biri digerini ezer. bu sorunun cozulmesi icin :
//? 1- card.css dosyasinin adini card.module.css olarak degistir. 
//* module.css unique className'ler ürettiği için istenmeyen stil ezilmeleri olmaz.
//? 2- import cardStyle from './card.module.css'; seklinde import et.
//? 3- className ini  -> className={cardStyle['title']}  seklinde yaz. 
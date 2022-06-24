import Buton from '../buton/Buton';
import cardStyle from './card.module.css';


//* module.css unique className'ler ürettiği için istenmeyen
//* stil ezilmeleri olmaz.

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

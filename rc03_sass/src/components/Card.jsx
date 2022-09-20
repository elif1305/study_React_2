import cardStyle from '../scss/card.module.scss';

const Card = ({ data }) => {  // app.js den gonderilen datayi ayni isimle yakalioruz.
  return (
    <div className={cardStyle['container']}>

      {data.map((item) => {

        const { id, job, img, name, comment } = item;    //! key(id) prop u unutma.

        return (                                               // returnden sonra bircok eleman yazilacagi icin parantez acmak gerekir.
          <div className={cardStyle['card']} key={id}>  

            <h1>{name}</h1>
            <h2>{job}</h2>
            <p>{comment}</p>
            <img src={img} alt="img" />

            <div className={cardStyle['btn-container']}>
              <button className={cardStyle['btn-container--small']}>
                Small
              </button>

              <button className={cardStyle['btn-container--large']}>
                Large
              </button>
            </div>

          </div>
        );
      })}

    </div>
  );
};

export default Card;

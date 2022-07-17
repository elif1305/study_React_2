import { MainContainer, Card, Header, Image, Button } from './Cards.style';
import defaultImage from '../../assets/default-image.jpg';
import { useNavigate } from 'react-router-dom';

const Cards = ({ recipes }) => {
  const navigate = useNavigate();
  return (
    <MainContainer wrap="wrap">
      {recipes.map(({ recipe }, index) => (
        <Card key={index}>
          <Header>{recipe.label}</Header>
          {/*  //bazi urunlerin resmi yoksa diye defaultimage yazildi. */}
          <Image src={recipe.image || defaultImage} />  
          <Button
            onClick={() =>
              navigate('detail', { state: recipe, replace: false }) //! objenin key i state olmak zorunda, replace: history i siler. aamc history dolu ise silmek, ordan oraya cok yonlendrme varsa silmek iyi olablir.
            }
          >
            View More
          </Button>
        </Card>
      ))}
    </MainContainer>
  );
};

export default Cards;

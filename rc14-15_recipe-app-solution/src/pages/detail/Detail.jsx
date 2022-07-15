import {
  DetailContainer,
  DetailPart,
  HeaderContainer,
  ImgContainer,
  OtherPart,
  IngContainer,
} from './Detail.style';
import { useLocation } from 'react-router-dom';
import dietSvg from '../../assets/diet.svg';
import defaultImage from '../../assets/default-image.jpg';
const Detail = () => {
  const { state } = useLocation();

  return (
    <DetailContainer>
      <HeaderContainer>
        <h1>{state.label}</h1>
        <img src={dietSvg} alt="" />
      </HeaderContainer>
      <DetailPart wrap="wrap">
        <OtherPart>
          <h4>NUTRIENTS</h4>
          <p>
            {state.totalNutrients.CA.label} :{' '}
            {Math.round(state.totalNutrients.CA.quantity)}
            {state.totalNutrients.CA.unit}
          </p>
          <p>
            {state.totalNutrients.CHOCDF.label} :{' '}
            {Math.round(state.totalNutrients.CHOCDF.quantity)}
            {state.totalNutrients.CHOCDF.unit}
          </p>
          <p>
            {state.totalNutrients.CHOLE.label} :{' '}
            {Math.round(state.totalNutrients.CHOLE.quantity)}
            {state.totalNutrients.CHOLE.unit}
          </p>
          <p>
            {state.totalNutrients.ENERC_KCAL.label} :{' '}
            {Math.round(state.totalNutrients.ENERC_KCAL.quantity)}
            {state.totalNutrients.ENERC_KCAL.unit}
          </p>
          <p>{state.totalWeight}</p>
          <p>Calories: {Math.round(state.calories)}</p>
          {state.digest.slice(0, 4).map((item, index) => (
            <p key={index}>
              {item.label} : {Math.round(item.total)}
            </p>
          ))}
        </OtherPart>

        <ImgContainer>
          <img src={state.image || defaultImage} alt={state.label} />
        </ImgContainer>

        <IngContainer>
          {state.ingredientLines.map((line, index) => (
            <div key={index}>
              <p>
                {index + 1} - {line}
              </p>
              <br />
            </div>
          ))}
        </IngContainer>
      </DetailPart>
    </DetailContainer>
  );
};

export default Detail;

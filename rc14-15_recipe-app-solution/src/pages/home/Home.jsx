import { HeaderText, HomeImg, ImgDiv } from './Home.style';
import axios from 'axios';
import { useState } from 'react';
import Header from '../../components/header/Header';
import Cards from '../../components/cards/Cards';
import homeSvg from '../../assets/home.svg';

//API uzerinden veriyi parentta cekiyoruz. altlara iletiyoruz. Yani burada cekecegiz.

const Home = () => {
  const mealType = ['Breakfast', 'Lunch', 'Dinner', 'Snack', 'Teatime'];
  const [query, setQuery] = useState('egg');
  const [selectedMeal, setSelectedMeal] = useState(mealType[0]);
  const [recipes, setRecipes] = useState(null);

  const APP_ID = process.env.REACT_APP_APP_ID;
  const APP_KEY = process.env.REACT_APP_APP_KEY;

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${selectedMeal}`;


  //! API den ver cekimi;
  const getData = async () => {
    // eger search kisminda veri varsa cek , yoksa kullaniciya uyari ver demek icin if yapisi ile yazildi.
    if (query) {
      try {
        const { data } = await axios.get(url);   // datayi desct. yaptik. yapmasaydik data.data olarakta cagrilablirdi.
        setRecipes(data.hits);
      } catch (error) {
        console.log(error);
      }
    } else {
      alert('Please Enter your meal');
    }
  };

  // console.log(recipes);
  return (
    <div>
      <Header
      //home dan childlara gonderiyoruz
        setQuery={setQuery}
        setSelectedMeal={setSelectedMeal}
        mealType={mealType}
        getData={getData}
      />
      {!recipes && (   // recipe yoksa bize bi resim dondur
        <ImgDiv>
          <HomeImg src={homeSvg} />
        </ImgDiv>
      )}

      {recipes?.length === 0 && (           // aranan deger yoksa
        <HeaderText>The Food can not be found</HeaderText>
      )}

      {recipes?.length > 0 && <Cards recipes={recipes} />}
    </div>
  );
};

export default Home;

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


  //? api key ve id yyi direk burada acik(dierk olarak)kullanmak uygun degildir(herkese acik bi sekilde, githuba gondermek uygun degildir) . bunlari gizleyerek gondermek icin:
  // 1- proje dosyasinda new file ile yeni bir dosya ac
  // 2- ".env" adinda yeni belgeyi olustur.(ana dizinde olacak, gitignore ile ayni dizinde olmali ONEMLI !)
  // 3- dosya icine :
  // REACT_APP_APP_KEY = sdfsdfsdfs
  // REACT_APP_APP_ID = sdfsdfsdfds345354
  // 4- home dosyasine geri gel. 
  //   const APP_ID = process.env.REACT_APP_APP_ID;
  // const APP_KEY = process.env.REACT_APP_APP_KEY;
  // olarak tanimla.
  //! boyle bir env dosyasi yaptiysan projeyi durdurup ctrl+c yeniden yarn start diyerek baslatmak gerekir.env dosyasi icinde bir degisiklik yaparsan projeyi yine durdurup yeniden baslatmak gerekir.
  // env dosyalari default olarak gitignora eklenmis durumda olur. kontrol et yoksa #misc in altindaki yere .env olarak ekle.
  //* netfly dan deploy ederken .env dosyasini gormez cunku gitignoreun icinde. bunun ucun netlfydan ayarinin yapilmasi lazim.
  // 1- projeyi deploy et
  // 2- projenin ustune tikla
  // 3- site settings e tikla
  // 4- sol taraftaki yerden build & deploy a tikla.
  // 5- altinda acilan yerden Environment a tikla.
  // 6- acilan yerden Envirenment variables yerinde edit e tikla ve .env icinde olan variables lari buraya gir.



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



      //! recipe in yanindaki soru isareti null hatasindan kurtarmak icin. yani eger recipe varsa demek .ONEMLI
      {recipes?.length === 0 && (           // aranan deger yoksa
        <HeaderText>The Food can not be found</HeaderText>
      )}

      {recipes?.length > 0 && <Cards recipes={recipes} />}
    </div>
  );
};

export default Home;

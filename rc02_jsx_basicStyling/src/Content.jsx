//* JSX'de stillendirme farklli sekillerde yapilabilr.
//* 1-) Harici CSS sayfalari ile (index.css, app.css v.b)
//* 2-) Inline stillendirme ile (style = {{color:"red"}})
//* 3-) Local veya global degiskenler ile.

//! NOTLAR:
//* Stillendirme icin property-value(object) yapisi kullanilir.
//* property isimlerinde camelCase kullanimalidir.
//* class isimleri icin className kullanilir.
//* Material UI, Styled Component, Sass, Bootstrap v.b harici kutuphaneler kullanilabilir.
//?<img src="./hkj/jhk" alt="" /> // bu sekilde bir erisim olmuyor. yol verilmesi lazim.
//? // ? Dahili bir resim eklemek icin import yapmak gereklidir. Dahili degilse, or: internetten direk aliniyorsa, https uzantisi src icine koyulur.



import a from './img/a.jpg';
import React from 'react';
import './../src/Content.css'

const Content = () => {
const imgStyle = {
    width: '300px',
    display: 'block'
    
}

  return (
    <div className='content'>
        {/* inline style */}
        <h2 style={{color: 'red'}}>React JS</h2>
        // camelCase ile css elementlerini yaz.
        <p style={{ backgroundColor: 'lightgreen' }} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora illum iusto molestiae, perferendis hic dolore.</p>
        <p className='par1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus perspiciatis consequuntur facere ullam praesentium fuga eos totam quas quidem magni? Autem harum saepe expedita illum sed, voluptatem doloribus dolor nostrum?</p>
        <img 
        style={imgStyle}
        src="https://cdn.pixabay.com/photo/2017/02/15/13/40/tulips-2068692__340.jpg" alt="img1" />
        {/* <img src={a} alt="img2" /> */}
        <img src={a} alt="img2" />  
        {/* img nin import edilmis olarak eklenmis hali */}
    </div>
  )
}

export default Content;
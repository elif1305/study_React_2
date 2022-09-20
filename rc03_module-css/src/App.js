import Card from './components/card/Card';
import data from './util/data';  // verinin cekilmesi

function App() {
  // console.log(data);
  return (
    <>
      {data.map((item) => {             // return un asagisi jsx tir. jsx e js kodu yazacaksak suslu parantez acilir.
        //!Destr
        const { id, img, btnName, dil } = item;

        // <Card data={data} />  eger tamamini gondermek isteseydik bu sekilde yazabilirdik
        return <Card key={id} img={img} btnName={btnName} dil={dil} />;  // key verilmesiini react istiyor. dif arkada calisirken farkliliklari daha ayirt etmek icin her bir karta uniqe key vermemizi istiyor. iterasyonlarda key verilmesi gerekir.
        // key asagiya yani card a iletilmez. props degildir. sadece react icin verilmis bir keydir.
     })} 
    </>
  );
}

export default App;


// bazi onemli bilgileri parentten alip asagilara iletmek daha mantiklidir.
//! veriler genelde yukardan(parent) cekilir.
// or: tema bilgileri
import AddTutorial from '../components/AddTutorial';
import TutorialList from '../components/TutorialList';
import axios from 'axios';
import { useState, useEffect } from 'react';

const Home = () => {
  const [tutorials, setTutorials] = useState();  //! hooklar yukari kisma yazilir.  //*(3) 

  const url = 'https://tutorials-api-cw.herokuapp.com/api/tutorials';    //*(1)

  //! GET (Read)
  const getTutorials = async () => {    //*(2)
    try {      // Veriyi cekebliyorsan cek cekemiyorsan hata goster demek. (ONEMLI! KULLAN )
      const { data } = await axios.get(url);  // datanin parantez icinde yazilmasinin nedeni: ham datayi almak icin.array olarak ulasmak istedigimiz ham data verisi yukaridaki url ile cektigimiz datanin icindeki data isimli arrrayin icinde oldugu icin, parantez icinde yazarak destrc. yaptik ve [data] ya ulastik. veriyi aldik tamam ama guncel olarak degisebilecek bise oldugu icin state e atilmasi gerekir. 2. adim bu datayi state e atmak.
      setTutorials(data);
    } catch (error) {
      console.log(error);
    }
  };

  //? Sadece Component mount oldugunda istek yapar
  useEffect(() => {    //*(4)    // surekli istek yapmasini engellemek icin bunu yapiyoruz.EZBERLE ONEMLI
    getTutorials();
  }, []);  //! buradai array in bos olmasi onemli.

  console.log(tutorials);

  //! POST (Create)
  const addTutorial = async (tutorial) => {   // burada fonksiyon yaziyoruz, kullanacagimiz sayfalara gonderiyorz ve gonderdigimiz alt sayfalarda bu fonksiyonu cagirarak kullaniyoruz.
    try {
      await axios.post(url, tutorial);  // hem url hem gonderilmek istenilen veri giriliyor.
    } catch (error) {
      console.log(error);
    }
    getTutorials();  // veri gonderildikten sonra apiden veriyi yeniden cekmesi icin yani tutoriallist i guncel tutmak icin .
  };

  //! DELETE (delete)
  const deleteTutorial = async (id) => {
    try {
      await axios.delete(`${url}/${id}`);
    } catch (error) {
      console.log(error);
    }
    getTutorials();  // silme islemi yapildiktan sonra listede guncelleme yapmak icin
  };

  //! Update (PUT:Whole Update,PATCH :Partially Update)
  const editTutorial = async (id, title, desc) => {
    const filtered = tutorials
      .filter((tutor) => tutor.id === id)  // degisiklik yapmak istedigimiz veriyi seciyor, id si ile
      .map(() => ({ title: title, description: desc }));  // sectigimiz veride guncelleme / degisiklik yapmak icin

    console.log(filtered);
    try {
      await axios.put(`${url}/${id}`, filtered[0]);   //degisikligi yapmak icin bize id lazim, yukaridaki filter bize array dondurdugu icin [0] yaparak ulasiyoruz
    } catch (error) {
      console.log(error);
    }
    getTutorials();
  };

  return (
    <>
      <AddTutorial addTutorial={addTutorial} />
      <TutorialList
        tutorials={tutorials}  // tutorials datasini tutorialsListe 'tutorials' key i olarak props olarak gonderiyoruz. bu sekilde gonderiyorsak yakalrken {} icinde (destc) yaparak yakalamak gerekir. yani : const TutorialList = ( {tutorials} ) 
        // kisa yolu => {...tutorials} bu sekilde gonderirsek yakalarken {} kullanimina gerek yoktur. const TutorialList = ( tutorials )   seklinde yakalanabilir.
        deleteTutorial={deleteTutorial}
        editTutorial={editTutorial}
      />
    </>
  );
};

export default Home;

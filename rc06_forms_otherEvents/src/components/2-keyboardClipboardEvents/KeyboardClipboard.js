import { useState } from 'react';

const KeyboardClipboard = () => {
  const [inputValue, setInputValue] = useState('');



  const handleKeyDown = (e) => {
    // console.log(e.keyCode);
    e.target.value = e.target.value.toUpperCase();
    e.keyCode === 13 && alert('Entera basildi');    //shorcut yontemi ile entera basildiginda alert ver. saol taraf dogru ise sag tarai calistir.
  };



  const handleAreaPaste = (e) => {
    e.target.value += e.clipboardData.getData('text').toLowerCase();
    e.target.style.border = '3px solid red';
    e.target.style.backgroundColor = 'lightgreen';
    e.preventDefault();  //hem browserdan gelen hem bizim kopyaladigimizi(yani 2 kez yapistir yapmamasi icin) yapmamasi icin default ozelligini kaldirdik.
  };


  
  const handleAreaChange = (e) => {
    if (!e.target.value) {   // event target value yoksa asagidaki kodu yap demek.textareayi eski haline cevirmek icin
      e.target.style.border = '1px solid black';
      e.target.style.backgroundColor = 'transparent';
    }
  };

  return (
    <div className="container text-center">


      <h2>CLIPBOARD EVENTS </h2>


      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}   // yazacagimiz kod kisa oldugu icin buraya da yazabilirz. uzunsa setinputvalue yu yukarda tanimlayabilirz.
        onKeyDown={handleKeyDown}
      />


      <p onCopy={() => alert('Dikkat Kopyalandi')} className="text-start m-4">
        {inputValue}
      </p>


      <textarea
        name="area"
        id="area"
        cols="50"
        rows="10"
        onPaste={handleAreaPaste}
        onChange={handleAreaChange}
      ></textarea>


    </div>
  );
};

export default KeyboardClipboard;

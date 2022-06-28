//* ============================ CLASS COMPONENTS AND STATE ============================
//* React'da Class-Component'ler ES6 class yapisina dayanmaktadir.
//* Cok fazla boilerplate kod icermektedir.
//* Ancak Class-Component'ler React'da state'leri barindiran ilk component yapisidir.
//* State, aslinda bir component hakkinda bilgi tutan bir React nesnesidir.
//* Bir componentin state'i zaman icerisinde degisebilir.
//* State her degistiginde React bu componenti yeninden render eder.
//* Bir state'e baslangıc degeri constructor metodu icersinde this.state ile atanabilir
//* constructor'in disinda state, setState() metodu ile degistilebilir.
//* ====================================================================================

// rafce ( fonctionel component) yani suana kadar hep functional component yapildi.
// simdi rce rc... kullanilacak.


import React, { Component } from 'react';

// kisa yolu ; rconst
class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: props.count || 0,  // app.js de verdigimiz baslangic degerini almak icin. prop.count ta deger varsa al yoksa 0 al.
    };
    //* handleInc metodunun Counter class'ina baglanmasi
    this.handleInc = this.handleInc.bind(this);
  }

  //* calismasi icin constructora baglanmasi gerekir.Yukarda baglandi.(arrow ile tanimlanirsa buna gerek kalmaz.)
  handleInc() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  //! arrow funct ile tanimlarsak , otomatik baglama (bind) yapar, bizim manuel olarak baglama(bind) yapmamiza gerek kalmaz.
  handleDec = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  //! Yazmis oldugumuz metotlar default olarak classa baglanmaz.
  //! Ancak, React built-in fonksiyonlari baglidir.

  //* Bunun icin metotlarimizi ya constructor icerisinde baglamaliyiz yada otomatik baglamayi saglayan arrow fonksiyonlarini kullanmaliyiz.

  render() {
    return (
      <div className="container text-center mt-4">
        <h1 className="display-4 text-danger m-4">COUNT:{this.state.count}</h1>
        <button onClick={this.handleInc} className="btn btn-success">
          INC
        </button>

        <button onClick={this.handleDec} className="btn btn-warning">
          DEC
        </button>
      </div>
    );
  }
}

export default Counter;

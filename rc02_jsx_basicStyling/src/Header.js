function Header(){   // 3 sekilde de fonk yazilablir.
    return(
        <header>
            <h1>Header</h1>
        </header>
    )

}

export default Header;    //!MUTLAKA YAZILMALI UNUTMA, VE APP.JS E GIDIP IMPORT YAPMAYI UNUTMA


//* Harici bir dosya icersinde olusturulan bir component
//* export default ile proje icerisinde herhangi bir yerde
//* kullanima kullanima acimiş olur. Kullanmak icin hedef
//* dosyada import .... from "./..." ile import yapmak yeterlidir.


//! emmetler cikmiyorsa : sol alttaki carka tikla -> settings -> arama yerine emmet yaz -> asagiya dogru in emmet includes languages yazan yerde item a javascript , value ye javascriptreact yaz ve kapat.
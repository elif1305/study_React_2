// redux in icinde yani farkli bir klasorun icinde oldugu icin index.jsx olmasi sorun degildir.
// reducser.jsx te yazilablirdi. ama index.jsx verilirse import kismi daha kolay oluyor . bu nedenle bu sekilde kullanimi da vardir.

import { INCREMENT, DECREMENT, RESET } from "../types/counterTypes";

const initialState = {
    counter:  0,
};


// Reducer fonksiyonu illaki bir state dondurur.  her zaman bir return e ihtiyaci vardir..
const counterReducer = (state=initialState, action) => {

    switch (action.type) {
        //case "INCREMENT":   //? icerigi sabit olan stringler geellikle buyuk harfle yazilir.
        case INCREMENT:
            return{counter : state.counter + 1}   // state in icerisindeki counteri oku ve o anki degerini 1 arttir.
        //case "DECREMENT":
        case DECREMENT:  // DEGISKEN OLARAK YAZIYORUZ. TYPES IN ORDA HEPSINI TOPLADIK .
            return{counter : state.counter - 1}
        // case "RESET":
        case RESET:
            return{counter : 0}
        default:
            return state;   // buraya break yazilamaz. cunku reducer fonk. her halukarda bir state dondurmeli. eger bir degisiklik yoksa kendisini geri dondururuz.
    }
};

export default counterReducer;
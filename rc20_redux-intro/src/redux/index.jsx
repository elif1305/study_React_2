// // redux in icinde yani farkli bir klasorun icinde oldugu icin index.jsx olmasi sorun degildir.
// // reducser.jsx te yazilablirdi. ama index.jsx verilirse import kismi daha kolay oluyor . bu nedenle bu sekilde kullanimi da vardir.

// const initialState = {
//     counter:  0,
// };


// // Reducer fonksiyonu illaki bir state dondurur.  her zaman bir return e ihtiyaci vardir..
// const reducer = (state=initialState, action) => {

//     switch (action.type) {
//         //case "INCREMENT":   //? icerigi sabit olan stringler geellikle buyuk harfle yazilir.
//         case INCREMENT:
//             return{counter : state.counter + 1}   // state in icerisindeki counteri oku ve o anki degerini 1 arttir.
//         //case "DECREMENT":
//         case DECREMENT:  // DEGISKEN OLARAK YAZIYORUZ. TYPES IN ORDA HEPSINI TOPLADIK .
//             return{counter : state.counter - 1}
//         // case "RESET":
//         case RESET:
//             return{counter : 0}
//         default:
//             return state;   // buraya break yazilamaz. cunku reducer fonk. her halukarda bir state dondurmeli. eger bir degisiklik yoksa kendisini geri dondururuz.
//     }
// };

// export default reducer;


import {createStore, combineReducers} from "redux";
import counterReducer from "./reducers/counterReducer";
import todoReducer from "./reducers/todoReducer";


// her zaman tek bir store vardir, bir cok reducer olablir fakar butun bu reducerlar tek bir store da toplanir.
// combine reducer bu islemi yapar. yani reducerlari birlestirir.
// genelde rootReducer ismi verilir.
//! step 1 " combine reducer altinda reducerlari toplar"
const rootReducer = combineReducers({
    counterReducer: counterReducer,
    todoReducer: todoReducer,
});

// daha fazla reducuer da olablirdir. bizim ornegimimzde 2 tane reducer var.
//! step 2 "birlesmis reducrdan tek bir store olustur"
export const getStore = () => {
    const store = createStore(rootReducer);
    return store;
}
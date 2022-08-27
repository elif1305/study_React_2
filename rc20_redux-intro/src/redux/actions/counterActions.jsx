// zorunu degil bestpractisedir
//dispatch icindekileri fonksiyon olarak yaziyoruz.

export const increment = () => {
    return { type: INCREMENT };
};

export const decrement = () => {
    return { type: DECREMENT };
};


// return kullanmadan yazilis sekli;
export const reset = () => {
     ({type: RESET}) ;
};
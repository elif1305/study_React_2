import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin:0;
    font-family: 'Girassol',cursive;
  }
  body{
    font-size: 1.5rem;
    background: ${({ theme }) => theme.colors.mainColor}
  }

`;


// font- family yi html e eklemek daha hizli olacaktir. yani disardan bir font eklemek istedigimizde bunu @import ile css e eklemek yerine html e link olarak eklemek daha hizli olacaktir.

//font family yildiz a * verilmeli. cunku body ye gore daha kapsamli. body e verilirse child lara ulasamiyor.
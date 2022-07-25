# Redux Nedir, Nasil Uygulanir Projesi

## `Kurulum`

```
npm install veya yarn install
```

## `Kullanilan Kutuphaneler`

- `redux` :
  State management kutuphanesidir. React'ten bagimsiz olarak baska platformlar ile de kullanilabilir.
- `redux-thunk` : Redux ile birlikte thunk teknolojisini kullanabilmek icin kullanilan kutuphanedir.
- `react-redux` : Redux kutuphanesi ile olusturulan `store` ile React'in haberlesebilmesi icin kullanilan kutuphanedir.
- `axios` : API istekleri yapabilmek icin kullanilan kutuphanedir.
- `react-router-dom` : Proje icerisinde farkli URL'ler olusturup bunlar arasinda gezinebilmeyi saglayan kutuphanedir.

- `@mui/material-ui`
- `@emotion/react`
- `@emotion/styled`
- `firebase`

## `Kullanilacak API`:

- https://newsapi.org/

- URL:
  const url =
  "https://newsapi.org/v2/everything?" +
  "q=Apple&" +
  "from=2022-04-18&" +
  "sortBy=popularity&" +
  "apiKey=1a1a999e0d7240a6bd2dead87bcca78e";

## `Kullanilacak Araclar`

- `Redux Dev Tools` : Chrome uzerinde calisan ve global state uzerinde yapilan tum degisikliklerin takip edilmesini saglayan tarayici uzantisidir. Indirmek icin [tiklayiniz.](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?utm_source=chrome-ntp-icon)`

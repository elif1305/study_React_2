import AppRouter from './router/AppRouter';
import theme from './components/globalStyles/theme';  //!theme kullanimi icin STEP 1
import { ThemeProvider } from 'styled-components';   //!theme kullanimi icin STEP 2

function App() {
  return (
    <ThemeProvider theme={theme}>   //!theme kullanimi icin STEP 3 : prop olarak theme in verilmesi gerekir.
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;

import { deepPurple, indigo, green } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';

const theme = createTheme({
  palette: {
    primary: {
      main: green[500],
    },
  }, 
});

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        {/* <LoginPage /> */}
        <SignUpPage />
      </ThemeProvider> 
    </div>
  );
}
export default App;


//! formik: formlarin yonetimi icin
//! yup: formlarin velidasyonu icin
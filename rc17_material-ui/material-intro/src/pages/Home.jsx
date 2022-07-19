import Navbar from '../components/AppBarComp';
import CardsGrid from '../components/CardsGrid';
import TextFieldComp from '../components/TextFieldComp';
import TypoButtons from '../components/TypoButtons';
import { createTheme, ThemeProvider } from '@mui/material';
import { deepPurple, teal } from '@mui/material/colors';
import MakeStylesComp from '../components/MakeStylesComp';

const Home = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: teal[400],
      },
      secondary: {
        main: deepPurple[500],
      },
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar />
        <TypoButtons />
        <TextFieldComp />
        <CardsGrid />
        <MakeStylesComp />
      </ThemeProvider>
    </>
  );
};

export default Home;

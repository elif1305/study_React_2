import { Button, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';



// sx yokken kullanilan bir yontemdi.
//makeStyles i kullanmak icin:
// yarn add @mui/styles
//makeStyle hook unu import et 
// degiskene ata ve kullan

const useStyles = makeStyles({
  btn: {
    background: 'linear-gradient( 45deg, lightblue, blue)',
    border: 0,
    borderRadius: '1rem',
    color: 'red',
    padding: '5px 30px',
    '&:hover': {
      opacity: '0.5',
    },
  },
  div: {
    border: '1px solid red',
  },
});

const MakeStylesComp = () => {
  const classes = useStyles();
  return (
    <Box sx={{ textAlign: 'center', mt: 2 }}>
      <Button className={classes.btn} variant="contained">
        Click
      </Button>
    </Box>
  );
};

export default MakeStylesComp;

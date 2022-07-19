import { Typography, Container, Button, Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';

const TypoButtons = () => {
  return (
    <div>
      <Container maxWidth="md">
        <Typography
          variant="h4"
          component="h6"
          align="center"
          color="error"
          sx={{
            background: '#eee',
            mt: 4,
            border: '1px solid green',
          }}
        >
          Typography, Buttons, Container, Box
        </Typography>

        <Typography variant="body2" align="justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          deserunt atque fugiat ratione blanditiis earum sed tempora quas
          voluptas laudantium molestias enim omnis exercitationem culpa labore,
          velit facilis nobis alias!
        </Typography>

        <Typography
          variant="button"
          align="justify"
          color="secondary"
          sx={{ display: 'inline-block', mt: 4 }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          deserunt atque fugiat ratione blanditiis earum sed tempora quas
          voluptas laudantium molestias enim omnis exercitationem culpa labore,
          velit facilis nobis alias!
        </Typography>
      </Container>

      <Container maxWidth="md">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            // justifyContent: 'center',
            // alignItems: 'center',
            gap: 2,
            mt: 4,
          }}
        >
          <Button variant="contained" color="secondary">
            CLICK
          </Button>
          <Button variant="outlined" color="success" startIcon={<SendIcon />}>
            SEND
          </Button>
          <Button variant="contained" color="error" endIcon={<DeleteIcon />}>
            DELETE
          </Button>
        </Box>
      </Container>
    </div>
  );
};

export default TypoButtons;

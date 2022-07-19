import { Typography, Container, Button, Box, TextField } from '@mui/material';

const TextFieldComp = () => {
  let error = false;
  return (
    <>
      <Container maxWidth="xs">
        <Typography variant="h4" align="center" mt={4} color="error">
          Texfield
        </Typography>
        <Box
          sx={{
            mt: 4,
            textAlign: 'center',
          }}
        >
          <TextField
            margin="normal"
            id="email"
            label="Email"
            type="email"
            placeholder="Enter your Email"
            fullWidth
            error={error}
            helperText={error && 'Incorrect Email Format'}
          />

          <TextField
            margin="normal"
            id="password"
            label="Password"
            type="password"
            placeholder="Enter your Password"
            fullWidth
            error={error}
            helperText={error && 'Incorrect Password Format'}
          />
          <Button type="submit" variant="contained" sx={{ mt: 3 }}>
            Submit
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default TextFieldComp;

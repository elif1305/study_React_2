import { useEffect, useState } from "react";
import {
  Container,
  Box,
  Avatar,
  Typography,
  Grid,
  TextField,
  Button,
} from "@mui/material";

import { login, loginWithGoogle } from "../utils/firebaseUtil";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


const Login = () => {
  const navigate = useNavigate();
  const { currentUser } = useSelector(state => state.auth)
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleGoogleSingIn = () => {
    loginWithGoogle();
  };

  useEffect(() => {
    if (currentUser) {
      navigate("/");
    }
  }, [currentUser, navigate]);

  const handleLogin = () => {
    login(email, password)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          height: "100vh",
          marginTop: "20vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar
          alt="avatar_img"
          src="https://cdn.pixabay.com/photo/2017/03/21/02/00/user-2160923_960_720.png"
          sx={{ width: 156, height: 156 }}
        />
        <Typography variant="h4" component="h1" sx={{ m: 4 }}>
          Login
        </Typography>

        <form>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <TextField
                id="email"
                label="email"
                name="email"
                variant="outlined"
                type="email"
                value={email ?? ""}
                autoComplete="on"
                onChange={(e) => setEmail(e.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="password"
                label="password"
                name="password"
                variant="outlined"
                type="password"
                autoComplete="current-password"
                value={password ?? ""}
                onChange={(e) => setPassword(e.target.value)}
                fullWidth
              />
            </Grid>

            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                onClick={handleLogin}
                fullWidth
              >
                Login
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="secondary"
                onClick={handleGoogleSingIn}
                fullWidth
              >
                CONTINUE WITH GOOGLE
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Container>
  );
};

export default Login;

import React from "react";
import Box from "@mui/material/Box";
import { Link, useNavigate } from "react-router-dom";

import TextField from "@mui/material/TextField";
import {
  Alert,
  Backdrop,
  Button,
  Checkbox,
  CircularProgress,
  Container,
  FormControlLabel,
  Grid,
  ListItem,
  Slide,
  Snackbar,
  Typography,
} from "@mui/material";
import LoginLogic from "./LoginLogic";

function TransitionLeft(props) {
  return <Slide {...props} direction="left" />;
}

const LoginDesign = () => {
  let {
    loginAPIcall,
    errorTextEmail,
    email,
    setEmail,
    errorTextPass,
    setErrorTextPass,
    password,
    setPassword,
    loader,alertMessages,
    setAlertMessages
  } = LoginLogic()
  const navigate = useNavigate()
  return (
    <>
    <Backdrop
        sx={{ color: "#2a64b5", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loader}
      >
        <CircularProgress size={130} thickness={2} color="inherit" />
      </Backdrop>
      <Snackbar
              open={alertMessages}
              autoHideDuration={6000}
              onClose={()=>{
                setAlertMessages(false)}}
              style={{backgroundColor:'white'}}
              TransitionComponent={TransitionLeft}
            >
              <Alert
                onClose={()=>{
                  setAlertMessages(false)}}
                severity="success"
                sx={{
                  width: "100%",
                  backgroundColor: "#24f05e",
                  // color: "#24f05e",
                }}
              >
                User logged in successfully
              </Alert>
            </Snackbar>
    {/* Display the image only for small screens */}
      <ListItem sx={{ display: { xs: "flex", md: "none" } }}>
        <Box
          component="img"
          sx={{
            height: "100vh",
            width: "100%", // Set image width to 100% to make it responsive
            m: 0,
            p: 0,
            backgroundImage: "/pexels-alex-conchillos-3745234.jpg",
            backgroundSize: "cover",
          }}
          src="/pexels-alex-conchillos-3745234.jpg"
        />
      </ListItem>
      <ListItem sx={{ display: "flex", justifyContent: "end", m: 0, p: 0 }}>
        {/* Display the image only for larger screens */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            justifyContent: "flex-start",
            m: 0,
            p: 0,
          }}
        >
          <Box
            component="img"
            sx={{
              height: "100vh",
              width: 500, // Set image width to 100% to make it responsive
              m: 0,
              p: 0,
              backgroundImage: "/pexels-alex-conchillos-3745234.jpg",
              backgroundSize: "cover", // Ensure the image covers the container
            }}
            src="/pexels-alex-conchillos-3745234.jpg"
            alt="The house from the offer."
          />
        </Box>
        <Container component="main" maxWidth="xs">
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            <Typography component="h1" variant="b">
              Login
            </Typography>
            <Box
            component="img"
            sx={{
              width:50,
              height:70,
              backgroundImage: "/logo.4d6033c9.svg",mt: 5
            }}
            src="/logo.4d6033c9.svg"
            alt="The house from the offer."
          />
            <Typography component="h2" variant="b" sx={{ mt: 5 }}>
              Filed Hero
            </Typography>
            <Box component="form" noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value={email}
                onChange={(e)=>{
                  setEmail(e.target.value)
                }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(e)=>{
                  setPassword(e.target.value)
                }}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <ListItem
                sx={{ display: "flex", justifyContent: "space-between" }}
              >
                <Button
                  // type="submit"
                  // fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  onClick={()=>{
                    loginAPIcall()
                  }}
                >
                  Login
                </Button>
                <Button type="submit" sx={{ mt: 3, mb: 2 }}>
                  Reset
                </Button>
              </ListItem>
              <Grid container>
                <ListItem
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-end",
                  }}
                >
                  <Grid item xs>
                    <Link to={"/forgot-Password"} variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item sx={{mt:3}}>
                  Don't have an account? {" "}
                    <Link to={"/register"} variant="body2">
                      {"Sign Up"}
                    </Link>
                  </Grid>
                </ListItem>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ListItem>
    </>
  );
};

export default LoginDesign;

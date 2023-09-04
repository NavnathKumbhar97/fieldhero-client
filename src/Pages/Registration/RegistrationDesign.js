import React from "react";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

import TextField from "@mui/material/TextField";
import {
  Alert,
  Backdrop,
  Button,
  Checkbox,
  CircularProgress,
  Container,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  ListItem,
  Radio,
  RadioGroup,
  Slide,
  Snackbar,
  Typography,
} from "@mui/material";
import RegistrationLogic from "./RegistrationLogic";

function TransitionLeft(props) {
  return <Slide {...props} direction="left" />;
}


const RegistrationDesign = () => {
  let { setRegistrationForm, registerAPI,registerForm,loader,alertMessages,
    setAlertMessages } = RegistrationLogic();
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
                Invalid Email or Password 
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
            backgroundSize: "cover", // Ensure the image covers the container
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
              Registration
            </Typography>
            <Box
              component="img"
              sx={{
                width: 50,
                height: 70,
                backgroundImage: "/logo.4d6033c9.svg",
                mt: 3,
              }}
              src="/logo.4d6033c9.svg"
              alt="The house from the offer."
            />
            <Typography component="h2" variant="b" sx={{ mt: 3 }}>
              Filed Hero
            </Typography>
            <Box component="form" noValidate sx={{ mt: 2,mb:2 }}>
              <Divider/>
              <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">
                  Are you ?
                </FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel
                    value="Individual"
                    control={<Radio />}
                    label="Individual"
                  />
                  <FormControlLabel
                    value="Organization"
                    control={<Radio />}
                    label="Organization"
                  />
                </RadioGroup>
              </FormControl>

              <TextField
                margin="normal"
                required
                fullWidth
                id="fullName"
                label="Full Name"
                name="fullName"
                autoComplete="fullName"
                value={registerForm.fullName}
                onChange={(e)=>{
                  setRegistrationForm({...registerForm,fullName:e.target.value})
                }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={registerForm.email}
                onChange={(e)=>{
                  setRegistrationForm({...registerForm,email:e.target.value})
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
                value={registerForm.passwordHash}
                onChange={(e)=>{
                  setRegistrationForm({...registerForm,passwordHash:e.target.value})
                }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="repassword"
                label="Confirm Password"
                type="repassword"
                id="repassword"
                autoComplete="current-password"
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
                    registerAPI()
                    console.log(registerForm);
                  }}
                >
                  register
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
                  <Grid item sx={{ mt: 3 }}>
                    Already have an account?{" "}
                    <Link to={"/"} variant="body2">
                      {"Login"}
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

export default RegistrationDesign;

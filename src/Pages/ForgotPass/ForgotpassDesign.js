import React from "react";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

import TextField from "@mui/material/TextField";
import {
  Button,
  Container,
  Grid,
  ListItem,
  Typography,
} from "@mui/material";
import ForgotpassLogic from "./ForgotpassLogic";

const ForgotpassDesign = () => {
    let {
        showText,
    setShowText,
    disableShowTextFun
    } = ForgotpassLogic()


  return (
    <>
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
          />
        </Box>
        <Container component="main" maxWidth="xs">
          <Box
            sx={{
              marginTop: 5,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            <Typography component="h1" variant="b">
            Forgot Password
            </Typography>
            <Box
            component="img"
            sx={{
              width:50,
              height:70,
              backgroundImage: "/logo.4d6033c9.svg",mt: 5
            }}
            src="/logo.4d6033c9.svg"
          />
            <Typography component="h2" variant="b" sx={{ mt: 8 }}>
              Filed Hero
            </Typography>
           {!showText?(<Box 
           component="form" noValidate
           sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                sx={{width:'45ch'}}
              />
              <ListItem
                sx={{ display: "flex", justifyContent: "space-between" }}
              >
                <Button
                  type="submit"
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  onClick={()=>{
                    setShowText(true)
                  }}
                >
                  SEND RESET LINK
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
                  <Grid item xs>Already have an account?&nbsp;
                    <Link to={"/login"} variant="body2">
                     Login
                    </Link>
                  </Grid>
                </ListItem>
              </Grid>
            </Box>):
            (
                <ListItem sx={{display:'flex',flexDirection:'column',alignItems:'flex-start'}}>
                    <p>Reset password link sent on your email address successfully.</p>
                    <p>Go back to<Link onClick={disableShowTextFun} to={"/"}> Login</Link></p>
                </ListItem>
            )}
          </Box>
        </Container>
      </ListItem>
    </>
  );
};

export default ForgotpassDesign;
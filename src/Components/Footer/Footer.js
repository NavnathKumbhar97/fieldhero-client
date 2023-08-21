import React, { FC, ReactElement } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { Copyright } from "@mui/icons-material";

export const Footer =() => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "30px",
        backgroundColor: "grey",
        paddingTop: "1rem",
        paddingBottom: "1rem",
        display:'flex',
        justifyContent:'flex-end'
      }}
    >
      <Container maxWidth="lg">
        <Grid container direction="column" alignItems="center">
          <Grid item xs={12}>
            {/* <Typography color="black">
              React Starter App
            </Typography> */}
          </Grid>
          <Grid item xs={12}>
            <Typography color="textSecondary" variant="subtitle1">
             <Copyright/> {`${new Date().getFullYear()} | Apexa Group`}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
import React, { FC, ReactElement } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { Copyright } from "@mui/icons-material";

export const Footer =() => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "20px",
        backgroundColor: "grey",
        paddingTop: "0.5rem",
        paddingBottom: "0.5rem",
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
            <Typography style={{marginTop:'-9px',fontSize:'12px'}} color="textSecondary" variant="subtitle1">
             <Copyright style={{marginBottom:'-4px',fontSize:'15px'}}/> {`${new Date().getFullYear()} | This page maintained by the Apexa Group`}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
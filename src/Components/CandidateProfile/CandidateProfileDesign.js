import { Box, List } from "@mui/material";
import React from "react";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import Image from "mui-image";

const CandidateProfileDesign = () => {
  return (
    <>
      <Box>
        <h2>Candidate Profile</h2>
        <Box sx={{ fontSize: "13px" }}>
          <CancelOutlinedIcon
            style={{ marginBottom: "-5px" }}
          ></CancelOutlinedIcon>
          Not Verified
        </Box>

        <Box style={{display:'flex',flexDirection:'row',justifyContent:'flex-start'}}>
         <List>
          <img
            src="/download.jpeg"
            style={{ width: 150, height: 150 }}
            ></img>
          </List>

          <List>
            <b>Candidate Name:</b>Sundar Pichai
          </List>

        </Box>
      </Box>
    </>
  );
};

export default CandidateProfileDesign;

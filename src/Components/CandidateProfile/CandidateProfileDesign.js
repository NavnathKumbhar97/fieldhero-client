import { Box, List } from "@mui/material";
import React from "react";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import Image from "mui-image";
import CandidateWorkExp from "./CandidateWorkExp";

const CandidateProfileDesign = () => {
  return (
    <>
      <Box style={{margin:'20px'}}>
        <h2>Candidate Profile</h2>
        <Box sx={{ fontSize: "13px",mt:"-25px",mb:"40px" }}>
          <CancelOutlinedIcon
            style={{ marginBottom: "-7px" }}
          ></CancelOutlinedIcon>
          Not Verified
        </Box>

        <Box style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
         <List style={{display:'flex',flexDirection:'row'}}>
          <img
            src="/download.jpeg"
            style={{ width: 180, height: 150 }}
            ></img>
          

          <List style={{fontSize:'14px',marginLeft:'10px'}}>
            <b>Candidate Name:</b>Elon Musk<br/>
            <b>Gender:</b>Male<br/>
            <b>Permanent Address:</b>5 private drive little whinging<br/>
            <b>Primary Contact No:</b>9879879878<br/>
            <b>Aadhar No:</b>098909876543<br/>
            <b>Primary Email Id:</b>elon@gmail.com
          </List>
          </List>

          <List style={{fontSize:'14px'}}>         
           <b>Birthdate:</b>01/01/1990<br/>
            <b>Current Address:</b>4 private drive,little whinging<br/>
            <b>Secondary Contact No:</b>9090909090<br/>
            <b>Secondary Email Id:</b>elonmusk@gmail.com
          </List>
          <List style={{fontSize:'14px'}}>          
          <b>Skills:</b>skill1, skill2,skill3,skill4<br/>
            <b>Total Work Experiance:</b>10 year 5 months
            
          </List>

        </Box>

        <Box>
          <h4>
            Work Experiance
          </h4>
          <CandidateWorkExp/>
        </Box>
      </Box>
    </>
  );
};

export default CandidateProfileDesign;

import React, { useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Image from "mui-image";
import { Button, Select, TextField } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import CustomerProfile from "./CustomerProfile";

export default function CustomerProfileDesign() {
  let { setChangePassword, showChangePassword } = CustomerProfile();
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1", margin: "20px" }}>
      <Image
        src="/pexels-alex-conchillos-3745234.jpg"
        width={200}
        height={200}
      ></Image>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="General" value="1" />
            <Tab label="Account" value="2" />
            <Tab label="Subscription" value="3" />
          </TabList>
        </Box>
        <Box>
          <TabPanel
            value="1"
            sx={{
              display: "flex",
              flexDirection: "column",
              m: 1,
              alignItems: "flex-start",
            }}
          >
            <TextField
              id="filled-basic"
              label="Full Name"
              variant="filled"
              sx={{ mb: 5, width: "50ch" }}
            ></TextField>
            <TextField
              id="filled-basic"
              label="Company Name"
              variant="filled"
              sx={{ mb: 5, width: "50ch" }}
            ></TextField>
            <TextField
              id="filled-basic"
              label="Birth Date"
              variant="filled"
              sx={{ mb: 5, width: "50ch" }}
            ></TextField>
            <TextField
              select
              id="filled-basic"
              label="Gender"
              variant="filled"
              sx={{ mb: 5, width: "50ch" }}
            ></TextField>
            <TextField
              id="filled-basic"
              label="State"
              variant="filled"
              sx={{ mb: 5, width: "50ch" }}
            ></TextField>
            <TextField
              id="filled-basic"
              label="Country"
              variant="filled"
              sx={{ mb: 5, width: "50ch" }}
            ></TextField>
            <Button
              label="Save"
              style={{ backgroundColor: "#2a64b5", color: "white" }}
            >
              Save
            </Button>
          </TabPanel>
        </Box>
        <TabPanel
          value="2"
          sx={{
            display: "flex",
            flexDirection: "column",
            m: 1,
            alignItems: "flex-start",
          }}
        >
          <Button
            label="change password"
            style={{ backgroundColor: "#2a64b5", color: "white" }}
            onClick={()=>{setChangePassword(true)}}
          >
            Change password
          </Button>
          {showChangePassword?(<><TextField
            id="filled-basic"
            label="Old Password"
            variant="filled"
            type="password"
            sx={{ width: "50ch", mt: 5 }}
          ></TextField>
          <TextField
            id="filled-basic"
            label="New Password"
            variant="filled"
            type="password"
            sx={{ width: "50ch", mt: 5 }}
          ></TextField>
          <TextField
            id="filled-basic"
            label="Re-type Password"
            variant="filled"
            type="password"
            sx={{ width: "50ch", mt: 5, mb: 5 }}
          ></TextField>
          <Button
            onClick={()=>{setChangePassword(false)}}
            label="change password"
            style={{ backgroundColor: "#2a64b5", color: "white" }}
          >
            Change
          </Button></>):""}

          <TextField
            id="filled-basic"
            label="Email"
            variant="filled"
            sx={{ width: "50ch", mt: 5 }}
          ></TextField>
          <Box sx={{ color: "green", fontSize: "13px" }}>
            <CheckCircleOutlineIcon
              style={{ marginBottom: "-5px" }}
            ></CheckCircleOutlineIcon>
            Verified
          </Box>
          <TextField
            id="filled-basic"
            label="Contact No"
            variant="filled"
            sx={{ mt: 5, width: "50ch" }}
          ></TextField>
          <Box sx={{ fontSize: "13px" }}>
            <CancelOutlinedIcon
              style={{ marginBottom: "-5px" }}
            ></CancelOutlinedIcon>
            Not Verified
          </Box>
        </TabPanel>
        <TabPanel value="3" sx={{mt:"-150px"}}>
          <h2>Current Subscription</h2>
          <p>Data:4000/5000</p>
          <p>Expires on:1st january 2021</p>
          <Button style={{ backgroundColor: "#2a64b5", color: "white" }}>Renew</Button>
          <h4>Subscription History</h4>

        </TabPanel>
      </TabContext>
    </Box>
  );
}

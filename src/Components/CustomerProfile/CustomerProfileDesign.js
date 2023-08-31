import React, { useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Image from "mui-image";
import {
  Button,
  Card,
  Divider,
  List,
  ListItem,
  Select,
  TextField,
} from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import CustomerProfile from "./CustomerProfile";
import { PieChart } from "@mui/x-charts/PieChart";
import { BarChart } from "@mui/x-charts/BarChart";

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];

const xLabels = ["2015", "2016", "2017", "2018", "2019", "2020", "2021"];

const data2 = [
  { label: "Data", value: 5000 },
  { label: "Data", value: 4000 },
];

export default function CustomerProfileDesign() {
  let { setChangePassword, showChangePassword } = CustomerProfile();

  return (
    <Box sx={{ width: "100%", typography: "body1", margin: "20px" }}>
      <Box sx={{ display: "flex" }}>
        <Card sx={{width:'80%',display:'flex',flexDirection:'row'}}>
        <Image src="/download (2).jpeg" width={200} height={200}></Image>

        <List
          style={{ fontSize: "17px", marginLeft: "10px", marginTop: "-12px" }}
        >
          <b>Candidate Name:</b>Steve jobs
          <br />
          <b>Company Name:</b>Apple <br />
          <b>Birthdate:</b>01/01/1970
          <br />
          <b>Gender:</b>Male
          <br />
          <b>State:</b>Maharashtra
          <br />
        </List>
        </Card>

      </Box>
      <Box sx={{ marginTop: "50px" }}>
        <Divider />
        <h2>Account</h2>
        <Divider />
        <Card sx={{ width: "50%", marginBottom: "20px", marginTop: "30px" }}>
          <p style={{ marginLeft: "20px" }}>
            <b>Email:</b>stevejobs@apple.com
          </p>
          <Box
            sx={{
              color: "green",
              fontSize: "13px",
              marginTop: "-16px",
              marginLeft: "20px",
            }}
          >
            <CheckCircleOutlineIcon
              style={{ marginBottom: "-7px" }}
            ></CheckCircleOutlineIcon>
            Verified
          </Box>
          <p style={{ marginLeft: "20px" }}>
            <b>Contact No:</b>9898989898
          </p>
        </Card>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Button
            label="change password"
            style={{
              backgroundColor: "#2a64b5",
              width: "30ch",
              color: "white",
            }}
            onClick={() => {
              setChangePassword(true);
            }}
          >
            Change password
          </Button>
          {showChangePassword ? (
            <>
              <TextField
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
                onClick={() => {
                  setChangePassword(false);
                }}
                label="change password"
                style={{
                  backgroundColor: "#2a64b5",
                  color: "white",
                  width: "20ch",
                }}
              >
                Change
              </Button>
            </>
          ) : (
            ""
          )}
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          flexDirection: "column",
        }}
      >
        <Divider />
        <h2>Current Subscription</h2>
        <Card sx={{ width: "60%" }}>
          <PieChart
            sx={{ marginRight: "800px", marginTop: "-200px" }}
            series={[
              {
                data: data2,
                cx: 500,
                cy: 200,
                innerRadius: 50,
                outerRadius: 90,
              },
            ]}
            height={300}
            legend={{ hidden: false }}
          />
        </Card>
        <Box>
          <p
            style={{
              marginTop: "-205px",
              marginLeft: "70px",
              fontSize: "14px",
              marginBottom: "90px",
            }}
          >
            4000/5000
          </p>
          <p style={{ marginLeft: "30px" }}>Expires on:1st january 2021</p>
          <Button
            style={{
              backgroundColor: "#2a64b5",
              color: "white",
              marginLeft: "30px",
            }}
          >
            Renew
          </Button>
          <h4 style={{ marginTop: "50px" }}>Subscription History</h4>
        </Box>
        <Card sx={{ width: "60%", marginBottom: "30px" }}>
          <BarChart
            width={500}
            height={300}
            series={[
              {
                data: pData,
                label: "Price",
                id: "pvId",
                yAxisKey: "leftAxisId",
              },
              {
                data: uData,
                label: "Year",
                id: "uvId",
                yAxisKey: "rightAxisId",
              },
            ]}
            xAxis={[{ data: xLabels, scaleType: "band" }]}
            yAxis={[{ id: "leftAxisId" }, { id: "rightAxisId" }]}
            rightAxis="rightAxisId"
          />
        </Card>
      </Box>
      {/* </TabContext> */}
    </Box>
  );
}

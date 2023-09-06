import React from "react";
import Box from "@mui/material/Box";
import Image from "mui-image";
import {
  Alert,
  Backdrop,
  Button,
  Card,
  CircularProgress,
  Divider,
  FilledInput,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  List,
  Slide,
  Snackbar,
  TextField,
} from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CustomerProfile from "./CustomerProfile";
import { PieChart } from "@mui/x-charts/PieChart";
import { BarChart } from "@mui/x-charts/BarChart";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];

const xLabels = ["2015", "2016", "2017", "2018", "2019", "2020", "2021"];

const data2 = [
  { label: "Data", value: 5000 },
  { label: "Data", value: 4000 },
];
function TransitionLeft(props) {
  return <Slide {...props} direction="left" />;
}

export default function CustomerProfileDesign() {
  let {
    setChangePassword,
    showChangePassword,
    customerData,
    loader,
    alertMessages,
    alertMessage,
    setAlertMessage,

    handleClickShowPassword,
    handleMouseDownPassword,
    showPassword,
    changePass,setChangePass,
    changePasswordAPI,
    alertForError
  } = CustomerProfile();

  return (
    <>
      <Backdrop
        sx={{ color: "#2a64b5", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loader}
      >
        <CircularProgress size={130} thickness={2} color="inherit" />
      </Backdrop>
      {!alertForError?<Snackbar
              open={alertMessage}
              autoHideDuration={6000}
              onClose={()=>{
                setAlertMessage(false)}}
              style={{backgroundColor:'white'}}
              TransitionComponent={TransitionLeft}
            >
              <Alert
                onClose={()=>{
                  setAlertMessage(false)}}
                severity="success"
                sx={{
                  width: "100%",
                  backgroundColor: "#24f05e",
                  // color: "#24f05e",
                }}
              >
                Password Changed successfully!
              </Alert>
            </Snackbar>:
            <Snackbar
              open={alertMessage}
              autoHideDuration={6000}
              onClose={()=>{
                setAlertMessage(false)}}
              style={{backgroundColor:'white'}}
              TransitionComponent={TransitionLeft}
            >
              <Alert
                onClose={()=>{
                  setAlertMessage(false)}}
                severity="warning"
                sx={{
                  width: "100%",
                  backgroundColor: "red",
                  color: "white",
                }}
              >
                Something is wrong!
              </Alert>
            </Snackbar>}

      <Box sx={{ width: "100%", typography: "body1", margin: "20px" }}>
        <Box sx={{ display: "flex" }}>
          <Card sx={{ width: "85%", display: "flex", flexDirection: "row" }}>
            <Image
              src="/download (2).jpeg"
              width={200}
              height={200}
              style={{ marginLeft: "10px", marginTop: "50px" }}
            ></Image>

            <List style={{ display: "flex", flexDirection: "column" }}>
              <List
                style={{
                  fontSize: "17px",
                  marginLeft: "30px",
                  marginTop: "-12px",
                }}
              >
                <br />
                <b>Candidate Name:</b>
                {customerData.fullName} &nbsp;&nbsp;
                {/* <br /> */}
                <b>Company Name:</b>
                {customerData.companyName} &nbsp;&nbsp;
                {/* <br /> */}
                <b>Birthdate:</b>
                {customerData.birthDate}&nbsp;&nbsp;
                {/* <br /> */}
                <b>Gender:</b>
                {customerData.gender}&nbsp;
                <br />
                <br />
                <b>State:</b>
                {customerData.state}
                {/* <br /> */}
              </List>
              {/* <Card sx={{ width: "50%",marginLeft:'30px'}}> */}
              <p style={{ marginLeft: "30px" }}>
                <b>Email:</b>stevejobs@apple.com
              </p>
              <Box
                sx={{
                  color: "green",
                  fontSize: "13px",
                  marginTop: "-16px",
                  marginLeft: "30px",
                }}
              >
                <CheckCircleOutlineIcon
                  style={{ marginBottom: "-7px" }}
                ></CheckCircleOutlineIcon>
                Verified
              </Box>
              <p style={{ marginLeft: "30px" }}>
                <b>Contact No:</b>9898989898
              </p>
              {/* </Card> */}
            </List>
          </Card>
        </Box>
        <Box sx={{ marginTop: "50px" }}>
          <Divider />
          {/* <h2>Account</h2>
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
        </Card> */}
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Button
              label="change password"
              style={{
                backgroundColor: "#2a64b5",
                width: "30ch",
                color: "white",
                marginTop: "50px",
              }}
              onClick={() => {
                setChangePassword(true);
              }}
            >
              Change password
            </Button>
            {showChangePassword ? (
              <>
                <FormControl sx={{ m: 1, width: "25ch" }} variant="filled">
                  <InputLabel htmlFor="filled-adornment-password">
                    Old Password
                  </InputLabel>
                  <FilledInput
                    id="filled-basic"
                    label="Old Password"
                    variant="filled"
                    type={showPassword ? "text" : "password"}
                    onChange={(e)=>{
                      setChangePass({...changePass,old_password:e.target.value})
                    }}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    sx={{ width: "50ch", mb: 5 }}
                  ></FilledInput>
                </FormControl>
                <FormControl sx={{ m: 1, width: "25ch" }} variant="filled">
                  <InputLabel htmlFor="filled-adornment-password">
                    {" "}
                    New Password
                  </InputLabel>
                  <FilledInput
                    id="filled-basic"
                    label="New Password"
                    variant="filled"
                    onChange={(e)=>{
                      setChangePass({...changePass,new_password:e.target.value})
                    }}
                    type={showPassword ? "text" : "password"}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    sx={{ width: "50ch", mb: 5 }}
                  ></FilledInput>
                </FormControl>
                <FormControl sx={{ m: 1, width: "25ch" }} variant="filled">
                  <InputLabel htmlFor="filled-adornment-password">
                    Confirm Password
                  </InputLabel>
                  <FilledInput
                    id="filled-basic"
                    label="Old Password"
                    variant="filled"
                    type={showPassword ? "text" : "password"}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    sx={{ width: "50ch", mb: 5 }}
                  ></FilledInput>
                </FormControl>
                <Button
                  onClick={() => {
                    changePasswordAPI()
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
    </>
  );
}

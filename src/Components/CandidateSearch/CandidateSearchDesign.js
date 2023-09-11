import { SearchOutlined } from "@mui/icons-material";
import {
  Backdrop,
  Box,
  Button,
  CircularProgress,
  Divider,
  FilledInput,
  Rating,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import CandidateSearch from "./CandidateSearch";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "Not Available"
];

const CandidateSearchDesign = () => {
  let { loader, candidateIndustry, candidateSkills,candidateData } = CandidateSearch();
  const theme = useTheme();
  const [value, setValue] = useState(4);
  const [personName, setPersonName] = useState([]);
  const [skillsName, setSkillsName] = useState([]);
  const [industeyName, setIndustryName] = useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const handleSkills = (event) => {
    const {
      target: { value },
    } = event;
    setSkillsName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  const handleIndustry = (event) => {
    const {
      target: { value },
    } = event;
    setIndustryName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <>
      <Backdrop
        sx={{ color: "#2a64b5", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loader}
      >
        <CircularProgress size={130} thickness={2} color="inherit" />
      </Backdrop>
      <Box style={{ width: "100%", typography: "body1", margin: "20px" }}>
        <h2>Candidate Search</h2>
        <div style={{ marginBottom: "20px" }}>
          <FormControl sx={{ m: 1, width: 300 }}>
            <InputLabel id="demo-multiple-checkbox-label">Industry</InputLabel>
            <Select
              labelId="demo-multiple-checkbox-label"
              id="demo-multiple-checkbox"
              multiple
              value={industeyName}
              onChange={handleIndustry}
              input={<FilledInput label="Industry" />}
              renderValue={(selected) => selected.join(", ")}
              MenuProps={MenuProps}
            >
              {candidateIndustry.map(
                (name) => (
                  console.log(name, "names"),
                  (
                    <MenuItem key={name.title} value={name.title}>
                      <Checkbox
                        checked={industeyName.indexOf(name.title) > -1}
                      />
                      <ListItemText primary={name.title} />
                    </MenuItem>
                  )
                )
              )}
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, width: 300 }}>
            <InputLabel id="demo-multiple-checkbox-label">Skills</InputLabel>
            <Select
              labelId="demo-multiple-checkbox-label"
              id="demo-multiple-checkbox"
              multiple
              value={personName}
              onChange={handleChange}
              input={<FilledInput label="Tag" />}
              renderValue={(selected) => selected.join(", ")}
              MenuProps={MenuProps}
            >
              {names.map((name) => (
                <MenuItem key={name.title} value={name.title}>
                  <Checkbox checked={personName.indexOf(name.title) > -1} />
                  <ListItemText primary={name.title} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, width: 300 }}>
            <InputLabel id="demo-multiple-checkbox-label">Location</InputLabel>
            <Select
              labelId="demo-multiple-checkbox-label"
              id="demo-multiple-checkbox"
              multiple
              value={names}
              onChange={handleChange}
              input={<FilledInput label="Location" />}
              renderValue={(selected) => selected.join(", ")}
              MenuProps={MenuProps}
            >
              {names.map((name) => (
                <MenuItem key={name} value={name}>
                  <Checkbox checked={names.indexOf(name) > -1} />
                  <ListItemText primary={name} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <SearchOutlined
            style={{
              fontSize: 40,
              cursor: "pointer",
              color: "#2a64b5",
              marginTop: "13px",
            }}
          />

          <Divider></Divider>
        </div>

        {candidateData.map((data) => (
          console.log(data,"data"),
        <Box style={{ marginBottom: 20, width: "96%" }}>
          <Card sx={{ display: "flex", alignItems: "center" }}>
            <CardMedia
              component="img"
              sx={{ width: 151, height: 160, borderRadius: "300px 300px", }}
              image="/downloadcnd.jpeg"
              alt="Live from space album cover"
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "80%",
                boxShadow: '-2px 0px 2px rgba(0, 0, 0, 0.2)',
                borderLeft: "0.05px gray",
                ml: 2,
              }}
            >
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography component="div" variant="h5" sx={{ mb: 4 }}>
                  {data.fullName}{" "}
                  <Box sx={{ fontSize: "16px",display:'flex',flexDirection:'row' }}>
                  <b><LocationOnOutlinedIcon style={{marginBottom:'-5px'}}/>
                  </b>&nbsp;location1&nbsp;&nbsp;
                  
                  <Box sx={{ color: "green", fontSize: "14px" }}>
                    <CheckCircleOutlineIcon
                      style={{ marginBottom: "-7px" }}
                    ></CheckCircleOutlineIcon>
                    Verified
                  </Box>
                  </Box>
                </Typography>
                <Box sx={{display:'flex',flexDirection:'row',justifyContent:'flex-start'}}>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                  sx={{
                    borderRadius: "4px", 
                    backgroundColor: "#f0f0f0", 
                    padding: "6px",
                    width:'30%',
                    marginRight:'20px' 
                  }}
                >
                  skill1,skill2,skill3,skill4,skill5&nbsp;&nbsp;
                </Typography>
                {/* <Typography
                  variant="subtitle1"
                  // color="text.secondary"
                  component="div"
                >
                  <b><LocationOnOutlinedIcon style={{marginBottom:'-6px'}}/></b>&nbsp;location1,location2,location3&nbsp;&nbsp;
                </Typography> */}
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  <WorkOutlineOutlinedIcon style={{marginBottom:'-7px'}}/>&nbsp;
                  No of Jobs done through us : <b>25</b>
                </Typography>
                </Box>
              </CardContent>
              
            </Box>
            <Box style={{ display: "flex", flexDirection: "column",marginTop:'-90px' }}>
              <Rating value={value} readOnly />
              <Button sx={{ fontSize: "11px" }}>View more info</Button>
            </Box>
          </Card>
        </Box>
))}

        <Box style={{ marginBottom: 20, width: "96%" }}>
          <Card sx={{ display: "flex", alignItems: "center", }}>
            <CardMedia
              component="img"
              sx={{ width: 151, height: 160, borderRadius: "300px 300px" }}
              image="/download.jpeg"
              alt="Live from space album cover"
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "80%",
                borderLeft: "1px solid black",
                ml: 2,
              }}
            >
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography component="div" variant="h5" sx={{ mb: 4 }}>
                  Elon Musk{" "}
                  <Box sx={{ fontSize: "13px" }}>
                    <CancelOutlinedIcon
                      style={{ marginBottom: "-5px", color: "red"  }}
                    ></CancelOutlinedIcon>
                    Not Verified
                  </Box>
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  <b>Skills:</b>No Skill Available
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  <b>Work Location:</b>No Lacation Available
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  No of Jobs done through us : <b>None</b>
                </Typography>
              </CardContent>
            </Box>
            <Box style={{ display: "flex", flexDirection: "column" }}>
              <Rating value={value} readOnly />
              <Button sx={{ fontSize: "11px" }}>View more info</Button>
            </Box>
          </Card>
        </Box>
      </Box>
    </>
  );
};

export default CandidateSearchDesign;

import { SearchOutlined } from '@mui/icons-material'
import { Box, Button, Divider, FilledInput, Rating, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";


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
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

const CandidateSearchDesign = () => {
  const theme = useTheme();
  const [value, setValue] = useState(4); 
  const [personName, setPersonName] = useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <>
    <Box style={{width: "100%", typography: "body1", margin: "20px"}}>
    <h2>Candidate Search</h2>
    <div style={{marginBottom:"20px"}}>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-checkbox-label">Industry</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={personName}
          onChange={handleChange}
          input={<FilledInput label="Industry" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={personName.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
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
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={personName.indexOf(name) > -1} />
              <ListItemText primary={name} />
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
          value={personName}
          onChange={handleChange}
          input={<FilledInput label="Location" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={personName.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <SearchOutlined style={{fontSize:40,cursor:"pointer",color:'#2a64b5',marginTop:'13px'}}/>

    <Divider></Divider>
    </div>

      <Box style={{marginBottom:20,width:'96%'}}>
      <Card sx={{ display: 'flex',alignItems:'center' }}>
      <CardMedia
        component="img"
        sx={{ width: 151,height:160,borderRadius: '300px 300px' }}
        image="/download (1).jpeg"
        alt="Live from space album cover"
      />
      <Box sx={{ display: 'flex', flexDirection: 'column',width:'80%' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5" sx={{mb:4,}}>
          Sundar Pichai <Box sx={{ color: "green", fontSize: "13px" }}>
            <CheckCircleOutlineIcon
              style={{ marginBottom: "-5px" }}
            ></CheckCircleOutlineIcon>
            Verified
          </Box>
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            <b>Skills:</b>skill1,skill2,skill3,skill4,skill5
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
          <b>Work Location:</b>location1,location2,location3
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            No of Jobs done through us : <b>25</b>
          </Typography>
          
        </CardContent>
      </Box>
      <Box style={{display:'flex',flexDirection:'column',}}>
      <Rating value={value} readOnly />
      <Button sx={{fontSize:"11px"}}>View more info</Button>
      </Box>
    </Card>
      </Box>


      <Box style={{marginBottom:20,width:'96%'}}>
      <Card sx={{ display: 'flex',alignItems:'center' }}>
      <CardMedia
        component="img"
        sx={{ width: 151,height:160,
        borderRadius: '300px 300px'}}
        image="/download.jpeg"
        alt="Live from space album cover"
      />
      <Box sx={{ display: 'flex', flexDirection: 'column',width:'80%' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5" sx={{mb:4}}>
           Elon Musk <Box sx={{ fontSize: "13px" }}>
            <CancelOutlinedIcon
              style={{ marginBottom: "-5px" }}
            ></CancelOutlinedIcon>
            Not Verified
          </Box>
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            <b>Skills:</b>No Skill Available
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
          <b>Work Location:</b>No Lacation Available
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            No of Jobs done through us : <b>None</b>
          </Typography>
        </CardContent>
      </Box>
      <Box style={{display:'flex',flexDirection:'column',}}>

<Rating value={value} readOnly />
      <Button sx={{fontSize:'11px'}}>View more info</Button>
    </Box>
    </Card>
    </Box>
    </Box>

    </>
  )
}

export default CandidateSearchDesign
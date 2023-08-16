import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Image from 'mui-image';
import { TextField } from '@mui/material';

export default function CustomerProfileDesign() {
  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1',margin:"20px" }}>
      <Image src='/pexels-alex-conchillos-3745234.jpg' width={200} height={200}>

      </Image>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="General" value="1" />
            <Tab label="Account" value="2" />
            <Tab label="Subscription" value="3" />
          </TabList>
        </Box>
        <Box sx={{display:"flex",flexDirection:'row'}}>
        <TabPanel value="1" >
          <TextField id="filled-basic" label="Filled" variant="filled"></TextField>
          <TextField id="filled-basic" label="Filled" variant="filled"></TextField>
          <TextField id="filled-basic" label="Filled" variant="filled"></TextField>
          <TextField id="filled-basic" label="Filled" variant="filled"></TextField>
          <TextField id="filled-basic" label="Filled" variant="filled"></TextField>
          <TextField id="filled-basic" label="Filled" variant="filled"></TextField>
          <TextField id="filled-basic" label="Filled" variant="filled"></TextField>
        </TabPanel>
        </Box>
        <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
      </TabContext>
    </Box>
  );
}
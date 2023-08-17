import { Box, TextField } from '@mui/material'
import React from 'react'

const CandidateSearchDesign = () => {
  return (
    <>
    <Box>
    <h2>Candidate Search</h2>
    <TextField
    Select
        id="filled-basic"
        label="Industry"
        variant="filled"
        sx={{ mb: 5, width: "50ch" }}></TextField>
    </Box>
    </>
  )
}

export default CandidateSearchDesign
import { Box, Paper, Typography } from '@mui/material'
import React from 'react'

const LeagueDetails = () => {
  return (
    <Box style={{borderBottom: '5px solid', height: '225px'}}  id="league-logo">
      <img src='https://crests.football-data.org/PL.png' alt='image' height={'150px'} />
      <Typography>England</Typography>
    </Box>
  )
}

export default LeagueDetails
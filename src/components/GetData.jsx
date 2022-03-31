import React, { useEffect, useState } from 'react';
import { getSeasons, getSpecificSeason } from '../api-helpers/seasons';
import LeagueDetails from './LeagueDetails';
import Loading from './Loading';
import SeasonDetails from './SeasonDetails';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const GetData = () => {
  const [state, setState] = useState({
    data: [],
    loading: true,
    error: false,
    
  })

  useEffect(() => {
    getSeasons(2021).then(res => {
      console.log(res);
      setState(s => ({
        ...s,
        data: res,
        loading:false
      }))
    })
    
 }, [])
  
  const arrayData = state.data.map((item, i) => {
    let winner = item.winner
    console.log(winner);
    let year = item.endDate.substring(0,4)
    if (winner === null) {  
      return
      } else {
      return (
        <SeasonDetails year={year} crest={winner.crestUrl} clubName={winner.name}/>
          
        )
  }
  })
  

 
  

  return (
    <div className='data-display'>
      <LeagueDetails />
      {state.loading ? <Loading /> : <div>{arrayData}</div>}
    </div>
  )
}

export default GetData
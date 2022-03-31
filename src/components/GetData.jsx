import React, { useEffect, useState } from 'react';
import { getSeasons, getSpecificSeason } from '../api-helpers/seasons';
import LeagueDetails from './LeagueDetails';
import Loading from './Loading';
import SeasonDetails from './SeasonDetails';


const GetData = () => {
  const [state, setState] = useState({
    data: [],
    loading: true,
    error : false,
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
    if (winner) {
      
      return (
        <div key={i}>
          Year: {item.endDate}
          Winner : {winner.name}
      </div>
    )
    } else {
      return null;
  }
  })
  

 
  

  return (
    <div className='data-display'>
      <LeagueDetails />
      <SeasonDetails />
      {state.loading ? <Loading /> : <div>{arrayData}</div>}
    </div>
  )
}

export default GetData
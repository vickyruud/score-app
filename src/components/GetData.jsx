import React, { useEffect, useState } from 'react';
import { getSeasons } from '../api-helpers/seasons';


const GetData = () => {
  const [state, setState] = useState({
    data: [],
    loading: true,
    error : false,
  })

  useEffect(() => {
    getSeasons().then(res => {
      setState(s => ({
        ...s,
        data: res.seasons,
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
    <div>
      {state.loading ? <div>Loading data</div> : <div>{arrayData}</div>}
    </div>
  )
}

export default GetData
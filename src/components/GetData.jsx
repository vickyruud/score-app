import React, { useEffect } from 'react';
import { getCompetitions } from '../api-helpers/competitions';


const GetData = () => {
  const [data, setData] = React.useState();
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

 
  
  

  useEffect(() => {
    getCompetitions().then(response => {
      setData(response);
      setLoading(true);
      console.log(data);
    }).catch(error => {
      setError(true);
   })
    
  }, [])
  
  
  

  return (
    <div>
      {data ? <div>Hello</div> : <div>Error loading data</div>}
    </div>
  )
}

export default GetData
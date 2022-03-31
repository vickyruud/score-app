import React, { useEffect } from 'react';
import axios from 'axios';


const GetData = () => {
  const [data, setData] = React.useState([]);
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  let config = {
    headers: {
      'X-Auth-token' : '9385d8443cff45b496b5ea43a1abf799'
    }
  }
  
  let urlData = {}

  useEffect(() => {
   
    
  }, [])
  

  const arrayData = data.map((item, i) => {
      return (
        <div>{item}</div>
      )
    })

  return (
    <div>{arrayData }</div>
  )
}

export default GetData
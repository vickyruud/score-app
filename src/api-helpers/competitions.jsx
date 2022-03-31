import axios from 'axios';
 

let config = {
    headers: {
      'X-Auth-token' : '9385d8443cff45b496b5ea43a1abf799'
    }
  }

//function to get competition data
export const getCompetitions = () => {
  return fetch('http://api.football-data.org/v2/competitions/2021', config).then(res => {
    return res.json()
  }).then(response => {
    return response
  })
};
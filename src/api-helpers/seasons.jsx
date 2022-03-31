 

let config = {
    headers: {
      'X-Auth-token' : '9385d8443cff45b496b5ea43a1abf799'
    }
  }

//function to get competition data
export const getSeasons = (leagueID) => {
  return fetch(`http://api.football-data.org/v2/competitions/${leagueID}`, config).then(res => {
    return res.json()
  }).then(response => {

    return response.seasons
  })
};


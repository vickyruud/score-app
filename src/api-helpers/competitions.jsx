//function to get competition data
export const getCompetitions = () => {
  axios.get('http://api.football-data.org/v2/competitions/2021', config).then(res => {
    return res
  }).then(response => {
    return response.data.seasons
  })
};
const axios = require('axios')
const URL = "https://api.thedogapi.com/v1/breeds?apikey=live_TsAsc8Mj9DmNVpslxyaW97OUAiPf2R0bM9nE1nRXtACDlntF5jIqhT7A932cjxkc"

module.exports = (req, res)=>{

  axios(URL)
    .then(({data})=>{
      const breeds = data
      res.status(200).json(data)
    })
    .catch(error=>{
      res.status(500).json(error)
    })
}

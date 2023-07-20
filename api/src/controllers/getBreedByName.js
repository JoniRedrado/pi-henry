const axios = require('axios')
const URL = "https://api.thedogapi.com/v1/breeds/search?q="

module.exports = (req, res)=>{

  const {name} = req.query

  axios(`${URL}${name}`)
  .then(({data})=>{
    console.log(data);
    res.status(200).json(data)
  })
  .catch(error =>{
    res.status(500).json(error)
  })
}
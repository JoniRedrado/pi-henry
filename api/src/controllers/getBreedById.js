const axios = require('axios')
const URL = "https://api.thedogapi.com/v1/breeds/"

module.exports = (req, res) =>{
  const {idRaza} = req.params
  
  axios(`${URL}${idRaza}`)
  .then(({data})=>{
    const breedData = data
    
    res.status(200).json(breedData)
  })
}
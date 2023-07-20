const axios = require('axios')
const { Temper } = require('../db')
const URL = "https://api.thedogapi.com/v1/breeds?apikey=live_TsAsc8Mj9DmNVpslxyaW97OUAiPf2R0bM9nE1nRXtACDlntF5jIqhT7A932cjxkc"

module.exports = async (req, res)=>{
  axios("https://api.thedogapi.com/v1/breeds?apikey=live_TsAsc8Mj9DmNVpslxyaW97OUAiPf2R0bM9nE1nRXtACDlntF5jIqhT7A932cjxkc")
  .then(async({data})=>{
    const breeds = data
    var tempers = []

    const dbTempers = await Temper.findAll()
    
    if(dbTempers.length === 0) {

      breeds.forEach(breed => {
        const actualTempers = breed.temperament?.split(", ")
        
          actualTempers?.forEach(temper => {
            //const repeated = tempers.includes(temper)
            if(!tempers.includes(temper)) {
              tempers.push(temper)
            }
            
          })
        });
        tempers.forEach(temper=>{
          Temper.create({id:1 ,name: temper})
        })
    }
    
    const result = await Temper.findAll()
      console.log(result);
      res.status(200).json({tempers})
    })
    .catch(error=>{
      res.status(500).json(error.message)
    })
}
const { Breed, Temper } = require('../db')


module.exports = async (req,res)=>{
    try {
        
        const {image, name, heigth,weigth, lifetime, tempers} = req.body
        /*
        let finalTempers = []
        let tempersStr = ""
        tempers.forEach(async (temp)=>{
            const res = await Temper.findOne({where: {id:temp}})
            finalTempers.push(res.dataValues.name)
            tempersStr = finalTempers.join(", ")
            console.log(finalTempers);
        })*/
        
        //const tempersStr = finalTempers.join(", ")
        //console.log(tempersStr, "hola");
        const temper = await Temper.findOne({where: {name: 'Stubborn'}})
        const newBreed = await Breed.create({image, name, heigth, weigth, lifetime})
        //console.log(finalTempers.join(", "));
        
        await newBreed.addTemper(temper)

        /*tempers.forEach(async (temp)=>{
            newBreed.addTemper({
                id: 500,
                name: "prueba"
            })
        })*/

        /*const getBreeds = await Breed.findAll()
        getBreeds.forEach(breed=>{
            console.log(breed.dataValues)
        });*/
        
        console.log(newBreed);
        res.status(200).json(newBreed)
    } catch (error) {
        res.status(500).json(error)
    }
}
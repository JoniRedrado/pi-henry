const {DataTypes} = require('sequelize')



module.exports = (sequelize)=>{
  sequelize.define('Breed',{
    id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    image:{
      type: DataTypes.STRING,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: [1, 50]
      }
    },
    heigth: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    weigth: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lifetime: {
      type: DataTypes.STRING,
      allowNull: false 
    },
    temper: {
      type: DataTypes.STRING,
      allowNull: true
    },
  }, { timestamps: false })
}

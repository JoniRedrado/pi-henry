const {DataTypes} = require('sequelize')

const Breed = (sequelize)=>{
  sequelize.define('Breed',{
    id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      unique: true
    },
    image:{
      type: DataTypes.STRING,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
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
    }
  }, { timestamps: false })
}

module.exports = {
  Breed
}

const sequelize = require('sequelize')
const { DataTypes } = require('sequelize')

const Temper = (sequelize)=>{
  sequelize.define('Temper', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      unique: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, { timestamps: false })
}

module.exports = {
  Temper
}
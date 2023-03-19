const {sequelize}=require('../config/config')

const DataTypes=require('sequelize');
const Timeline=sequelize.define("timeline",{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    Prevstatus:{
        type:DataTypes.STRING,
        defaultValue:'CONFIRMED',
    },
    Newstatus:{
        type:DataTypes.STRING,
        defaultValue:'CONFIRMED',
    }
})

module.exports={Timeline}
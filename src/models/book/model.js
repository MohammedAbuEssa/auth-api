'use strict'
const books=(sequelize,DataTypes)=>
sequelize.define('book',{
title:{
    type:DataTypes.STRING,
    allowNulld:false
},
author:{
    type:DataTypes.STRING,
    allowNull:false
}
})

module.exports=books
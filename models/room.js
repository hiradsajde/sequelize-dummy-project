const sequelize = require('sequelize')
const database = require('./../utils/database')

const room = database.define('room' , {
    id : {
        type : sequelize.INTEGER,
        auto_incerement : true,  
        primaryKey:true,
    } , 
    name : sequelize.STRING 
})


module.exports = room
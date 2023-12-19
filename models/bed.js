const sequelize = require('sequelize')
const database = require('./../utils/database')

const bed = database.define('bed',{
    room_id : sequelize.INTEGER,
    name : sequelize.STRING
})

module.exports = bed
const express = require('express')
const path = require('path')
const room = require('./../models/room')
const bed = require('./../models/bed')
const router = express.Router()

room.hasMany(bed , {
    foreignKey : 'room_id' ,
    onDelete : 'CASCADE'
})
bed.belongsTo(room)

router.get('/' , (req , res) => {
    room.findAll().then(items => {
        res.render('admin/dashboard',{products : items})
    })
    // res.render('admin/dashboard')
})
router.post('/add-room' , (req , res) => {
    room.create({name : req.body.name})
    res.redirect('/admin')
})
router.post('/delete-product' , (req , res) => {
    room.destroy({
        where : {
            id : req.body.id
        }
    }).then(result => {
        res.redirect('/admin')
    })
})

router.get('/room/:id' , (req , res) => {
    bed.findAll({
        where : {
            room_id : req.params.id
        }
    }).then(beds => {
        res.render('admin/beds' , {
            beds : beds,
            room_id : req.params.id
        })
    })
})
router.post('/add-bed' , (req , res) => {
    bed.create({
        room_id : req.body.id , 
        name : req.body.name
    }).then(result => {
        res.redirect(`/admin/room/${req.body.id}`)
    })
})
router.post('/delete-bed' , (req , res) => {
    bed.destroy({
        where : {
            id : req.body.id
        }
    }).then(result => {
        res.redirect(`/admin/room/${req.body.room_id}`)
    })
})

module.exports = router
const express = require('express')
const http = require('http')

const adminRouter = require('./routers/admin')
const mainRouter = require('./routers/main')

const database = require('./utils/database')

const app = express()

app.use(express.urlencoded({extended : false}))

app.use('/' , mainRouter)
app.use('/admin' , adminRouter)

app.set('view engine' , 'pug')
app.set('views','views')

const server = http.createServer(app)
database.sync().then(result => {
    server.listen(3000)
}).catch(err => {
    console.error(err)
})
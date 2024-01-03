const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

const   SellerRoutes = require('./Routes/sellAuthRoutes')
const app = express()

app.use(express.json())

app.use((req,res,next) => {
    console.log(req.path, req.method)
    next()
})
app.use('/api/Seller', SellerRoutes)

mongoose.connect(process.env.MONG_URI)
    .then(() => {
        app.listen((process.env.PORT), () => {
            console.log('Connected to DB and listening to port', process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })
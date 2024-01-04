const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

const  SellerRoutes = require('./Routes/sellAuthRoutes')
const sellpath = require('./Routes/sellRoutes')
const subscriptionRoutes  = require('./Routes/subscriptionRoutes') 
const imageRoutes = require('./Routes/imageRoutes')
const app = express()

app.use(express.json())

app.use((req,res,next) => {
    console.log(req.path, req.method)
    next()
})
app.use('/api/Seller', SellerRoutes)
app.use('/api/sellProp', sellpath)
app.use('/api/subscription', subscriptionRoutes)
app.use('/api/image',imageRoutes)

mongoose.connect(process.env.MONG_URI)
    .then(() => {
        app.listen((process.env.PORT), () => {
            console.log('Connected to DB and listening to port', process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })
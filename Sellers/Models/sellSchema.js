const mongoose = require('mongoose')

const Schema = mongoose.Schema

const sellSchema = new Schema({
    PropertyType: {
        type: String,
        required: true
    },
    Location: {
        type: String,
        required: true
    },
    Area:{
        type : Number ,
        required: true
    },
    Price: {
        type: String,
        required: true
    },
    Description: {
        type: String,
        required: true
    },
    PhoneNumber: {
        type: Number,
        required: true
    },
    Email: {
        type: String,
        required: true
    }
}, {timestamps: true})

module.exports = mongoose.model('Sell', sellSchema)
const { default: mongoose} = require('mongoose')
const jwt = require('jsonwebtoken')

const Buyer = require('../Models/buySchema')

const createToken = (_id) => {
    return jwt.sign({_id}, process.env.SECRET, {expiresIn: '3d'})
}

const loginBuyer = async (req,res) => {
    const {Email, Password} = req.body 

    try{
        const buyer = await Buyer.login(Email, Password)

        const token = createToken(buyer._id)

        res.status(200).json({Email, token})
    }
    catch(error) {
        res.status(400).json({error: error.message})
    }
}


const signupBuyer = async (req,res) => {
    const {Email, Password} = req.body

    try{
        const buyer = await Buyer.signup(Email, Password)
        
        // create a token

        const token = createToken(buyer._id)
        
        res.status(200).json({Email, token})

    } catch(error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = {
    loginBuyer,
    signupBuyer
}
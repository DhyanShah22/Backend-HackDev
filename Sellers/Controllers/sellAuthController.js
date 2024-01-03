const { default: mongoose} = require('mongoose')
const jwt = require('jsonwebtoken')

const Seller = require('../Models/sellAuthSchema')

const createToken = (_id) => {
    return jwt.sign({_id}, process.env.SECRET, {expiresIn: '3d'})
}

const loginSeller = async (req,res) => {
    const {Email, Password} = req.body 

    try{
        const seller = await Seller.login(Email, Password)

        const token = createToken(seller._id)

        res.status(200).json({Email, token})
    }
    catch(error) {
        res.status(400).json({error: error.message})
    }
}


const signupSeller = async (req,res) => {
    const {Email, Password} = req.body

    try{
        const seller = await Seller.signup(Email, Password)
        
        // create a token

        const token = createToken(seller._id)
        
        res.status(200).json({Email, token})

    } catch(error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = {
    loginSeller,
    signupSeller
}
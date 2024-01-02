const express = require('express')

const { 
    loginBuyer,
    signupBuyer
} = require('../Controllers/buyAuthController')
const router = express.Router()

// login route 
router.post('/login', loginBuyer)

router.post('/signup', signupBuyer)

module.exports = router
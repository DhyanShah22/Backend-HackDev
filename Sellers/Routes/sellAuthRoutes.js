const express = require('express')

const { 
    loginSeller,
    signupSeller
} = require('../Controllers/sellAuthController')
const router = express.Router()

// login route 
router.post('/login', loginSeller)

router.post('/signup', signupSeller)

module.exports = router
const express =require('express');
const {createCustomer,SetupIntent} = require('../Controllers/subsriptionControllers');
const router = express.Router();

router.post('/create-customer',createCustomer);
router.post('/setup-intent',SetupIntent);

module.exports = router
const express = require('express')

const {
    getSell,
    getSingleSell,
    addSell,
    updateSell,
    deleteSell
} = require('../Controllers/sellController')

const router = express.Router()

router.get('/', getSell)

router.get('/:id', getSingleSell)

router.post('/', addSell)

router.patch('/:id', updateSell)

router.delete('/:id', deleteSell)

module.exports = router
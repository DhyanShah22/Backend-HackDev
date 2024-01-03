const {default: mongoose} = require('mongoose')

const Sell = require('../Models/sellSchema')

const getSell = async(req,res) => {
    const sell = await Sell.find({}).sort({createdAt: -1})

    return res.status(201).json(sell)
}

const getSingleSell = async(req,res) => {
    const {id} = req.params 

    if(!mongoose.Types.ObjectId.isValid(id))
    {
        return res.status(500).json({Error: "Not a valid DB id"})
    }

    const sell = await Sell.findById(id)

    if(!sell)
    {
        return res.status(404).json({Error: "Unable to find property."})
    }

    return res.status(201).json(sell)
}

const addSell = async(req,res) => {
    const {PropertyType, Location, Price, Description, PhoneNumber, Email, Area} = req.body 

    try{
        const sell = await Sell.create({PropertyType, Location, Area, Price, Description, PhoneNumber, Email})
        return res.status(200).json(sell)
    }
    catch(error) {
        return res.status(404).json({Error: 'Uanble to add property '})
    }
}

const updateSell = async (req,res) => {
    const { id } = req.params 

    if(!mongoose.Types.ObjectId.isValid(id))
    {
        return res.status(500).json({Error: 'Not a valid DB id.'})
    }
    const sell = await Sell.findOneAndUpdate({_id: id}, req.body, {
        runValidators: true,
        new: true
    })
    if(!sell)
    {
        return res.status(404).json({Error: 'Unable to find property.'})
    }

    res.status(201).json(sell)
}

const deleteSell = async (req,res) => {
    const { id } = req.params 

    if(!mongoose.Types.ObjectId.isValid(id))
    {
        return res.status(500).json({Error: 'Not a valid DB id.'})
    }
    const sell = await Sell.findOneAndDelete({_id: id})
    if(!sell)
    {
        return res.status(404).json({Error: 'Unable to find property.'})
    }

    res.status(201).json(sell)
}

module.exports = {
    getSell,
    getSingleSell,
    addSell,
    updateSell,
    deleteSell
}

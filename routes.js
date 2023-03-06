const express = require('express');

const Model = require('./model');
const Modeloff = require('./modeloff');
const leave_application = require('./leave_application');

const router = express.Router()
module.exports = router;

//Post Method
router.post('/signIn', async (req, res) => {
    const data = new Model({
        name: req.body.name,
        email: req.body.email,
        date: req.body.date,
        time: req.body.time
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})
router.post('/signOff', async (req, res) => {
    const data = new Modeloff({
        name: req.body.name,
        email: req.body.email,
        date: req.body.date,
        time: req.body.time
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})
router.post('/leave-application', async (req, res) => {
    const data = new leave_application({
        name: req.body.name,
        email: req.body.email,
        date: req.body.date,
        time: req.body.time,
        comment: req.body.comment
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//Get all Method
router.get('/getAll/signIn', async (req, res) => {
    try {
        const data = await Model.find();
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})
router.get('/getAll/signOff', async (req, res) => {
    try {
        const data = await Modeloff.find();
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})
router.get('/getAll/leave_application', async (req, res) => {
    try {
        const data = await leave_application.find();
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})
//Get by ID Method
router.get('/getOne/:id', async (req, res) => {
    try {
        const data = await Model.findById(req.params.id);
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})
//Update by ID Method
router.patch('/update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await Model.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})
//Delete by ID Method
router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Model.findByIdAndDelete(id)
        res.send(`Document with ${data.name} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//Get all Method
router.post('/userLogin', async (req, res) => {
    try {
        console.log(req.body)
        var query = { email: req.body.email, password: req.body.password };
        const userLogin = await Model.findOne(query);
        res.status(200).json({ userLogin });
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
})
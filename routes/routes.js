const express = require('express');
const User = require('../models/user');
const router = express.Router();

// Get All Users
router.get('/users', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

// User Create
router.post('/user/create', async (req, res) => {

    const user = await User.findOne({ email: req.body.email});
    if(user) {
        return res.status(400).json({ message: "Email address is already taken." })
    }

    const data = new User({
        name: req.body.name,
        email: req.body.email,
        sex: req.body.sex,
        age: req.body.age
    })

    try {
        const user = await data.save();
        res.status(200).json(user)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

// User Update
router.patch('/user/update/:id', async (req, res) => {
    try {
        const result = await User.findByIdAndUpdate(
            req.params.id, req.body, { new: true }
        )

        res.send(result)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})


module.exports = router;
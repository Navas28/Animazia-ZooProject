const express = require('express')
const EventRegistration = require("../models/EventRegistrationSchema")

const router = express.Router();

router.post("/register", async (req,res) => {
    try{
        const {name, email, phone,participants} = req.body;
        if(!name || !email || !phone || !participants){
            return res.status(400).json({ error: "All fields are required"})
        }

        const newEventregistration = new EventRegistration({name, email, phone, participants})
        await newEventregistration.save();

        res.status(201).json({ message: "Registration Successfull" })
    }catch (error){
        res.status(500).json({error: error.message})
    }
})

module.exports = router;
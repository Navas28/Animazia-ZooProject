const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Stripe = require("stripe");
require("dotenv").config();
const Animal = require('../../models/AnimalSchema')

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json()); // Middleware

//   Stripe Payment Integration

app.post("/payment", async (req, res) => {
    const { bookingType } = req.body;

    const bookings = {
        standard: 200 * 100,
        premium: 500 * 100,
        vip: 800 * 100,
        deluxe: 1000 * 100,
    };

    if (!bookings[bookingType]) {
        return res.status(400).json({ error: "Invalid Booking Type" });
    }
    try {
        const product = await stripe.products.create({
            name: bookingType.toUpperCase(),
        });
        const price = await stripe.prices.create({
            product: product.id,
            unit_amount: bookings[bookingType],
            currency: "inr",
        });

        const session = await stripe.checkout.sessions.create({
            line_items: [
                {
                    price: price.id,
                    quantity: 1,
                },
            ],
            mode: "payment",
            success_url: "http://localhost:5173/success",
            cancel_url: "http://localhost:5173/cancel",
        });
        res.json(session);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

//    Contact Form Data Storing Using Mongo DB

mongoose
    .connect(process.env.MONGODB_URI, {
        dbName: "WildAnimals" //  Animal data base
    })
    .then(() => console.log("Mongo Db Connected"))
    .catch((err) => console.log("Mongo Db Connection Error", err));

const contactShcema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
});

const Contact = mongoose.model("contact", contactShcema);

app.post("/contact", async (req, res) => {
    try {
        const newContact = new Contact(req.body);
        await newContact.save();
        res.status(201).json({ success: true, message: "Contact Form Submitted Successfully" });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
});

//     Fetch all animals from MongoDB

app.get('/animals', async (req,res) => {
    try{
        const animals = await Animal.find();
        res.json(animals)
    }catch (err){
        console.error('Error Fetching Animals')
        res.status(500).json({ error: err.message })
    }
})

//     Fetch single animal by ID

app.get('/animals/:id', async (req,res) => {
    try{
        const animal = await Animal.findById(req.params.id)
        if(!animal) {
            return res.status(404).json({ message: "Animal Not Found"})
        }
        res.json(animal)
    }catch (err) {
        console.error('Error Fetching Animal', err)
        res.status(500).json({ error: err.message})
    }
})

app.listen(PORT, () => {
    console.log(`Server Running on Port ${PORT}`);
});

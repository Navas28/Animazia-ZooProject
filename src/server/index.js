const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Stripe = require("stripe");
const multer = require("multer")
const path = require("path")
require("dotenv").config();
const Animal = require("../../models/AnimalSchema");
const Blog = require("../../models/BlogSchema");
const Contact = require("../../models/ContactSchema")
const JobApplication = require("../../models/JobApplicationSchema")
const EventRegistration = require("../../models/EventRegistrationSchema")
const Subscriber = require("../../models/Subscriber")

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json()); // Middleware
app.use("/uploads", express.static("uploads"));
app.use(express.urlencoded({ extended: true }));

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

mongoose
    .connect(process.env.MONGODB_URI, {
        dbName: "WildAnimals", 
    })
    .then(() => console.log("Mongo Db Connected"))
    .catch((err) => console.log("Mongo Db Connection Error", err));

//    Contact Form Data Storing Using Mongo DB

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

app.get("/animals", async (req, res) => {
    try {
        const animals = await Animal.find();
        res.json(animals);
    } catch (err) {
        console.error("Error Fetching Animals");
        res.status(500).json({ error: err.message });
    }
});

//     Fetch single animal by ID

app.get("/animals/:id", async (req, res) => {
    try {
        const animal = await Animal.findById(req.params.id);
        if (!animal) {
            return res.status(404).json({ message: "Animal Not Found" });
        }
        res.json(animal);
    } catch (err) {
        console.error("Error Fetching Animal", err);
        res.status(500).json({ error: err.message });
    }
});

//    Fetch all Blogs

app.get("/blogs", async (req, res) => {
    try {
        const blogs = await Blog.find();
        res.json(blogs);
    } catch (err) {
        console.error("Errpr fetching", err);
        res.status(500).json({ error: err.message });
    }
});

app.get("/blogs/:id", async (req, res) => {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ message: "Blog not found" });
    res.json(blog);
});


//     Job Application form

const storage = multer.diskStorage({
    destination: (req,file,callback) => {
        callback(null, "uploads/")
    },
    filename: (req,file,callback) => {
        callback(null, Date.now() + path.extname(file.originalname))
    }
});

const upload = multer({
    storage,
    limits: { fileSize: 2 * 1024 * 1024}, // 2MB
    fileFilter: (req,file,callback) => {
        const allowedTypes = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"]
        if(allowedTypes.includes(file.mimetype)){
            callback(null, true)
        } else{
            callback(new Error("Only PDF/DOCX files are allowed!"))
        }
    }
})

app.post("/job-apply", upload.single("resume"), async(req,res) => {
    try {

        if(!req.file){
            return res.status(400).json({success: false, message: "Resume file is required"})
        }
        const newApplication = new JobApplication({
            ...req.body,
            resume: req.file.path
        })
        await newApplication.save()
        res.status(201).json({ success: true, message: "Job Application Submitted"})
    } catch (error) {
        res.status(400).json({ success: false, message: error.message})
    }
})

//  Event Booking

app.post("/event-register", async (req, res) => {
    try {
      const { name, email, phone, participants } = req.body;
      if (!name || !email || !phone || !participants) {
        return res.status(400).json({ error: "All fields are required" });
      }
  
      const newEventRegistration = new EventRegistration({
        name,
        email,
        phone,
        participants,
      });
      await newEventRegistration.save();
      res.status(201).json({ message: "Registration Successful" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

//   Donation 

app.post("/donate", async (req, res) => {
    try {
      const { amount } = req.body;
  
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: [
          {
            price_data: {
              currency: "inr",
              product_data: { name: "Animazia Donation" },
              unit_amount: amount * 100,
            },
            quantity: 1,
          },
        ],
        mode: "payment",
        success_url: "http://localhost:5173/success",
        cancel_url: "http://localhost:5173/cancel",
      });
  
      res.json({ url: session.url });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

//  Email Subscription

app.post("/subscribe", async (req,res) => {
    const {email} = req.body;

    if(!email) return res.status(400).json({message: "Email is required"})

        try {
            const emailExists = await Subscriber.findOne({email})
            if(emailExists) return res.json({message: "Already subscribed"})

                await Subscriber.create({email})
                res.json({message: "Subscribed successfully"})
        } catch (error) {
            res.status(500).json({message: "Error subscribing"})
        }
})

app.listen(PORT, () => {
    console.log(`Server Running on Port ${PORT}`);
});

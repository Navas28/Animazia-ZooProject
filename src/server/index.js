import express from "express";
import cors from "cors";
import Stripe from "stripe";

const stripe = new Stripe(
    "sk_test_51R290bB6eXsSQ3XyvI4ZZDMdFDFz9wiHHpmLRFH9AldQkZbZdfoINhybSriQONaRSPirinNKaiPIng9ocizZT48P00GPUU8uVA"
);

const app = express();

app.use(cors());
app.use(express.json()); // Middleware 

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

app.listen(3200, () => {
    console.log("Server Running on Port 3200");
});


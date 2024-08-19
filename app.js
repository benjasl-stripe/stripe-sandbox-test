// app.js
require('dotenv').config(); // Load environment variables from .env file
const express = require('express');
const Stripe = require('stripe');
const app = express();
const port = process.env.PORT || 3000;
// Initialize Stripe with the Sandbox API key from the environment variable
const stripe = Stripe(process.env.STRIPE_API_KEY);
// Middleware to parse JSON requests
app.use(express.json());
// Example route to create a payment intent
// Example route to create a payment intent
app.post('/create-payment-intent', async (req, res) => {
   const { amount, currency } = req.body;
   try {
       const paymentIntent = await stripe.paymentIntents.create({
           amount: amount,
           currency: currency,
       });
	res.status(200).json({ 
       clientSecret: paymentIntent.client_secret
      });
   } catch (error) {
    console.error('Error creating payment intent:', error);
    res.status(500).json({ error: error.message });
   }
})
// Start the server
app.listen(port, () => {
   console.log(`Server is running on http://localhost:${port}`);
});


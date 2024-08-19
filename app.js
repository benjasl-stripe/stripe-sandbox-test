// app.js
require('dotenv').config();
const express = require('express');
const Stripe = require('stripe');

const app = express();
const port = process.env.PORT || 3000;

// Initialize Stripe with the API key from the environment variable
const stripe = Stripe(process.env.STRIPE_API_KEY);

// Middleware to parse JSON requests
app.use(express.json());

app.get('/account', async (req, res) => {
   try {
       const account = await stripe.accounts.retrieve();
       res.status(200).json(account);
   } catch (error) {
       console.error('Error retrieving account:', error);
       res.status(500).json({ error: error.message });
   }
});

// Start the server only if this file is run directly
if (require.main === module) {
    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    });
}

// Export the app for testing
module.exports = app; // Ensure this line is present at the end
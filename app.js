// app.js

/**
 * @file This file contains the implementation of an Express server that interacts with the Stripe API.
 * @module app
 */

require('dotenv').config();
const express = require('express');
const Stripe = require('stripe');

const app = express();
const port = process.env.PORT || 3000;

// Initialize Stripe with the API key from the environment variable
const stripe = Stripe(process.env.STRIPE_API_KEY);

// Middleware to parse JSON requests
app.use(express.json());

/**
 * Route to create a payment intent.
 * @name POST /create-payment-intent
 * @function
 * @async
 * @param {Object} req - The request object.
 * @param {Object} req.body - The request body.
 * @param {number} req.body.amount - The amount of the payment.
 * @param {string} req.body.currency - The currency of the payment.
 * @param {Object} res - The response object.
 * @returns {Object} The response object with the client secret of the payment intent.
 */
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
});

/**
 * Route to retrieve the Stripe account.
 * @name GET /account
 * @function
 * @async
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} The response object with the Stripe account information.
 */
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

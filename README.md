# Stripe API Express Server Sandboxes example


This is an Express server implementation that interacts with the Stripe API.

## Prerequisites

Before running this application, make sure you have the following:

- Node.js installed on your machine
- Stripe API key

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/your-repo.git
   ```

2. Install the dependencies:

   ```bash
   cd your-repo
   npm install
   ```

3. Set up environment variables:

   - Create a `.env` file in the root directory of the project.
   - Add the following variables to the `.env` file:

     ```plaintext
     PORT=3000
     STRIPE_API_KEY=your-stripe-api-key
     ```

4. Start the server:

   ```bash
   npm start
   ```

## Usage

### Create a Payment Intent

Send a POST request to `/create-payment-intent` with the following JSON payload:

// __tests__/app.test.js
const request = require('supertest'); // For making HTTP requests in tests
const app = require('../app'); // Adjust the path as necessary
require('dotenv').config(); // Load environment variables

describe('Stripe Sandbox Integration', () => {
    beforeAll(() => {
        // Ensure the environment variables are set
        expect(process.env.STRIPE_API_KEY).toBeDefined();
        expect(process.env.STRIPE_PUBLISHABLE_KEY).toBeDefined();
    });

     // New test: Verify GET request to Stripe account
     test('GET /account should return account details from Stripe', async () => {
        const response = await request(app).get('/account');
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('id'); // Check for the existence of an account ID
    });
});
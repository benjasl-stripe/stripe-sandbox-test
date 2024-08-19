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

    // Test endpoint connection to the Sandbox
    test('GET /test-sandbox should confirm connection to the Stripe Sandbox', async () => {
        const response = await request(app).get('/test-sandbox');
        expect(response.status).toBe(200);
        expect(response.text).toBe('Connected to Stripe Sandbox successfully!');
    });

    // Test to check the publishable key
    test('GET /publishable-key should return the correct publishable key', async () => {
        const response = await request(app).get('/publishable-key');
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('publishableKey');
        expect(response.body.publishableKey).toBe(process.env.STRIPE_PUBLISHABLE_KEY);
    });

     // New test: Verify GET request to Stripe account
     test('GET /account should return account details from Stripe', async () => {
        const response = await request(app).get('/account');
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('id'); // Check for the existence of an account ID
    });
});
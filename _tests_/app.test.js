// __tests__/app.test.js
const request = require('supertest'); // For making HTTP requests in tests
const app = require('../app'); // Adjust the path as necessary
require('dotenv').config(); // Load environment variables

describe('Stripe Sandbox Integration', () => {
    beforeAll(() => {
        // Ensure the environment variables are set
        expect(process.env.STRIPE_API_KEY).toBeDefined();
    });

     // New test: Verify GET request to Stripe account
     test('GET /account should return the correct sandbox name', async () => {
        const response = await request(app).get('/account');
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('id'); // Check for the existence of an account ID
        expect(response.body.business_profile).toHaveProperty('name', 'Sandbox'); // Confirm business profile name
        expect(response.body.settings.dashboard).toHaveProperty('display_name', 'dev-sandbox'); // Check for display_name
        // Output the name of the sandbox
        console.log('Sandbox Name:', response.body.settings.dashboard.display_name);
    });
});
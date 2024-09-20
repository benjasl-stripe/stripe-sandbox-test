# Stripe sandbox test

A Simple Stripe integration using Node.js Express. 

This example includes a deployment [workflow](/.github/workflows/ci.yml) that runs a [test](/_tests_/app.test.js) on each commit to check that the Stripe API is associated with a Stripe Sandbox environment named "dev-sandbox".
Read more about Stripe sandboxes in this [Stripe.dev blog post](https://stripe.dev/blog/avoiding-test-mode-tangles-with-stripe-sandboxes).

![Stripe Sandboxes](/resources/sandbox.png)

## Prerequisites

Before running this application, make sure you have the following:

- Node.js installed on your machine
- Stripe API key


### How to Find a Sandbox Key

The following steps show you how to find a sandbox key:

1. Visit the [Stripe Sandbox Dashboard](https://dashboard.stripe.com/sandboxes) to view a complete list of all the sandboxes in your account, or choose the account dropdown from the top left corner of the dashboard.

2. Choose the sandbox you wish to gain programmatic access to, and then select **Manage API keys** from the sandbox welcome page.

3. From the API Keys dashboard, you can reveal, revoke, and create API keys. Check the documentation to learn how to manage API keys. To see the API key for your Sandbox environment, choose **Reveal test Key**.


## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/benjasl-stripe/stripe-sandbox-test.git
   ```

2. Install the dependencies:

   ```bash
   cd stripe-sandbox-test
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
```bash
curl -X POST http://localhost:3000/create-payment-intent \
-H "Content-Type: application/json" \
-d '{"amount": 1000, "currency": "usd"}'
```


### Set Up GitHub Secrets

When using GitHub Actions for CI/CD, manage sensitive data securely using GitHub Secrets:

1. Go to your GitHub repository.
2. Choose **Settings** from the toolbar.
3. On the left sidebar, navigate to **Secrets and variables** and choose **Actions**, then select **New repository secret**.
4. Add your secrets one at a time.

### Reference Secrets in GitHub Actions
GitHub Actions allows you to automate your workflows and CI/CD processes. This [workflow](/.github/workflows/ci.yml) automates the process of testing the application whenever changes are pushed to the main branch. It checks out the latest code, sets up the necessary environment, installs any required dependencies, and runs tests that interact with Stripe to verify that the code is executing in the correct sandbox. This helps ensure the integrity and functionality of the application in a continuous and efficient manner, while maintaining secure practices in handling sensitive credentials like API keys:

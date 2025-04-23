# Portfolio Website - Backend API

This is the backend API for my portfolio website. It handles contact form submissions and email notifications.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [API Endpoints](#api-endpoints)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Deployment](#deployment)
- [Contact](#contact)

## Features

- RESTful API for contact form submissions
- Email notification system using Nodemailer
- CORS configuration for secure frontend-backend communication
- Environment variable configuration for secure credentials

## Technologies Used

- Node.js
- Express.js
- Nodemailer for email functionality
- CORS for cross-origin resource sharing
- Dotenv for environment variable management

## API Endpoints

### Root Endpoint
- `GET /`: Returns a welcome message to confirm the API is running

### Contact Form
- `POST /send-email`: Submits contact form data and sends an email notification
  - Request body:
    ```json
    {
      "name": "Your Name",
      "email": "your.email@example.com",
      "message": "Your message here"
    }
    ```
  - Response:
    ```json
    {
      "message": "Email sent successfully"
    }
    ```

## Installation

To run the backend locally, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/Bhuvan-Patil-24/portfolio-backend.git
   ```

2. Navigate to the backend directory:
   ```
   cd portfolio-backend
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Create a `.env` file in the root of the backend directory with the required environment variables (see below)

5. Start the server:
   ```
   npm start
   ```

## Environment Variables

Create a `.env` file in the root of the backend directory with the following variables:

```
PORT=5000
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

Notes:
- For Gmail, you'll need to use an "App Password" instead of your regular password
- You can generate an App Password in your Google Account settings under Security > 2-Step Verification > App passwords

## Deployment

The backend is deployed on Vercel. To deploy your own version:

1. Push your code to a GitHub repository
2. Connect your repository to Vercel
3. Configure the build settings:
   - Framework Preset: Node.js
   - Build Command: None (or `npm install`)
   - Output Directory: None
   - Install Command: `npm install`
4. Set the environment variables (EMAIL_USER and EMAIL_PASS)
5. Deploy!

## Contact

If you have any questions, feel free to reach out to me:

- Email: [patilbhuvan27@gmail.com](mailto:patilbhuvan27@gmail.com)
- LinkedIn: [Bhuvan Patil](https://www.linkedin.com/in/bhuvan-patil)
- Twitter: [@b1_legend](https://x.com/b1_legend)

Thank you for checking out my portfolio website backend! 

# MERN E-commerce Website

A simple e-commerce website built with the MERN stack (MongoDB, Express, React, Node.js).

## Features

- Product browsing with categories and search
- Shopping cart functionality
- Checkout process with payment integration
- Responsive design for all devices

## Tech Stack

- **Frontend**: React.js with TypeScript, Tailwind CSS
- **Backend**: Node.js with Express
- **Database**: MongoDB
- **Payment**: Stripe integration

## Project Structure

The project is divided into two main folders:

- `frontend`: Contains the React application
- `backend`: Contains the Express server and MongoDB integration

## Setup Instructions

### Frontend Setup

```bash
cd frontend
npm install
npm start
```

### Backend Setup

```bash
cd backend
npm install
npm start
```

## Environment Variables

### Backend

Create a `.env` file in the `backend` directory with the following variables:

```
PORT=5005
MONGODB_URI=mongodb://localhost:27017/ecommerce
```

### Frontend

Create a `.env` file in the `frontend` directory with the following variables:

```
VITE_API_URL=http://localhost:5005/api
```

## API Documentation

### Products

- `GET /api/products`: Get all products
- `GET /api/products/:id`: Get a specific product
- `GET /api/products/category/:category`: Get products by category

### Orders

- `POST /api/orders`: Create a new order
- `GET /api/orders/:id`: Get a specific order

## License

MIT
### Testing Github Actions Workflow
- This line is for testing purpose.
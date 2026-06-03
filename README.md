# The Artisan Kiln — Interactive Tile Ordering Application

Frontend implementation of an interactive ceramic tile ordering form based on the provided desktop and mobile designs.

## Demo

**Live Demo:** [Add Demo URL]

## Repository

**GitHub:** [Add Repository URL]

---

## Overview

The application allows users to:

- Browse available tile collections
- Add and remove tiles from the shopping cart
- Change item quantities
- Automatically calculate order totals
- Manage customer information
- Select a payment method
- Create tile layouts using an interactive design grid (desktop version)
- Persist cart and user data between sessions

The interface is fully responsive and adapts to desktop and mobile layouts.

---

## Note

The original specification requested **Next.js**. This solution was implemented using **React + Vite + TypeScript** while preserving all required frontend functionality, state management, responsiveness, and business logic described in the assignment.

The project structure and component architecture were designed in a way that allows migration to Next.js with minimal effort if required.

## Tech Stack

### Core

- React 19
- TypeScript
- Vite

### State Management

- Redux Toolkit
- React Redux

### Styling

- Tailwind CSS v4

### Routing

- React Router v7

---

## Features

### Shopping Cart

- Add tiles to cart
- Remove items from cart
- Update tile quantities
- Automatic subtotal calculation
- Shipping calculation based on order amount
- Grand total calculation

### Design Tool (Desktop)

- Interactive design grid
- Tile selection and placement
- Global state management via Redux

### Checkout Form

- Customer information form
- Payment method selection:
  - Credit / Debit Card
  - PayPal
  - Apple Pay
  - Bank Transfer

### Data Persistence

- Cart state is automatically saved to Local Storage
- State is restored when the application is reopened

---

## Business Logic

### Order Calculation

Subtotal:

```text
Subtotal = Σ (Quantity × Unit Price)
```

Shipping:

```text
If Subtotal > $500:
    Shipping = $0.00
Else:
    Shipping = $25.00
```

Grand Total:

```text
Grand Total = Subtotal + Shipping
```

---

## State Management

Redux Toolkit is used as a centralized state management solution.

### Cart Store

Stores:

- Cart items
- Quantities
- Subtotal
- Shipping
- Grand Total

Actions:

- initializeCart
- addItem
- removeItem
- updateQuantity
- clearCart

### User Store

Stores:

- User ID
- Name
- Surname

Actions:

- initializeUser
- updateCredentials

---

## Local Storage

Application state persists between browser sessions.

Stored entities:

- Shopping Cart

On application startup:

1. Data is loaded from Local Storage
2. Redux store is initialized
3. Application state is restored

---

## Installation

Clone repository:

```bash
git clone <repository-url>
```

Navigate to project folder:

```bash
cd tile-expert
```

Install dependencies:

```bash
npm install
```

---

## Development

Run development server:

```bash
npm run dev
```

Application will be available at:

```text
http://localhost:5173
```

---

## Build

Create production build:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

---

## Available Scripts

```bash
npm run dev
```

Starts development server.

```bash
npm run build
```

Builds application for production.

```bash
npm run preview
```

Runs production preview server.

```bash
npm run lint
```

Runs ESLint.

---

## Design Notes

The visual style follows the provided mockups:

- Custom Tailwind color palette
- Custom typography
- Responsive layout
- Desktop and mobile adaptations
- Ceramic workshop inspired UI

---

## Future Improvements

- Backend integration
- Order submission API
- Authentication and user accounts

---

## Author

Test assignment implementation for **tile.expert**.

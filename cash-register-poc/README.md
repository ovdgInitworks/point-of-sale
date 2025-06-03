# Cash Register POC

This project is a proof-of-concept (POC) for a **Cash Register System** built using **React**, **TypeScript**, and **Vite**. The application allows users to select products, specify quantities using a calculator-like interface, and manage a shopping cart. It also calculates the total amount including VAT for each product.

---

## Features

### Product Selection
- Users can select products from a list of buttons.
- The currently selected product is visually highlighted.

### Quantity Specification
- Users can specify the quantity using a calculator-like interface.
- Includes buttons for:
  - Adding digits.
  - Removing the last digit.
  - Clearing the entire quantity.

### Shopping Cart
- Users can add selected products and quantities to the shopping cart.
- Items in the cart can be removed individually.
- The total amount is calculated, including VAT for each product.

---

## Project Structure

cash-register-poc
├── public
│   └── index.html          # HTML entry point
├── src
│   ├── App.tsx             # Main React component
│   ├── App.css             # Styling for the application
│   ├── main.tsx            # Application entry point
│   ├── components          # Folder for reusable components (future expansion)
│   └── types               # Folder for TypeScript type definitions (future expansion)
├── package.json            # Project dependencies and scripts
├── tsconfig.json           # TypeScript configuration
├── vite.config.ts          # Vite configuration
└── README.md               # Project documentation

---

## Installation

To set up the project locally, follow these steps:

1. Clone the repository:
   git clone https://github.com/ovdgInitworks/point-of-sale.git

2. Navigate to the project directory:
   cd cash-register-poc

3. Install dependencies:
   npm install

4. Start the development server:
   npm run dev

---

## Scripts

- npm run dev: Starts the development server.
- npm run build: Builds the project for production.
- npm run preview: Previews the production build.

---

## Technologies Used

- React: JavaScript library for building user interfaces.
- TypeScript: Strongly typed programming language for JavaScript.
- Vite: Fast build tool and development server.
- CSS: Styling for the application.

---

## Future Improvements

- Add persistent storage for the shopping cart (e.g., localStorage or a backend API).
- Expand the product list dynamically from an external source.
- Improve styling and responsiveness for mobile devices.
- Add unit tests for components and functionality.

---

## License

This project is licensed under the MIT License. See the LICENSE file for details.

---

## Author

Developed by Initworks. Feel free to reach out for questions or suggestions!

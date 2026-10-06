# VAIDURE - Premium Hotel Amenities & B2B Solutions

VAIDURE is a modern, responsive web application built for a luxury hotel amenities and personal care brand. It showcases premium toiletries, bespoke private label customization services, sustainable eco-materials, and refill programs designed specifically for the hospitality industry and healthcare facilities.

## 🌟 Features

- **Premium Aesthetics:** Elegant, luxury-focused UI design featuring a cohesive color palette of deep blacks, rich creams, and gold accents.
- **Dynamic Animations:** Smooth scroll animations, parallax hero images, floating elements, and reveal-on-scroll transitions to engage users.
- **Responsive Design:** Fully responsive layout optimized for desktop, tablet, and mobile viewing, providing a seamless user experience across all devices.
- **B2B Solutions Portal:** Dedicated pages for different business segments including Boutique Hotels, Hospitals & Clinics, and Private Label Customization.
- **Sustainability Focus:** Dedicated sections highlighting eco-friendly materials, PCR plastics, aluminum bottles, and zero-waste refill programs.
- **Component-Driven Architecture:** Built with reusable React components (like `PageHero`) for high maintainability and visual consistency.

## 💻 Tech Stack

- **Framework:** [React 18](https://react.dev/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Routing:** [React Router](https://reactrouter.com/)
- **Styling:** Vanilla CSS with CSS Variables for consistent theming (`var(--gold)`, `var(--cream)`, etc.)

## 🚀 Getting Started

To run this project locally on your machine, follow these steps:

### Prerequisites
Make sure you have Node.js installed on your machine.

### Installation

1. Navigate into the project directory (if not already there):
   ```bash
   cd VR
   ```
2. Install the required dependencies:
   ```bash
   npm install
   ```

### Development

To start the local development server:
```bash
npm run dev
```
The application will be available at `http://localhost:5173` (or the port specified in your terminal).

### Building for Production

To create an optimized production build:
```bash
npm run build
```
This will generate a `dist` directory with the compiled, minified assets ready for deployment.

## 📂 Project Structure

- `/src/pages/`: Contains all the page-level components (Home, B2B, Customization, Sustainability, HospitalAmenitiesB2B, etc.).
- `/src/components/`: Reusable UI components (Navbar, Footer, PageHero, ProductsCarousel, etc.).
- `/public/images/`: Static assets, images, and brand photography.
- `/src/index.css`: Global styles, typography, keyframe animations, and color variables.

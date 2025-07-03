# alx-listing-app


A modern Airbnb clone built with Next.js, TypeScript, and Tailwind CSS. This application provides a responsive and user-friendly platform for property listings with a clean, modern design.

## Project Overview

The ALX Listing App is designed to showcase property listings in an attractive, user-friendly interface. It features a responsive design that works seamlessly across desktop and mobile devices, with components built for reusability and maintainability.

### Key Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **TypeScript Integration**: Type-safe development with comprehensive interfaces
- **Component Architecture**: Reusable Card and Button components
- **Modern UI**: Clean, professional design inspired by Airbnb
- **Performance Optimized**: Built with Next.js for optimal performance

## Project Structure

```
alx-listing-app/
├── components/
│   └── common/
│       ├── Card.tsx          # Reusable card component for property listings
│       └── Button.tsx        # Reusable button component with variants
├── interfaces/
│   └── index.ts              # TypeScript interfaces and type definitions
├── constants/
│   └── index.ts              # Application constants and configuration
├── pages/
│   ├── _app.tsx              # Next.js app component
│   ├── _document.tsx         # Next.js document component
│   └── index.tsx             # Main homepage with listings
├── public/
│   └── assets/               # Static assets (images, icons, etc.)
├── styles/
│   └── globals.css           # Global CSS with Tailwind imports
└── README.md                 # Project documentation
```

### Directory Explanations

- **`components/common/`**: Houses reusable UI components used throughout the application
- **`interfaces/`**: Contains TypeScript interfaces for type safety and better development experience
- **`constants/`**: Stores application-wide constants, configuration values, and reusable text
- **`public/assets/`**: Static files including images, icons, and other assets
- **`pages/`**: Next.js pages using the Pages Router (not App Router)

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/alx-listing-app.git
   cd alx-listing-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

### Available Scripts

- `npm run dev` - Starts the development server
- `npm run build` - Builds the application for production
- `npm run start` - Starts the production server
- `npm run lint` - Runs ESLint to check code quality

## Technology Stack

- **Framework**: Next.js 14 (Pages Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Linting**: ESLint
- **Package Manager**: npm

## Component Architecture

### Card Component (`components/common/Card.tsx`)

The Card component is designed to display property information in a visually appealing format. It includes:
- Property image with Next.js Image optimization
- Title, location, and rating display
- Price information
- Click handlers for navigation
- Responsive design with hover effects

### Button Component (`components/common/Button.tsx`)

A versatile button component with multiple variants:
- **Variants**: Primary, Secondary, Outline
- **Sizes**: Small, Medium, Large
- **States**: Normal, Disabled, Loading
- **Accessibility**: Full keyboard navigation support

## Development Guidelines

### Code Style

- Follow TypeScript best practices
- Use functional components with hooks
- Implement proper error handling
- Write clean, readable code with meaningful variable names
- Use Tailwind CSS for styling

### Adding New Components

1. Create the component in the appropriate directory
2. Add TypeScript interfaces in `interfaces/index.ts`
3. Export any reusable constants in `constants/index.ts`
4. Follow the existing naming conventions

## Deployment

The application is ready for deployment on platforms like Vercel, Netlify, or any platform that supports Next.js applications.

### Build for Production

```bash
npm run build
npm run

# Viraa Website

Official website for the Viraa health and wellbeing monitoring application.

## Project Overview

Viraa is a preventive health monitoring application that analyzes wearable data to detect subtle changes in health patterns, providing advance warning of disruptions to wellbeing.

## Getting Started

### Prerequisites

- Node.js (v18 or higher) - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
- npm or bun

### Installation

```sh
# Clone the repository
git clone <YOUR_GIT_URL>

# Navigate to the project directory
cd viraa-website-v2

# Install dependencies
npm install

# Start the development server
npm run dev
```

The development server will start at `http://localhost:8080`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build in development mode
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Technologies

This project is built with:

- **Vite** - Build tool and dev server
- **TypeScript** - Type safety
- **React** - UI framework
- **React Router** - Routing
- **shadcn/ui** - UI component library
- **Tailwind CSS** - Styling
- **TanStack Query** - Data fetching

## Project Structure

```
src/
├── assets/          # Images and static assets
├── components/      # React components
│   └── ui/         # UI components (shadcn/ui)
├── hooks/          # Custom React hooks
├── lib/            # Utility functions
├── pages/          # Page components
└── App.tsx         # Main app component
```

## Deployment

Build the project for production:

```sh
npm run build
```

The output will be in the `dist/` directory, ready to be deployed to any static hosting service.

## License

Copyright © 2025 Samson GmbH. All rights reserved.

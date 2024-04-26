# Soham Gupta's Portfolio Website

This is the documentation for my portfolio website built using Next.js and styled with Tailwind CSS. The website showcases my skills, projects and experience as a software developer.

## Preview
 
 https://github.com/gupta-soham/Portfolio/assets/97831613/80c271fa-be60-4931-b09b-ca819e4586de

## Live Website
You can access the live [portfolio site here](https://sohamgupta.vercel.app/).

## Table of Contents

- [Technologies Used](#technologies-used)
- [Features](#features)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Components](#components)
- [Context API](#context-api)
- [Styling](#styling)
- [Contributing](#contributing)
- [License](#license)

## Technologies Used

- Next.js
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- React Intersection Observer
- React Icons
- React Vertical Timeline Component
- Resend (for email sending)
- React Email(for styling emails)
- React Hot Toast

## Features

- Responsive design for optimal viewing on various devices
- Smooth scrolling and animations using Framer Motion
- Dynamic navigation with active section highlighting
- Detailed sections for About, Projects, Skills, Experience and Contact
- Contact form with email sending functionality using Resend
- Optimized performance with Next.js features like server-side rendering and code splitting

## Getting Started

### Prerequisites

- Node.js (LTS version recommended)
- npm or yarn (yarn preferred for better performance)

### Cloning the Repository

Start by cloning the repository to your local machine:

```bash
git clone https://github.com/gupta-soham/Portfolio.git
cd portfolio
```

### Installing Dependencies

Install all the required packages using yarn:

```bash
yarn install
```
or `npm install`

### Running the Development Server

To start the development server, run:

```bash
yarn dev
```
or `npm run dev`

Navigate to `http://localhost:3000` to view the app.

### Building for Production

To create a production build, use:

```bash
yarn build
```
or `npm  run build`

The generated static files will be placed in the `/dist` directory.
And to run the production build:

```bash
yarn start
```
or `npm start`

## Project Structure

The project follows a standard Next.js project structure and is a single page website:

- `pages`: Contains the main page of the website
- `components`: Contains reusable React components used throughout the website
- `lib`: Contains utility functions and custom hooks
- `context`: Contains the Context API provider for managing the active header state
- `email`: Contains the email template style component for sending contact form emails
- `public`: Contains static assets like images

## Components

The website is composed of several key components:

- **Header**: Renders the navigation header with dynamic active section highlighting
- **About**: Displays information about my background and skills
- **Projects**: Renders a list of my project cards with descriptions using the `ClientProject` component with animations
- **Skills**: Displays a marquee of my technical skills
- **Experience**: Timeline view of my professional and academic experiences
- **Contact**: Provides a contact form for users to send messages

## Context API

The website uses the Context API for managing the active header state. The `ActiveHeaderContextProvider` component provides the context to the entire application, allowing components to access and update the active header section.

## Styling

The website uses Tailwind CSS for styling. The `tailwind.config.ts` file contains the configuration for Tailwind, including custom styles and animations.

## Contributing

Contributions to my portfolio website are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is open-source and available under the [MIT License](LICENSE) 📜.
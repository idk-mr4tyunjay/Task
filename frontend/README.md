# README.md

## Project Overview

This frontend project is built with React.js and Vite, featuring an admin panel for managing clients, contacts, projects, and newsletters, along with a user panel for displaying various pages, forms, and content. The application uses Axios for API calls, and it includes tools for image compression and cropping.

## Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/idk-mr4tyunjay/hackathon-mruthunjay.git
   cd frontend
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Run the Application**
   - For development:
     ```bash
     npm run dev
     ```
   - For production build:
     ```bash
     npm run build
     ```

## Project Structure

```plaintext
.
├───node_modules
├───.gitignore
├───package-lock.json
├───package.json
├───README.md
├───public
│   └───vite.svg
│
└───src
    ├───App.css
    ├───App.jsx
    ├───index.css
    ├───main.jsx
    │
    ├───assets
    │   ├───icons
    │   ├───images
    │   └───shapes
    │
    ├───components
    │   ├───adminPanel
    │   │   ├───ClientManager.jsx
    │   │   ├───ContactManager.jsx
    │   │   ├───ImageCropper.jsx
    │   │   ├───NewsManager.jsx
    │   │   └───ProjectManager.jsx
    │   │
    │   └───userPanel
    │       ├───clients
    │       │   ├───Card.jsx
    │       │   └───Clients.jsx
    │       │
    │       ├───contactForm
    │       │   ├───Contact.jsx
    │       │   └───Form.jsx
    │       │
    │       ├───navbar
    │       │   └───Navbar.jsx
    │       │
    │       ├───newsletter
    │       │   └───Footer.jsx
    │       │
    │       ├───pages
    │       │   ├───About.jsx
    │       │   ├───Promo.jsx
    │       │   ├───Services.jsx
    │       │   └───shapes
    │       │       ├───Shape1.jsx
    │       │       ├───Shape2.jsx
    │       │       └───Shape3.jsx
    │       │
    │       └───projects
    │           ├───Card.jsx
    │           └───Projects.jsx
    │
    ├───services
    │   ├───admin-clients.js
    │   ├───admin-contact.js
    │   ├───admin-news.js
    │   └───admin-projects.js
    │
    ├───static
    │   └───navbar.json
    │
    └───views
        ├───AdminPanel.jsx
        └───UserPanel.jsx
```

## Available Scripts

- **`npm run dev`**: Starts the development server.
- **`npm run build`**: Builds the application for production.
- **`npm run lint`**: Runs ESLint for code quality checks.

## Dependencies

- **React**: Core library for building the user interface.
- **React DOM**: Library for working with the DOM in React applications.
- **React Router DOM**: Used for routing and navigation.
- **Axios**: For making HTTP requests to the backend.
- **Compressor.js**: For compressing images before upload.

## Dev Dependencies

- **Vite**: Build tool for running the development server and bundling the application.
- **ESLint**: Linter for maintaining code quality.
- **ESLint Plugins**: Includes plugins for React and React Hooks.

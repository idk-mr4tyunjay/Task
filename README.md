# README.md

## Full-Stack Project Overview

This project combines a powerful backend and a dynamic frontend, seamlessly integrated to deliver a comprehensive solution. The backend, built with Node.js, Express, and MongoDB, manages data through four models: `Client`, `Project`, `Newsletter`, and `Contact`. The frontend, crafted with React.js and Vite, provides an interactive interface with features like image compression and cropping.

---

## Table of Contents

1. [Features](#features)
2. [Project Structure](#project-structure)
   - [Backend](#backend)
   - [Frontend](#frontend)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Screenshots & GIFs](#screenshots--gifs)
6. [License](#license)
7. [Author](#author)

---

## Features

- **Comprehensive CRUD Operations:** Manage clients and projects with full CRUD capabilities.
- **Newsletter & Contact Forms:** Create and retrieve operations for newsletter subscriptions and contact form submissions.
- **Image Handling:** Frontend support for image compression and cropping.
- **Admin Panel:** A dedicated section for administrators to manage clients, projects, and user interactions.

---

## Project Structure

```plaintext
.
├───backend
│   ├───node_modules
│   ├───.gitignore
│   ├───package-lock.json
│   ├───package.json
│   ├───README.md
│   ├───server.js
│   └───models
│       ├───Client.js
│       ├───ContactForm.js
│       ├───Newsletter.js
│       └───Project.js
│
└───frontend
    ├───node_modules
    ├───.gitignore
    ├───package-lock.json
    ├───package.json
    ├───README.md
    ├───public
    │   └───vite.svg
    └───src
        ├───App.css
        ├───App.jsx
        ├───index.css
        ├───main.jsx
        ├───assets
        │   ├───icons
        │   ├───images
        │   └───shapes
        ├───components
        │   ├───adminPanel
        │   │   ├───ClientManager.jsx
        │   │   ├───ContactManager.jsx
        │   │   ├───ImageCropper.jsx
        │   │   ├───NewsManager.jsx
        │   │   └───ProjectManager.jsx
        │   └───userPanel
        │       ├───clients
        │       ├───contactForm
        │       ├───navbar
        │       ├───newsletter
        │       ├───pages
        │       └───projects
        ├───services
        ├───static
        └───views

```
---

## Installation

### Backend Setup

1. **Navigate to the backend directory:**
   ```bash
   cd backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Create a `.env` file:**
   ```plaintext
   MONGODB_URI=your_mongodb_uri
   ```

4. **Run the server:**
   - Development: `npm run dev`
   - Production: `npm start`

### Frontend Setup

1. **Navigate to the frontend directory:**
   ```bash
   cd frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the application:**
   - Development: `npm run dev`
   - Production build: `npm run build`
   - Preview build: `npm run preview`

---

## Usage

- **Admin Panel:** Manage clients, projects, newsletters, and contacts.
- **User Panel:** Navigate through different sections like Services, About, and Promo.
- **Image Management:** Compress and crop images before uploading them.

---

## Screenshots & GIFs

### User Panel
![User Panel](https://res.cloudinary.com/dqhtnjrzm/image/upload/v1724684825/Screenshot_2024-08-26_203641_tba9kv.png)

---

## License

This project is licensed under the ISC License.

## Author

[Your Name]

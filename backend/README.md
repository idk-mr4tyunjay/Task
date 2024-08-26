# Backend

## Project Overview

This backend project is built with Node.js and Express.js, providing CRUD (Create, Read, Update, Delete) operations for `Client` and `Project` models, and create and retrieve operations for `Newsletter` and `Contact` models. The backend communicates with a MongoDB database using Mongoose.

## Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/idk-mr4tyunjay/hackathon-mruthunjay.git
   cd backend
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Environment Variables**
   Create a `.env` file in the root directory and add your MongoDB URI and PORT:

   ```plaintext
   MONGODB_URI=your_mongodb_uri
   PORT=4000
   ```

4. **Run the Server**
   - For development (with automatic restarts):
     ```bash
     npm run dev
     ```
   - For production:
     ```bash
     npm start
     ```

## Project Structure

```plaintext
.
├───node_modules
├───.env
├───.gitignore
├───package-lock.json
├───package.json
├───README.md
├───server.js
└───models
    ├───Client.js
    ├───ContactForm.js
    ├───Newsletter.js
    ├───Project.js
```

### Models

- **Client.js:** Manages client information with full CRUD functionality.
- **Project.js:** Manages project details with full CRUD functionality.
- **Newsletter.js:** Handles newsletter subscriptions with create and retrieve functionality.
- **ContactForm.js:** Manages contact form submissions with create and retrieve functionality.

## API Endpoints

### Client

- **Create Client:** `POST /api/clients`
- **Retrieve All Clients:** `GET /api/clients`
- **Update Client:** `PUT /api/clients/:id`
- **Delete Client:** `DELETE /api/clients/:id`

### Project

- **Create Project:** `POST /api/projects`
- **Retrieve All Projects:** `GET /api/projects`
- **Update Project:** `PUT /api/projects/:id`
- **Delete Project:** `DELETE /api/projects/:id`

### Newsletter

- **Subscribe to Newsletter:** `POST /api/news`
- **Retrieve Subscriptions:** `GET /api/news`

### Contact

- **Submit Contact Form:** `POST /api/contact`
- **Retrieve Contacts:** `GET /api/contact`

## Additional Information

- **Development Dependencies:**

  - `nodemon` is used for hot-reloading during development.

- **Cross-Origin Resource Sharing (CORS):**
  - CORS is enabled to allow cross-origin requests.

## License

This project is licensed under the ISC License.

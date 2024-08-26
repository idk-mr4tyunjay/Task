require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const Project = require("./models/Project");
const Client = require("./models/Client");
const Contact = require("./models/ContactForm");
const News = require("./models/Newsletter");

const app = express();

const mongoURI = process.env.MONGODB_URI;
const PORT = process.env.PORT || 5000;

app.use(cors());
// app.use(express.json());
app.use(express.json({ limit: '10mb' }));
mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Project Routes

// Create a new project
app.post("/api/projects", async (req, res) => {
  try {
    const newProject = new Project(req.body);
    const savedProject = await newProject.save();
    res.json(savedProject);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// Get all projects
app.get("/api/projects", async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// Get a single project by ID
app.get("/api/projects/:id", async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    res.json(project);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// Update a project by ID
app.put("/api/projects/:id", async (req, res) => {
  try {
    const updatedProject = await Project.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedProject);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// Delete a project by ID
app.delete("/api/projects/:id", async (req, res) => {
  try {
    await Project.findByIdAndDelete(req.params.id);
    res.json({ message: "Project deleted" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// Client Routes

// Create a new Client
app.post("/api/clients", async (req, res) => {
  try {
    const newClient = new Client(req.body);
    const savedClient = await newClient.save();
    res.json(savedClient);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// Get all Clients
app.get("/api/clients", async (req, res) => {
  try {
    const Clients = await Client.find();
    res.json(Clients);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// Get a single Client by ID
app.get("/api/clients/:id", async (req, res) => {
  try {
    const Client = await Client.findById(req.params.id);
    res.json(Client);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// Update a Client by ID
app.put("/api/clients/:id", async (req, res) => {
  try {
    const updatedClient = await Client.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedClient);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// Delete a Client by ID
app.delete("/api/clients/:id", async (req, res) => {
  try {
    await Client.findByIdAndDelete(req.params.id);
    res.json({ message: "Client deleted" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// contact Routes

// Create a new contact
app.post("/api/contact", async (req, res) => {
  try {
    const newContact = new Contact(req.body);
    const savedContact = await newContact.save();
    res.json(savedContact);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// Get all contacts
app.get("/api/contact", async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});
// news Routes

// Create a new news
app.post("/api/news", async (req, res) => {
  try {
    const newNews = new News(req.body);
    const savedNews = await newNews.save();
    res.json(savedNews);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// Get all news
app.get("/api/news", async (req, res) => {
  try {
    const news = await News.find();
    res.json(news);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

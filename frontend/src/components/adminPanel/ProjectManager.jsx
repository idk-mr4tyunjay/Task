import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProjectManager = () => {
  const [projects, setProjects] = useState([]);
  const [form, setForm] = useState({ id: '', image: '', projectName: '', description: '' });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/projects');
      setProjects(response.data);
    } catch (error) {
      console.error('Error fetching projects:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setForm((prevForm) => ({ ...prevForm, image: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEditing) {
        await axios.put(`http://localhost:4000/api/projects/${form.id}`, form);
      }
      fetchProjects();
      resetForm();
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const handleEdit = (project) => {
    setForm(project);
    setIsEditing(true);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/api/projects/${id}`);
      fetchProjects();
    } catch (error) {
      console.error('Error deleting project:', error);
    }
  };

  const resetForm = () => {
    setForm({ id: '', image: '', projectName: '', description: '' });
    setIsEditing(false);
  };

  return (
    <div>
      <h2 className="mb-4">{isEditing ? 'Update Project' : 'Add New Project'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Project Name</label>
          <input
            type="text"
            className="form-control"
            name="projectName"
            value={form.projectName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            name="description"
            value={form.description}
            onChange={handleInputChange}
            required
          ></textarea>
        </div>
        <div className="mb-3">
          <label className="form-label">Image</label>
          <input
            type="file"
            className="form-control"
            onChange={handleFileChange}
            accept="image/*"
          />
          {form.image && <img src={form.image} alt="Project" className="mt-2" style={{ maxWidth: '200px' }} />}
        </div>
        <button type="submit" className="btn btn-primary">
          {isEditing ? 'Update Project' : 'Add Project'}
        </button>
        {isEditing && (
          <button type="button" className="btn btn-secondary ms-2" onClick={resetForm}>
            Cancel
          </button>
        )}
      </form>

      <h2 className="mt-5">Projects List</h2>
      <div className="list-group">
        {projects.map((project) => (
          <div key={project.id} className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              {project.image && <img src={project.image} alt={project.projectName} style={{ maxWidth: '100px' }} />}
              <h5 className="mt-2">{project.projectName}</h5>
              <p>{project.description}</p>
            </div>
            <div>
              <button className="btn btn-warning btn-sm me-2" onClick={() => handleEdit(project)}>Edit</button>
              <button className="btn btn-danger btn-sm" onClick={() => handleDelete(project.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectManager;

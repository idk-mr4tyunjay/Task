import { useState, useEffect } from 'react';
import Compressor from 'compressorjs';
import { createProject, deleteProject, fetchProjects, updateProject } from '../../services/admin-projects';


const ClientManager = () => {
  const [projects, setProjects] = useState([]);
  const [form, setForm] = useState({ id: '', image: '', projectName: '', description: '', position: '' });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const getProjects = async () => {
      try {
        const projects = await fetchProjects();
        setProjects(projects);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };
    
    getProjects();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      new Compressor(file, {
        quality: 0.8, // Adjust quality as needed
        success(result) {
          const reader = new FileReader();
          reader.onloadend = () => {
            setForm((prevForm) => ({ ...prevForm, image: reader.result }));
          };
          reader.readAsDataURL(result);
        },
        error(err) {
          console.error('Image compression error:', err);
        },
      });
    }
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEditing) {
        await updateProject(form.id, form);
      } else {
        await createProject(form);
      }
      const projects = await fetchProjects();
      setProjects(projects);
      resetForm();
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const handleEdit = (project) => {
    setForm({
      id: project._id,
      image: project.image,
      projectName: project.projectName,
      description: project.description
    });
    setIsEditing(true);
  };
  

  const handleDelete = async (id) => {
    try {
      await deleteProject(id);
      const projects = await fetchProjects();
      setProjects(projects);
    } catch (error) {
      console.error('Error deleting project:', error);
    }
  };

  const resetForm = () => {
    setForm({ id: '', image: '', projectName: '', description: '', position: ''  });
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
              <button className="btn btn-danger btn-sm" onClick={() => handleDelete(project._id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientManager;

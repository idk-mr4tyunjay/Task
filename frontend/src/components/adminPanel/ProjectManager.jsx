import { useState, useEffect, useRef } from "react";
import Compressor from "compressorjs";
import {
  createProject,
  deleteProject,
  fetchProjects,
  updateProject,
} from "../../services/admin-projects";

const ProjectManager = () => {
  const [projects, setProjects] = useState([]);
  const [form, setForm] = useState({
    id: "",
    image: "",
    projectName: "",
    description: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [imageSrc, setImageSrc] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0, width: 100, height: 100 });
  const canvasRef = useRef(null);
  const imgRef = useRef(null);
  useEffect(() => {
    const getProjects = async () => {
      try {
        const projects = await fetchProjects();
        setProjects(projects);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    getProjects();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };
  // const handleImageCropped = (croppedImage) => {
  //   setForm((prevForm) => ({ ...prevForm, image: croppedImage }));
  // };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      new Compressor(file, {
        quality: 0.8, // Adjust the quality from 0 (worst) to 1 (best)
        success: (compressedResult) => {
          const reader = new FileReader();
          reader.onload = () => {
            setImageSrc(reader.result);
          };
          reader.readAsDataURL(compressedResult);
        },
        error(err) {
          console.error("Error during compression:", err.message);
        },
      });
    }
  };
  const handleCrop = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const image = imgRef.current;

    if (!image || !ctx) return;

    // Set canvas dimensions
    canvas.width = crop.width;
    canvas.height = crop.height;

    // Draw cropped image on canvas
    ctx.drawImage(
      image,
      crop.x,
      crop.y,
      crop.width,
      crop.height,
      0,
      0,
      crop.width,
      crop.height
    );

    // Convert canvas to base64 and set form image
    const croppedImage = canvas.toDataURL();
    setForm((prevForm) => ({ ...prevForm, image: croppedImage }));
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
      console.error("Error submitting form:", error);
    }
  };

  const handleEdit = (project) => {
    setForm({
      id: project._id,
      image: project.image,
      projectName: project.projectName,
      description: project.description,
    });
    setIsEditing(true);
  };

  const handleDelete = async (id) => {
    try {
      await deleteProject(id);
      const projects = await fetchProjects();
      setProjects(projects);
    } catch (error) {
      console.error("Error deleting project:", error);
    }
  };

  const resetForm = () => {
    setForm({ id: "", image: "", projectName: "", description: "" });
    setIsEditing(false);
  };

  return (
    <div
      className="d-flex flex-column align-items-center justify-content-center"
      
    >
      <section className="w-50" id="home">
        <div className="">
          <h2 className="mb-4 text-center">
            {isEditing ? "Update Project" : "Add New Project"}
          </h2>

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
              {imageSrc && (
                <div>
                  <img
                    ref={imgRef}
                    src={imageSrc}
                    alt="Selected"
                    style={{ maxWidth: "100%", maxHeight: "300px" }}
                  />
                  <div>
                    <label className="form-label">Crop X:</label>
                    <input
                      type="number"
                      value={crop.x}
                      onChange={(e) =>
                        setCrop({ ...crop, x: parseInt(e.target.value) })
                      }
                    />
                    <label className="form-label">Crop Y:</label>
                    <input
                      type="number"
                      value={crop.y}
                      onChange={(e) =>
                        setCrop({ ...crop, y: parseInt(e.target.value) })
                      }
                    />
                    <label className="form-label">Crop Width:</label>
                    <input
                      type="number"
                      value={crop.width}
                      onChange={(e) =>
                        setCrop({ ...crop, width: parseInt(e.target.value) })
                      }
                    />
                    <label className="form-label">Crop Height:</label>
                    <input
                      type="number"
                      value={crop.height}
                      onChange={(e) =>
                        setCrop({ ...crop, height: parseInt(e.target.value) })
                      }
                    />
                  </div>
                  <button
                    type="button"
                    className="btn btn-secondary mt-2"
                    onClick={handleCrop}
                  >
                    Crop Image
                  </button>
                  <canvas ref={canvasRef} style={{ display: "none" }}></canvas>
                  {form.image && (
                    <img
                      src={form.image}
                      alt="Cropped"
                      className="mt-2"
                      style={{ maxWidth: "200px" }}
                    />
                  )}
                </div>
              )}
            </div>
            <button type="submit" className="btn btn-primary">
              {isEditing ? "Update Project" : "Add Project"}
            </button>
            {isEditing && (
              <button
                type="button"
                className="btn btn-secondary ms-2"
                onClick={resetForm}
              >
                Cancel
              </button>
            )}
          </form>
        </div>
      </section>

      <section  id="projects">
        <h2 className="mt-5" >
          Projects List
        </h2>
        <div className="d-flex">
          {projects.map((project) => (
            <div
              key={project.id}
              className="list-group-item d-flex justify-content-between align-items-center flex-column flex-wrap p-2"
            >
              <div>
                {project.image && (
                  <img
                    src={project.image}
                    alt={project.projectName}
                    style={{ maxWidth: "100px" }}
                  />
                )}
                <h5 className="mt-2">{project.projectName}</h5>
                <p>{project.description}</p>
              </div>
              <div>
                <button
                  className="btn btn-warning btn-sm me-2"
                  onClick={() => handleEdit(project)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(project._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProjectManager;

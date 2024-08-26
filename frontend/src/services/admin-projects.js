import axios from 'axios';

const API_BASE_URL = 'https://hackathon-backend-y30v.onrender.com/api/projects';

export const fetchProjects = async () => {
  try {
    const response = await axios.get(API_BASE_URL);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching projects:', error);
  }
};

export const createProject = async (projectData) => {
  try {
    const response = await axios.post(API_BASE_URL, projectData);
    return response.data;
  } catch (error) {
    throw new Error('Error creating project:', error);
  }
};

export const updateProject = async (id, projectData) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/${id}`, projectData);
    return response.data;
  } catch (error) {
    throw new Error('Error updating project:', error);
  }
};

export const deleteProject = async (id) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/${id}`);
    return response.data;
  } catch (error) {
    throw new Error('Error deleting project:', error);
  }
};

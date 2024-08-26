import axios from 'axios';

const API_BASE_URL = 'http://localhost:4000/api/news';

export const fetchNews = async () => {
    try {
      const response = await axios.get(API_BASE_URL);
      return response.data;
    } catch (error) {
      throw new Error('Error fetching projects:', error);
    }
  };

  export const createNews = async (projectData) => {
    try {
      const response = await axios.post(API_BASE_URL, projectData);
      return response.data;
    } catch (error) {
      throw new Error('Error creating project:', error);
    }
  };

import axios from 'axios';

const API_BASE_URL = 'http://localhost:4000/api/clients';

export const fetchclients = async () => {
  try {
    const response = await axios.get(API_BASE_URL);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching clients:', error);
  }
};

export const createclient = async (clientData) => {
  try {
    const response = await axios.post(API_BASE_URL, clientData);
    return response.data;
  } catch (error) {
    throw new Error('Error creating client:', error);
  }
};

export const updateclient = async (id, clientData) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/${id}`, clientData);
    return response.data;
  } catch (error) {
    throw new Error('Error updating client:', error);
  }
};

export const deleteclient = async (id) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/${id}`);
    return response.data;
  } catch (error) {
    throw new Error('Error deleting client:', error);
  }
};

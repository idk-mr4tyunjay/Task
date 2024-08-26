import axios from 'axios';

const API_BASE_URL = 'https://hackathon-backend-y30v.onrender.com/api/clients';

export const fetchClients = async () => {
  try {
    const response = await axios.get(API_BASE_URL);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching clients:', error);
  }
};

export const createClient = async (clientData) => {
  try {
    const response = await axios.post(API_BASE_URL, clientData);
    return response.data;
  } catch (error) {
    throw new Error('Error creating client:', error);
  }
};

export const updateClient = async (id, clientData) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/${id}`, clientData);
    return response.data;
  } catch (error) {
    throw new Error('Error updating client:', error);
  }
};

export const deleteClient = async (id) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/${id}`);
    return response.data;
  } catch (error) {
    throw new Error('Error deleting client:', error);
  }
};

import axios from 'axios';

const API_BASE_URL = 'https://hackathon-backend-y30v.onrender.com/api/contact';

export const fetchContact = async () => {
    try {
      const response = await axios.get(API_BASE_URL);
      return response.data;
    } catch (error) {
      throw new Error('Error fetching contacts:', error);
    }
  };

  export const createContact = async (contactData) => {
    try {
      const response = await axios.post(API_BASE_URL, contactData);
      return response.data;
    } catch (error) {
      throw new Error('Error creating contact:', error);
    }
  };

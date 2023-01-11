import axios from 'axios';

const baseUrl = 'http://localhost:3001/';

export const fetchAllBikes = async () => {
  try {
    const response = await axios.get(`${baseUrl}/bikes/`);
    return response.data;
  } catch (e) {
    throw e.toString();
  }
};

export const getDetailBike = async (id) => {
  try {
    const response = await axios.get(`${baseUrl}/bikes/${id}`);
    return response.data;
  } catch (e) {
    throw e.toString();
  }
};

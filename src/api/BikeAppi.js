import axios from 'axios';

const baseUrl = 'http://localhost:3000/api/v1';

export const fetchAllBikes = async () => {
  try {
    const response = await axios.get(`${baseUrl}/bikes`);
    return response.data;
  } catch (e) {
    throw e.toString();
  }
};

export const fetchSingleBikes = async (id) => {
  try {
    const response = await axios.get(`${baseUrl}/bikes/${id}`);
    return response.data;
  } catch (e) {
    throw e.toString();
  }
};

export const createBike = async (data) => {
  try {
    const response = await axios.post(`${baseUrl}/bikes`, data);
    return response.data;
  } catch (e) {
    throw e.toString();
  }
};

export const deleteBike = async (id) => {
  try {
    const response = await axios.delete(`${baseUrl}/bikes/${id}`);
    return response.data;
  } catch (e) {
    throw e.toString();
  }
};

export const fetchReserveBike = async () => {
  try {
    const response = await axios.get(`${baseUrl}/reservations`);
    return response.data;
  } catch (e) {
    throw e.toString();
  }
};

export const reserveBike = async (data) => {
  try {
    const response = await axios.post(`${baseUrl}/reservations`, { reservation: data });
    return response.data;
  } catch (e) {
    throw e.toString();
  }
};

export const deleteReserveBike = async (id) => {
  try {
    const response = await axios.delete(`${baseUrl}/reservations/${id}`);
    return response.data;
  } catch (e) {
    throw e.toString();
  }
};

import axios from 'axios';
import { useId } from 'react';

export const loadUsersApi = async () => {
  try {
    const users = await axios.get('http://localhost:5000/users');

    return users;
  } catch (error) {
    throw error;
  }
};

export const createUserApi = async (user) => {
  try {
    return await axios.post('http://localhost:5000/users', user);
  } catch (error) {
    throw error;
  }
};

export const deleteUserApi = async (userId) => {
  try {
    return await axios.delete(`http://localhost:5000/users/${userId}`);
  } catch (error) {
    throw error;
  }
};

export const updateUserApi = async (userId, userInfo) => {
  try {
    return await axios.put(`http://localhost:5000/users/${userId}`, userInfo);
  } catch (error) {
    throw error;
  }
};

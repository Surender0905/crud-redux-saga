import axios from 'axios';

export const loadUsersApi = async () => {
  try {
    const users = await axios.get('http://localhost:5000/users');

    return users;
  } catch (error) {
    throw error;
  }
};

export const createUserApi = async (user) => {
  console.log('user', user);
  try {
    return await axios.post('http://localhost:5000/users', user);
  } catch (error) {
    throw error;
  }
};

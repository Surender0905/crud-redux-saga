import axios from 'axios';

export const loadUsersApi = async () => {
  try {
    const users = await axios.get('http://localhost:5000/users');

    return users;
  } catch (error) {
    throw error;
  }
};

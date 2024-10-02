import { createAxiosInstance } from '../utils/apiInstance';

const userServiceUrl =
  (process.env.USER_SERVICE_URL as string) || 'http://localhost:3001/users';
const userApiInstance = createAxiosInstance(userServiceUrl);

export const getAllUsers = async () => {
  try {
    const response = await userApiInstance.get('/users/getUsers');
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error('Error fetching users');
  }
};

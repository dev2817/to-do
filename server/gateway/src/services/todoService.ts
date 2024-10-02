import {createAxiosInstance} from "../utils/apiInstance";

const todoServiceUrl = process.env.TODO_SERVICE_URL as string || 'http://localhost:3002/todo'
const todoApiInstance = createAxiosInstance(todoServiceUrl);

export const getAllTasks = async () => {
    try {
      const response = await todoApiInstance.get('/tasks/getTasks');
      return response.data;
    } catch (error) {
      throw new Error('Error fetching tasks');
    }
  };
import axios, { AxiosInstance } from 'axios';
import logger from './logger';

export const createAxiosInstance = (baseURL: string): AxiosInstance => {
  const instance = axios.create({
    baseURL,
    timeout: 30000,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  instance.interceptors.request.use(
    (config) => {
      logger.info(`Making request to: ${config.url}`);
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  instance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      logger.error('Error in response:', error.response ? error.response.data : error.message);
      return Promise.reject(error);
    }
  );

  return instance;
};

import axios from 'axios';

const BASE_URL = 'https://yoix1ne7w2.execute-api.me-south-1.amazonaws.com/dev';

const api = axios.create({
  baseURL: `${BASE_URL}/api`,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: false
});

// Add request interceptor to handle errors and add headers
api.interceptors.request.use(
  (config) => {
    // Add any auth token if you have it
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add response interceptor to handle errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      // Server responded with error status
      console.error('Response error:', error.response.data);
      return Promise.reject(error.response.data);
    } else if (error.request) {
      // Request was made but no response
      console.error('Request error:', error.request);
      return Promise.reject({ message: 'No response from server' });
    } else {
      // Error in request configuration
      console.error('Error:', error.message);
      return Promise.reject({ message: error.message });
    }
  }
);

// Your existing types remain the same
export interface MenuItem {
  _id: string;
  name: string;
  nameAr: string;
  description: string;
  descriptionAr: string;
  price: number;
  category: 'salads' | 'hot sandwich' | 'soups' | "breakfast" | "cold sandwich" | "starters" |  "pasta" | "fajitas" | "chicken" | "beef" | "seafood" | "pizza" | "side dishes" | "kids meals" | "desserts" | "beverages";
  image?: string;
  available: boolean;
}

export interface LoginResponse {
  success: boolean;
  data: {
    token: string;
    user: {
      id: string;
      name: string;
      email: string;
    };
  };
}

export interface Address {
  fullName: string;
  phone: string;
  street: string;
  building: string;
  floor?: string;
  apartment?: string;
  landmark?: string;
  area: string;
  notes?: string;
}

export const apiService = {
  // Auth
  login: async (email: string, password: string) => {
    try {
      const response = await api.post<LoginResponse>('/auth/login', {
        email,
        password,
      });
      return response.data;
    } catch (error) {
      throw handleApiError(error);
    }
  },

  register: async (name: string, email: string, password: string) => {
    try {
      const response = await api.post<LoginResponse>('/auth/register', {
        name,
        email,
        password,
      });
      return response.data;
    } catch (error) {
      throw handleApiError(error);
    }
  },

  changePassword: async (currentPassword: string, newPassword: string) => {
    try {
      const response = await api.post('/auth/change-password', {
        currentPassword,
        newPassword
      });
      return response.data;
    } catch (error) {
      throw handleApiError(error);
    }
  },

  forgotPassword: async (email: string) => {
    try {
      const response = await api.post('/auth/forgot-password', { email });
      return response.data;
    } catch (error) {
      throw handleApiError(error);
    }
  },

  // Menu
  getMenuItems: async (category?: string) => {
    try {
      const response = await api.get<{success: boolean, data: MenuItem[]}>('/menu', {
        params: { category },

      });
      return response.data;
    } catch (error) {
      throw handleApiError(error);
    }
  },

  getMenuItem: async (id: string) => {
    try {
      const response = await api.get<{ success: boolean; data: MenuItem }>(
        `/menu/${id}`
      );
      return response.data;
    } catch (error) {
      throw handleApiError(error);
    }
  },
}

export const handleApiError = (error: any) => {
  if (axios.isAxiosError(error)) {
    // Log the full error for debugging
    console.error('API Error:', {
      message: error.message,
      response: error.response?.data,
      status: error.response?.status,
      headers: error.response?.headers
    });
    
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      return error.response.data?.message || `Error: ${error.response.status}`;
    } else if (error.request) {
      // The request was made but no response was received
      return 'No response from server';
    }
    return error.message || 'Server error occurred';
  }
  return 'An unexpected error occurred';
};

export default api;
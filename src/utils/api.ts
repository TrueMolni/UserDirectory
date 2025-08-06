import axios from 'axios';
import { ApiResponse, FilterState } from '../types';

const BASE_URL = 'https://randomuser.me/api/';

// Create axios instance with default config
const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
});

export const fetchUsers = async (filters: FilterState): Promise<ApiResponse> => {
  try {
    const params: Record<string, string | number> = {
      results: 10,
      page: filters.page,
    };

    // Add gender filter if not 'all'
    if (filters.gender !== 'all') {
      params.gender = filters.gender;
    }

    // Add nationality filter if specified
    if (filters.nationality) {
      params.nat = filters.nationality;
    }

    const response = await api.get<ApiResponse>('', { params });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        error.response?.data?.error || 
        error.message || 
        'Failed to fetch users'
      );
    }
    throw new Error('An unexpected error occurred');
  }
};
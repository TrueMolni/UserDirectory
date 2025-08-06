import { FilterState } from '../types';

export const parseQueryParams = (searchParams: URLSearchParams): FilterState => {
  return {
    gender: (searchParams.get('gender') as FilterState['gender']) || 'all',
    nationality: searchParams.get('nationality') || '',
    page: parseInt(searchParams.get('page') || '1', 10),
  };
};

export const buildQueryParams = (filters: FilterState): URLSearchParams => {
  const params = new URLSearchParams();
  
  if (filters.gender !== 'all') {
    params.set('gender', filters.gender);
  }
  
  if (filters.nationality) {
    params.set('nationality', filters.nationality);
  }
  
  if (filters.page > 1) {
    params.set('page', filters.page.toString());
  }
  
  return params;
};
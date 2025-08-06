import React from 'react';
import { FilterProps, NATIONALITY_OPTIONS } from '../types';
import { RotateCcw } from 'lucide-react';

const Filters: React.FC<FilterProps> = ({ filters, onFilterChange, onReset, isLoading }) => {
  const handleGenderChange = (gender: 'all' | 'male' | 'female') => {
    onFilterChange({ ...filters, gender, page: 1 });
  };

  const handleNationalityChange = (nationality: string) => {
    onFilterChange({ ...filters, nationality, page: 1 });
  };

  const hasActiveFilters = filters.gender !== 'all' || filters.nationality !== '';

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex flex-col sm:flex-row gap-4 flex-1">
          {/* Gender Filter */}
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Gender
            </label>
            <div className="flex bg-gray-100 rounded-lg p-1">
              {[
                { value: 'all', label: 'All' },
                { value: 'male', label: 'Male' },
                { value: 'female', label: 'Female' }
              ].map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleGenderChange(option.value as 'all' | 'male' | 'female')}
                  disabled={isLoading}
                  className={`flex-1 px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                    filters.gender === option.value
                      ? 'bg-white text-blue-600 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  } ${isLoading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          {/* Nationality Filter */}
          <div className="flex-1">
            <label htmlFor="nationality" className="block text-sm font-medium text-gray-700 mb-2">
              Nationality
            </label>
            <select
              id="nationality"
              value={filters.nationality}
              onChange={(e) => handleNationalityChange(e.target.value)}
              disabled={isLoading}
              className={`w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 ${
                isLoading ? 'opacity-50 cursor-not-allowed bg-gray-50' : 'bg-white'
              }`}
            >
              {NATIONALITY_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Reset Button */}
        {hasActiveFilters && (
          <button
            onClick={onReset}
            disabled={isLoading}
            className={`inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200 ${
              isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-50'
            }`}
          >
            <RotateCcw className="h-4 w-4 mr-2" />
            Reset Filters
          </button>
        )}
      </div>
    </div>
  );
};

export default Filters;
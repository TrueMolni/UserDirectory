import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { User, FilterState } from "../types";
import { fetchUsers } from "../utils/api";
import { parseQueryParams, buildQueryParams } from "../utils/queryParams";
import UserTable from "../components/UserTable";
import Filters from "../components/Filters";
import Pagination from "../components/Pagination";
import { Users } from "lucide-react";

const UserTablePage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [totalPages, setTotalPages] = useState(1);

  // Initialize filters from URL params
  const [filters, setFilters] = useState<FilterState>(() =>
    parseQueryParams(searchParams)
  );

  // Fetch users when filters change
  useEffect(() => {
    const loadUsers = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const response = await fetchUsers(filters);
        setUsers(response.results);

        // Random User API doesn't provide total count, so we estimate based on typical behavior
        // In a real app, you'd get this from the API response
        setTotalPages(Math.max(50, filters.page + 1));
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
        setUsers([]);
      } finally {
        setIsLoading(false);
      }
    };

    loadUsers();
  }, [filters]);

  // Update URL when filters change
  useEffect(() => {
    const newParams = buildQueryParams(filters);
    setSearchParams(newParams);
  }, [filters, setSearchParams]);

  const handleFilterChange = (newFilters: FilterState) => {
    setFilters(newFilters);
  };

  const handleReset = () => {
    const resetFilters: FilterState = {
      gender: "all",
      nationality: "",
      page: 1,
    };
    setFilters(resetFilters);
  };

  const handlePageChange = (page: number) => {
    setFilters((prev) => ({ ...prev, page }));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <Users className="h-8 w-8 text-blue-600 mr-3" />
            <h1 className="text-3xl font-bold text-gray-900">User Directory</h1>
          </div>
          <p className="text-gray-600 max-w-2xl">
            Browse through our user database with advanced filtering and
            pagination. Data is fetched from the Random User API.
          </p>
        </div>

        {/* Filters */}
        <Filters
          filters={filters}
          onFilterChange={handleFilterChange}
          onReset={handleReset}
          isLoading={isLoading}
        />

        {/* User Table */}
        <UserTable users={users} isLoading={isLoading} error={error} />

        {/* Pagination */}
        <Pagination
          currentPage={filters.page}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default UserTablePage;

# User Directory - Modern React Table App

A beautiful, responsive React application that displays user data from the Random User API with advanced filtering, pagination, and search capabilities.

## ✨ Features

- **Server-side Pagination**: Efficient loading with 10 users per page
- **Advanced Filtering**: Filter by gender (All/Male/Female) and nationality (US, GB, FR, DE, CA)
- **Responsive Design**: Optimized for mobile, tablet, and desktop devices
- **URL Synchronization**: Filter states are preserved in URL query parameters
- **Loading States**: Beautiful skeleton loaders and loading indicators
- **Error Handling**: Comprehensive error states with user-friendly messages
- **Modern UI**: Clean design with Tailwind CSS and smooth animations
- **TypeScript**: Full type safety throughout the application

## 🛠️ Tech Stack

- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **React Router** for navigation and URL state management
- **Axios** for API calls
- **Lucide React** for icons
- **Vite** for development and building

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── UserTable.tsx    # Main table component with responsive design
│   ├── Filters.tsx      # Filter controls (gender, nationality)
│   └── Pagination.tsx   # Pagination component with smart page numbers
├── pages/               # Page components
│   └── UserTablePage.tsx # Main page combining all components
├── types/               # TypeScript interfaces and types
│   └── index.ts         # User data types, API responses, component props
├── utils/               # Helper functions and utilities
│   ├── api.ts           # API service with error handling
│   └── queryParams.ts   # URL query parameter utilities
├── App.tsx              # Main app component with routing
├── main.tsx             # App entry point
└── index.css            # Global styles and Tailwind imports
```

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ and npm (or yarn)
- Modern web browser

### Installation

1. **Clone and install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   ```bash
   cp .env.example .env
   # Modify .env file if needed (optional)
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality checks

## 🎯 Key Components

### UserTable Component
- Responsive table that transforms into cards on mobile
- Loading skeletons for better UX
- Email links and gender badges
- Empty states and error handling

### Filters Component
- Toggle-style gender filter
- Nationality dropdown with preset options
- Reset filters functionality
- Disabled states during loading

### Pagination Component
- Smart page number generation with ellipsis
- Mobile-friendly previous/next buttons
- Current page indicators
- Automatic scrolling to top on page change

## 🔧 API Integration

The app integrates with the [Random User API](https://randomuser.me/) with the following features:

- **Endpoint**: `https://randomuser.me/api/`
- **Parameters**: 
  - `results=10` (users per page)
  - `page={pageNumber}` (pagination)
  - `gender={male|female}` (gender filter)
  - `nat={US|GB|FR|DE|CA}` (nationality filter)

### Error Handling
- Network timeout handling (10 seconds)
- User-friendly error messages
- Retry mechanisms through component re-renders

## 📱 Responsive Design

The application is fully responsive with breakpoints:

- **Mobile** (< 768px): Card-based layout
- **Tablet** (768px - 1024px): Compact table
- **Desktop** (> 1024px): Full table with all features

## 🎨 Design System

### Colors
- **Primary**: Blue (#3B82F6)
- **Secondary**: Gray tones for neutral elements
- **Success**: Green for positive actions
- **Error**: Red for error states

### Typography
- Clean, readable fonts with proper hierarchy
- Consistent spacing using 8px grid system
- Responsive text sizing

### Animations
- Smooth transitions on hover states
- Loading animations and skeleton screens
- Page transitions and micro-interactions

## ⚠️ Known Limitations

1. **Total Page Count**: The Random User API doesn't provide total user counts, so we estimate pagination
2. **Search**: Currently no text-based search (could be added with API seed parameter)
3. **Sorting**: No column sorting (API limitation)
4. **Caching**: No data caching implemented (could add React Query)

## 🔮 Future Enhancements

- Add text-based search functionality
- Implement column sorting
- Add data caching with React Query
- Export functionality (CSV/PDF)
- Advanced filters (age range, location)
- Dark mode support
- User detail modal/page

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ using React, TypeScript, and Tailwind CSS
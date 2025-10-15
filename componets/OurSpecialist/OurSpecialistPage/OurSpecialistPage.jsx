"use client";
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNavigationMenu } from '@/lib/slices/navigationSlice';

const OurSpecialistPage = ({ params, pageData, sectionData, pageId }) => {
  const dispatch = useDispatch();
  const { data: navigationData, loading, error } = useSelector((state) => state.navigation);
  const [specialistData, setSpecialistData] = useState(null);

  useEffect(() => {
    dispatch(fetchNavigationMenu());
  }, [dispatch]);

  useEffect(() => {
    if (navigationData?.data?.[0]?.items) {
      // Find our-specialist data from navigation
      const findSpecialistData = (items) => {
        for (const item of items) {
          if (item.slug === 'our-specialist' || item.title === 'Our Specialist') {
            return item;
          }
        }
        return null;
      };

      const data = findSpecialistData(navigationData.data[0].items);
      setSpecialistData(data);
    }
  }, []);

  if (loading) {
    return (
      <div className="container py-8">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-300 rounded w-1/3 mb-4"></div>
          <div className="h-4 bg-gray-300 rounded w-2/3 mb-2"></div>
          <div className="h-4 bg-gray-300 rounded w-1/2"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container py-8">
        <h1 className="text-2xl font-bold text-[#3D3D3D] mb-4">Error Loading Specialists</h1>
        <p className="text-[#3D3D3D]">Unable to load specialist information.</p>
      </div>
    );
  }

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold text-[#3D3D3D] mb-6">
        {pageData?.title || specialistData?.title || 'Our Specialists'}
      </h1>
      
      {(pageData?.description || specialistData?.description) && (
        <p className="text-lg text-[#3D3D3D] mb-8">
          {pageData?.description || specialistData?.description}
        </p>
      )}

      {/* Display API section data if available */}
      {sectionData && (
        <div className="mb-8 p-6 bg-blue-50 rounded-lg">
          <h2 className="text-xl font-semibold text-[#3D3D3D] mb-4">Section Data from API:</h2>
          <div className="bg-white p-4 rounded border">
            <pre className="text-sm text-[#3D3D3D] overflow-auto">
              {JSON.stringify(sectionData, null, 2)}
            </pre>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Placeholder for specialist cards */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold text-[#3D3D3D] mb-2">Cardiologist</h3>
          <p className="text-[#3D3D3D]">Expert in heart and cardiovascular system treatment.</p>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold text-[#3D3D3D] mb-2">Oncologist</h3>
          <p className="text-[#3D3D3D]">Specialized in cancer diagnosis and treatment.</p>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold text-[#3D3D3D] mb-2">Neurologist</h3>
          <p className="text-[#3D3D3D]">Expert in nervous system disorders and treatment.</p>
        </div>
      </div>

      {/* Debug Information */}
      <div className="mt-8 space-y-4">
        {params && (
          <div className="p-4 bg-gray-100 rounded-lg">
            <h2 className="text-lg font-semibold text-[#3D3D3D] mb-2">Route Parameters:</h2>
            <pre className="text-sm text-[#3D3D3D]">
              {JSON.stringify(params, null, 2)}
            </pre>
          </div>
        )}

        {pageData && (
          <div className="p-4 bg-green-100 rounded-lg">
            <h2 className="text-lg font-semibold text-[#3D3D3D] mb-2">Page Data:</h2>
            <pre className="text-sm text-[#3D3D3D]">
              {JSON.stringify(pageData, null, 2)}
            </pre>
          </div>
        )}

        {pageId && (
          <div className="p-4 bg-yellow-100 rounded-lg">
            <h2 className="text-lg font-semibold text-[#3D3D3D] mb-2">Page ID (API Call):</h2>
            <p className="text-sm text-[#3D3D3D]">
              API Endpoint: <code>{process.env.NEXT_PUBLIC_API_BASE_URL}/home/sections/{pageId}</code>
            </p>
            <p className="text-xs text-gray-600 mt-1">
              Base URL: {process.env.NEXT_PUBLIC_API_BASE_URL || 'Not set'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default OurSpecialistPage;

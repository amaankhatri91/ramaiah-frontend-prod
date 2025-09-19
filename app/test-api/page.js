"use client";

import React, { useEffect } from "react";
import { useServices } from "../../lib/hooks";
import { fetchSiteSettings } from "../../lib/slices/servicesSlice";
import { useDispatch, useSelector } from "react-redux";
import { fetchNavigationMenu } from "../../lib/slices/navigationSlice";

const TestApiPage = () => {
  const { siteSettings, loading, error, dispatch } = useServices();
  const navigationDispatch = useDispatch();
  const { data: navigationData, loading: navigationLoading, error: navigationError } = useSelector((state) => state.navigation);

  useEffect(() => {
    dispatch(fetchSiteSettings());
    navigationDispatch(fetchNavigationMenu());
  }, [dispatch, navigationDispatch]);

  if (loading || navigationLoading) {
    return (
      <div className="container mx-auto p-8">
        <h1 className="text-2xl font-bold mb-4">Testing APIs</h1>
        <p>Loading data...</p>
      </div>
    );
  }

  if (error || navigationError) {
    return (
      <div className="container mx-auto p-8">
        <h1 className="text-2xl font-bold mb-4">Testing APIs</h1>
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          <p>Site Settings Error: {error}</p>
          <p>Navigation Error: {navigationError}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">Testing APIs</h1>
      
      <div className="bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded mb-4">
        <p><strong>API Base URL:</strong> {process.env.NEXT_PUBLIC_API_BASE_URL || 'Not defined'}</p>
        <p><strong>Environment:</strong> {process.env.NODE_ENV || 'development'}</p>
      </div>
      
      <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
        <p>✅ Site Settings API Integration Successful!</p>
        <p>✅ Navigation Menu API Integration Successful!</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Header 1 Data</h2>
          <div className="space-y-2">
            <p><strong>General Enquiries:</strong> {siteSettings?.header1?.generalEnquiries?.number}</p>
            <p><strong>Emergency Number:</strong> {siteSettings?.header1?.emergencyNumber?.number}</p>
            <p><strong>Pre-Book Appointments:</strong> {siteSettings?.header1?.preBookAppointments?.number}</p>
            <p><strong>Affiliation Image:</strong> {siteSettings?.header1?.affiliationImage}</p>
            <p><strong>Search Icon:</strong> {siteSettings?.header1?.searchIcon}</p>
            <p><strong>Emergency Icon:</strong> {siteSettings?.header1?.emergencyIcon}</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Header 3 Data</h2>
          <div className="space-y-2">
            <p><strong>Site Name:</strong> {siteSettings?.header3?.siteName}</p>
            <p><strong>Site Tagline:</strong> {siteSettings?.header3?.siteTagline}</p>
            <p><strong>Logo:</strong> {siteSettings?.header3?.logo}</p>
            <p><strong>Certifications:</strong> {siteSettings?.header3?.certifications?.length || 0} items</p>
            {siteSettings?.header3?.certifications?.length > 0 && (
              <div className="mt-2">
                <p className="font-medium">Certification URLs:</p>
                <ul className="list-disc list-inside text-sm">
                  {siteSettings.header3.certifications.map((cert, index) => (
                    <li key={index}>{cert}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="mt-6 bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Navigation Menu Data</h2>
        <div className="space-y-2">
          <p><strong>Menu Name:</strong> {navigationData?.data?.[0]?.name}</p>
          <p><strong>Menu Location:</strong> {navigationData?.data?.[0]?.location}</p>
          <p><strong>Menu Active:</strong> {navigationData?.data?.[0]?.is_active ? 'Yes' : 'No'}</p>
          <p><strong>Menu Items Count:</strong> {navigationData?.data?.[0]?.items?.length || 0}</p>
          
          {navigationData?.data?.[0]?.items?.length > 0 && (
            <div className="mt-4">
              <p className="font-medium mb-2">Menu Items:</p>
              <div className="space-y-2">
                {navigationData.data[0].items.map((item, index) => (
                  <div key={index} className="border-l-4 border-blue-500 pl-4">
                    <p><strong>{item.title}</strong> (Level {item.level})</p>
                    <p className="text-sm text-gray-600">URL: {item.url}</p>
                    {item.children && item.children.length > 0 && (
                      <div className="ml-4 mt-2">
                        <p className="text-sm font-medium">Children ({item.children.length}):</p>
                        {item.children.map((child, childIndex) => (
                          <div key={childIndex} className="ml-4 border-l-2 border-gray-300 pl-2">
                            <p className="text-sm">{child.title} (Level {child.level})</p>
                            {child.children && child.children.length > 0 && (
                              <div className="ml-4">
                                <p className="text-xs text-gray-500">Grandchildren: {child.children.length}</p>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="mt-6 bg-gray-100 p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Raw API Responses</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-medium mb-2">Site Settings API</h3>
            <pre className="bg-gray-800 text-green-400 p-4 rounded overflow-auto text-sm max-h-96">
              {JSON.stringify(siteSettings, null, 2)}
            </pre>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2">Navigation Menu API</h3>
            <pre className="bg-gray-800 text-green-400 p-4 rounded overflow-auto text-sm max-h-96">
              {JSON.stringify(navigationData, null, 2)}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestApiPage;

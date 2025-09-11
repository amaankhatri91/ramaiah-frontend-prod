"use client";

import React, { useEffect } from "react";
import { useServices } from "../../lib/hooks";
import { fetchSiteSettings } from "../../lib/slices/servicesSlice";

const TestApiPage = () => {
  const { siteSettings, loading, error, dispatch } = useServices();

  useEffect(() => {
    dispatch(fetchSiteSettings());
  }, [dispatch]);

  if (loading) {
    return (
      <div className="container mx-auto p-8">
        <h1 className="text-2xl font-bold mb-4">Testing Site Settings API</h1>
        <p>Loading site settings...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto p-8">
        <h1 className="text-2xl font-bold mb-4">Testing Site Settings API</h1>
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          <p>Error: {error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">Testing Site Settings API</h1>
      
      <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
        <p>✅ API Integration Successful!</p>
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

      <div className="mt-6 bg-gray-100 p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Raw API Response</h2>
        <pre className="bg-gray-800 text-green-400 p-4 rounded overflow-auto text-sm">
          {JSON.stringify(siteSettings, null, 2)}
        </pre>
      </div>
    </div>
  );
};

export default TestApiPage;

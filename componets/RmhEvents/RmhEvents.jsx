"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const RmhEvents = () => {
  const [activeTab, setActiveTab] = useState('CME');

  const eventsData = {
    'Health Observance': [
      {
        id: 1,
        title: 'WORLD STROKE DAY',
        subtitle: 'World Stroke Day',
        date: '05 Dec, 2023',
        source: 'By Medikast',
        image: '/assets/world-day.svg', 
        readMoreLink: '#',
      },
      {
        id: 2,
        title: 'WORLD EPILEPSY DAY',
        subtitle: 'National Epilepsy Day',
        date: '30 Dec, 2023',
        source: 'By Medikast',
        image: '/assets/world-day.svg', 
        readMoreLink: '#',
      },
      {
        id: 3,
        title: 'WORLD CANCER DAY',
        subtitle: 'World Cancer Day',
        date: '05 Feb, 2024',
        source: 'By Medikast',
        image: '/assets/world-day.svg', 
        readMoreLink: '#',
      },
      {
        id: 4,
        title: 'WORLD HEPATITIS DAY',
        subtitle: 'World Hepatitis Day',
        date: '28 Jul, 2023',
        source: 'By Medikast',
        image: '/assets/world-day.svg', 
        readMoreLink: '#',
      },
    ],
    'CME': [
      {
        id: 5,
        title: 'CME Event 1',
        subtitle: 'Continuing Medical Education',
        date: '15 Jan, 2024',
        source: 'By Medikast',
        image: '/assets/world-day.svg',
        readMoreLink: '#',
      },
      {
        id: 6,
        title: 'CME Event 2',
        subtitle: 'Medical Conference',
        date: '22 Feb, 2024',
        source: 'By Medikast',
        image: '/assets/world-day.svg',
        readMoreLink: '#',
      },
      {
        id: 7,
        title: 'CME Event 3',
        subtitle: 'Healthcare Workshop',
        date: '10 Mar, 2024',
        source: 'By Medikast',
        image: '/assets/world-day.svg',
        readMoreLink: '#',
      },
      {
        id: 8,
        title: 'CME Event 4',
        subtitle: 'Medical Seminar',
        date: '05 Apr, 2024',
        source: 'By Medikast',
        image: '/assets/world-day.svg',
        readMoreLink: '#',
      },
    ],
    'Corporate Events': [
      {
        id: 9,
        title: 'Corporate Event 1',
        subtitle: 'Annual Corporate Meet',
        date: '20 Jan, 2024',
        source: 'By Medikast',
        image: '/assets/world-day.svg',
        readMoreLink: '#',
      },
      {
        id: 10,
        title: 'Corporate Event 2',
        subtitle: 'Team Building',
        date: '18 Feb, 2024',
        source: 'By Medikast',
        image: '/assets/world-day.svg',
        readMoreLink: '#',
      },
      {
        id: 11,
        title: 'Corporate Event 3',
        subtitle: 'Foundation Day',
        date: '12 Mar, 2024',
        source: 'By Medikast',
        image: '/assets/world-day.svg',
        readMoreLink: '#',
      },
      {
        id: 12,
        title: 'Corporate Event 4',
        subtitle: 'Award Ceremony',
        date: '08 Apr, 2024',
        source: 'By Medikast',
        image: '/assets/world-day.svg',
        readMoreLink: '#',
      },
    ],
    'Health Camps': [
      {
        id: 13,
        title: 'Health Camp 1',
        subtitle: 'Free Health Checkup',
        date: '25 Jan, 2024',
        source: 'By Medikast',
        image: '/assets/world-day.svg',
        readMoreLink: '#',
      },
      {
        id: 14,
        title: 'Health Camp 2',
        subtitle: 'Community Health Drive',
        date: '28 Feb, 2024',
        source: 'By Medikast',
        image: '/assets/world-day.svg',
        readMoreLink: '#',
      },
      {
        id: 15,
        title: 'Health Camp 3',
        subtitle: 'Rural Health Initiative',
        date: '15 Mar, 2024',
        source: 'By Medikast',
        image: '/assets/world-day.svg',
        readMoreLink: '#',
      },
      {
        id: 16,
        title: 'Health Camp 4',
        subtitle: 'Wellness Program',
        date: '22 Apr, 2024',
        source: 'By Medikast',
        image: '/assets/world-day.svg',
        readMoreLink: '#',
      },
    ],
  };

  const tabs = ['Health Observance', 'CME', 'Corporate Events', 'Health Camps'];
  const currentEvents = eventsData[activeTab] || [];

  return (
    <div className="container py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-6 gap-4 lg:gap-12 mb-8 ">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-3 w-full rounded-[40px] font-semibold transition-all duration-200 min-[800px]:text-[18px] text-[16px] ${
              activeTab === tab
                ? 'Background-color text-[#FFFFFF] rounded-[40px]'
                : 'bg-[#E9F6FF] text-gray-600 hover:text-gray-900'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {currentEvents.map((event) => (
          <div
            key={event.id}
            className="flex flex-col items-center justify-start relative"
          >
            <div className="w-full rounded-[48px] border-[10px] border-gray-200 overflow-hidden">
              <div className="relative w-full h-[400px] bg-gradient-to-br from-gray-100 to-gray-200">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
                  }}
                />
              </div>
            </div>

            <div className="w-[85%] bg-[#FFFFFF] p-4 rounded-[18px] shadow-md -mt-[70px] relative z-10">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Image
                    src="/assets/celender.svg"
                    alt="calendar"
                    width={20}
                    height={20}
                    className="w-[20px] h-[20px]"
                  />
                  <p className="text-[16px] text-gray-600">{event.date}</p>
                </div>
                <p className="text-[14px]">
                  By <span className="Text-color2">{event.source.replace('By ', '')}</span>
                </p>
              </div>
              
              <h2 className="text-[24px] font-semibold text-[#3D3D3D] mt-[12px]">
                {event.title}
              </h2>
              
              <div className="flex justify-end">
                <Link
                  href={event.readMoreLink}
                  className="inline-flex underline items-center w-max mt-3 px-4 py-2 rounded-full text-[#3d3d3d] font-bold min-[800px]:text-[18px] text-[16px]"
                >
                  <span className="Text-color2 text-[16px]">Read More</span>
                  <Image
                    src="/assets/up-arrow.svg"
                    alt="up-arrow"
                    width={16}
                    height={16}
                    className="h-[30px] w-[30px]"
                  />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
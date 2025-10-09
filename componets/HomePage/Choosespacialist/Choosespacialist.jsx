"use client";
import React, { useMemo, useState } from 'react'
import Select from 'react-select'
import { medicalDepartments } from '../../ServiceData/ServiceData'
import { OurExpertsData } from '../../ServiceData/OurExperts'
import dynamic from 'next/dynamic'

const EnquiryModal = dynamic(() => import('../../CommonComponets/EnquiryModal'), { ssr: false })
const AskExpertModal = dynamic(() => import('../../CommonComponets/AskExpertModal'), { ssr: false })

const Choosespacialist = () => {
  const specialityOptions = useMemo(() => 
    medicalDepartments.map((dept) => ({ value: dept.slug, label: dept.name })),
  [])

  const specialistOptions = useMemo(() => {
    const names = []
    OurExpertsData.forEach((dept) => {
      if (Array.isArray(dept.Doctor)) {
        dept.Doctor.forEach((doc) => {
          if (doc && doc.name) names.push(doc.name)
        })
      }
    })
    const unique = Array.from(new Set(names))
    return unique.map((n) => ({ value: n, label: n }))
  }, [])

  const [selectedSpeciality, setSelectedSpeciality] = useState(null)
  const [selectedSpecialist, setSelectedSpecialist] = useState(null)
  const [isAskModalOpen, setIsAskModalOpen] = useState(false)
  const [isCallbackOpen, setIsCallbackOpen] = useState(false)

  const selectStyles = {
    control: (base) => ({
      ...base,
      background: 'transparent',
      border: 'none',
      boxShadow: 'none',
      minHeight: 0,
      paddingLeft: 0,
      cursor: 'pointer',
    }),
    valueContainer: (base) => ({ ...base, padding: 0 }),
    placeholder: (base) => ({ ...base, color: '#ffffff', opacity: 0.95, fontWeight: 600 }),
    singleValue: (base) => ({ ...base, color: '#ffffff', fontWeight: 600 }),
    input: (base) => ({ ...base, color: '#ffffff' }),
    indicatorsContainer: (base) => ({ ...base, color: '#ffffff' }),
    dropdownIndicator: (base) => ({ ...base, color: '#ffffff', paddingRight: 4 }),
    indicatorSeparator: () => ({ display: 'none' }),
    menu: (base) => ({ ...base, borderRadius: 12, overflow: 'hidden' }),
    menuList: (base) => ({ ...base, padding: 0 }),
    option: (base, state) => ({
      ...base,
      color: state.isSelected ? '#ffffff' : '#3D3D3D',
      backgroundColor: state.isSelected
        ? '#e14b8b'
        : state.isFocused
        ? 'rgba(216, 70, 138, 0.08)'
        : '#ffffff',
    }),
  }

  return (
    <div className='container'>
      <AskExpertModal isOpen={isAskModalOpen} onClose={() => setIsAskModalOpen(false)} />
      <EnquiryModal variant="callback" isOpen={isCallbackOpen} onClose={() => setIsCallbackOpen(false)} />
      <div className='bg-gradient-to-br from-[#FBFDFF] to-[#E9F6FF] rounded-[32px] p-4 md:p-6 lg:p-8 shadow-sm mb-[37px]'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4'>
          {/* Choose Speciality */}
          <div>
            <label className='block text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px]] text-[#3A3A3A] font-semibold font-manrope mb-2'>Choose Speciality</label>
            <div className='w-full rounded-full px-5 py-2 text-white Background-color'>
              <Select
                aria-label='Choose Specialty'
                options={specialityOptions}
                isSearchable
                placeholder='Choose Specialty'
                styles={selectStyles}
                value={selectedSpeciality}
                onChange={(opt) => setSelectedSpeciality(opt)}
                instanceId="speciality-select"
                inputId="speciality-select-input"
              />
            </div>
          </div>

          {/* Choose Specialist */}
          <div>
            <label className='block text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px]] text-[#3A3A3A] font-semibold font-manrope mb-2'>Choose Specialist</label>
            <div className='w-full rounded-full px-5 py-2 text-white Background-color'>
              <Select
                aria-label='Choose Specialist'
                options={specialistOptions}
                isSearchable
                placeholder='Choose Specialist'
                styles={selectStyles}
                value={selectedSpecialist}
                onChange={(opt) => setSelectedSpecialist(opt)}
                instanceId="specialist-select"
                inputId="specialist-select-input"
              />
            </div>
          </div>

          {/* Ask Our Expert */}
          <div className='sm:col-span-1'>
            <label className='block text-transparent mb-2 select-none'>.</label>
            <button type='button' onClick={() => setIsAskModalOpen(true)} className='cursor-pointer w-full rounded-full px-5 py-3 text-white Background-color focus:outline-none'>
              <span className='text-[12px] sm:text-[14px] md:text-[16px] lg:text-[16px]] text-[#ffffff] font-semibold font-manrope'>Ask Our Expert</span>
            </button>
          </div>

          {/* Request A Callback */}
          <div className='sm:col-span-1'>
            <label className='block text-transparent mb-2 select-none'>.</label>
            <button type='button' onClick={() => setIsCallbackOpen(true)} className='cursor-pointer w-full rounded-full px-5 py-3 text-white Background-color focus:outline-none'>
              <span className='text-[12px] sm:text-[14px] md:text-[16px] lg:text-[16px]] text-[#ffffff] font-semibold font-manrope'>Request A Callback</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Choosespacialist
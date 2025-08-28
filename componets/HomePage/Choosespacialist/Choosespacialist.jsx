import React from 'react'

const Choosespacialist = () => {
  return (
    <div className='container'>
      <div className='bg-gradient-to-br from-[#FBFDFF] to-[#E9F6FF] rounded-[32px] p-4 md:p-6 lg:p-8 shadow-sm mb-[37px]'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4'>
          {/* Choose Speciality */}
          <div>
            <label className='block text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px]] text-[#3A3A3A] font-semibold font-manrope mb-2'>Choose Speciality</label>
            <button type='button' className='w-full flex items-center justify-between rounded-full px-5 py-3 text-white Background-color focus:outline-none'>
              <span className='truncate text-[12px] sm:text-[14px] md:text-[14px] lg:text-[16px]] text-[#ffffff] font-semibold font-manrope'>Search Specialty</span>
              <span className='ml-3 inline-flex items-center justify-center rounded-full bg-white/25 w-6 h-6'>
                <svg width='14' height='14' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' aria-hidden='true'>
                  <path d='M6 9l6 6 6-6' stroke='white' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
                </svg>
              </span>
            </button>
          </div>

          {/* Choose Specialist */}
          <div>
            <label className='block text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px]] text-[#3A3A3A] font-semibold font-manrope mb-2'>Choose Specialist</label>
            <button type='button' className='w-full flex items-center justify-between rounded-full px-5 py-3 text-white Background-color focus:outline-none'>
              <span className='truncate text-[12px] sm:text-[14px] md:text-[14px] lg:text-[16px]] text-[#ffffff] font-semibold font-manrope'>Search Specialist</span>
              <span className='ml-3 inline-flex items-center justify-center rounded-full bg-white/25 w-6 h-6'>
                <svg width='14' height='14' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' aria-hidden='true'>
                  <path d='M6 9l6 6 6-6' stroke='white' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
                </svg>
              </span>
            </button>
          </div>

          {/* Ask Our Expert */}
          <div className='sm:col-span-1'>
            <label className='block text-transparent mb-2 select-none'>.</label>
            <button type='button' className='w-full rounded-full px-5 py-3 text-white Background-color focus:outline-none'>
              <span className='text-[12px] sm:text-[14px] md:text-[14px] lg:text-[16px]] text-[#ffffff] font-semibold font-manrope'>Ask Our Expert</span>
            </button>
          </div>

          {/* Request A Callback */}
          <div className='sm:col-span-1'>
            <label className='block text-transparent mb-2 select-none'>.</label>
            <button type='button' className='w-full rounded-full px-5 py-3 text-white Background-color focus:outline-none'>
              <span className='text-[12px] sm:text-[14px] md:text-[14px] lg:text-[16px]] text-[#ffffff] font-semibold font-manrope'>Request A Callback</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Choosespacialist
import React from 'react'
import Student from '/src/image/Student Male.png'
import Clock from '/src/image/Clock.png'
import Lock from '/src/image/Security Lock.png'

function Category() {
  return (
    <div className='w-full mx-auto container px-4 py-10'>
        <div className='text-center py-14'>
            <h1 className='text-orange1 text-2xl md:text-3xl lg:text-[40px] font-bold mb-4'>หมวดหมู่งานยอดนิยม</h1>
            
            {/* เพิ่ม relative และ z-index เพื่อควบคุม stacking context */}
            <div className='relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 lg:gap-6 max-w-7xl mx-auto mt-16'>
                {/* Card 1 */}
                <div className='relative rounded-2xl px-4 lg:px-6 py-8 lg:py-10 text-center bg-gradient-to-br from-white to-white2 border-2 border-transparent hover:border-orange1 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1'>
                    <div className='mb-6'>
                        {/* <img src={Student} alt="Student" className='w-12 lg:w-16 h-12 lg:h-16 mx-auto'/> */}
                    </div>
                    <h3 className='text-lg lg:text-xl font-semibold mb-4 text-gray-800'>เขียนบทความ</h3>
                    <p className='text-grey2 text-sm leading-relaxed'>
                        250+ งาน
                    </p>
                </div>
                {/* Card 2 */}
                <div className='relative rounded-2xl px-4 lg:px-6 py-8 lg:py-10 text-center bg-gradient-to-br from-white to-white2 border-2 border-transparent hover:border-orange1 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1'>
                    <div className='mb-6'>
                        {/* <img src={Student} alt="Student" className='w-12 lg:w-16 h-12 lg:h-16 mx-auto'/> */}
                    </div>
                    <h3 className='text-lg lg:text-xl font-semibold mb-4 text-gray-800'>ออกแบบกราฟิก</h3>
                    <p className='text-grey2 text-sm leading-relaxed'>
                        180+ งาน
                    </p>
                </div>
                {/* Card 3 */}
                <div className='relative rounded-2xl px-4 lg:px-6 py-8 lg:py-10 text-center bg-gradient-to-br from-white to-white2 border-2 border-transparent hover:border-orange1 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1'>
                    <div className='mb-6'>
                        {/* <img src={Student} alt="Student" className='w-12 lg:w-16 h-12 lg:h-16 mx-auto'/> */}
                    </div>
                    <h3 className='text-lg lg:text-xl font-semibold mb-4 text-gray-800'>เขียนเว็บไซต์</h3>
                    <p className='text-grey2 text-sm leading-relaxed'>
                        300+ งาน
                    </p>
                </div>
                {/* Card 4 */}
                <div className='relative rounded-2xl px-4 lg:px-6 py-8 lg:py-10 text-center bg-gradient-to-br from-white to-white2 border-2 border-transparent hover:border-orange1 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1'>
                    <div className='mb-6'>
                        {/* <img src={Student} alt="Student" className='w-12 lg:w-16 h-12 lg:h-16 mx-auto'/> */}
                    </div>
                    <h3 className='text-lg lg:text-xl font-semibold mb-4 text-gray-800'>ตัดต่อวิดีโอ</h3>
                    <p className='text-grey2 text-sm leading-relaxed'>
                        250+ งาน
                    </p>
                </div>
                {/* Card 5 */}
                <div className='relative rounded-2xl px-4 lg:px-6 py-8 lg:py-10 text-center bg-gradient-to-br from-white to-white2 border-2 border-transparent hover:border-orange1 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1'>
                    <div className='mb-6'>
                        {/* <img src={Student} alt="Student" className='w-12 lg:w-16 h-12 lg:h-16 mx-auto'/> */}
                    </div>
                    <h3 className='text-lg lg:text-xl font-semibold mb-4 text-gray-800'>แปลภาษา</h3>
                    <p className='text-grey2 text-sm leading-relaxed'>
                        250+ งาน
                    </p>
                </div>
                <div className='relative rounded-2xl px-4 lg:px-6 py-8 lg:py-10 text-center bg-gradient-to-br from-white to-white2 border-2 border-transparent hover:border-orange1 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1'>
                    <div className='mb-6'>
                        {/* <img src={Student} alt="Student" className='w-12 lg:w-16 h-12 lg:h-16 mx-auto'/> */}
                    </div>
                    <h3 className='text-lg lg:text-xl font-semibold mb-4 text-gray-800'>การตลาดออนไลน์</h3>
                    <p className='text-grey2 text-sm leading-relaxed'>
                        120+ งาน
                    </p>
                </div>
                <div className='relative rounded-2xl px-4 lg:px-6 py-8 lg:py-10 text-center bg-gradient-to-br from-white to-white2 border-2 border-transparent hover:border-orange1 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1'>
                    <div className='mb-6'>
                        {/* <img src={Student} alt="Student" className='w-12 lg:w-16 h-12 lg:h-16 mx-auto'/> */}
                    </div>
                    <h3 className='text-lg lg:text-xl font-semibold mb-4 text-gray-800'>การสอนพิเศษ</h3>
                    <p className='text-grey2 text-sm leading-relaxed'>
                        90+ งาน
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Category
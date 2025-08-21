import {React,  useState, useEffect } from 'react'

function Header() {

  // Custom hook for counter animation
  const useCounter = (end, duration = 2000, start = 0) => {
    const [count, setCount] = useState(start)

    useEffect(() => {
      let startTime
      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp
        const progress = timestamp - startTime
        const percentage = Math.min(progress / duration, 1)
        
        const easeOutQuart = 1 - Math.pow(1 - percentage, 4)
        const currentCount = Math.floor(easeOutQuart * (end - start) + start)
        
        setCount(currentCount)
        
        if (percentage < 1) {
          requestAnimationFrame(animate)
        }
      }
      
      const timer = setTimeout(() => {
        requestAnimationFrame(animate)
      }, 500) // Delay start of animation
      
      return () => clearTimeout(timer)
    }, [end, duration, start])

    return count
  }

  const animatedStudents = useCounter(5672, 2000)
  const animatedJobs = useCounter(23865, 2000)
  const animatedCategories = useCounter(53, 2000)

  return (
    <div className='w-full mx-auto bg-gradient-to-r from-orange1 via-orange2 to-orange3 border-red-800 py-8 sm:py-12 lg:py-16'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='justify items-center text-center mx-auto text-white'>
          <h1 className='font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[56px] tracking-wider leading-tight'>
            งานเสริมสำหรับนักศึกษา
          </h1>
          
          <p className='text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl py-3 sm:py-4 lg:py-6 max-w-4xl mx-auto leading-relaxed'>
            แพลตฟอร์มเฉพาะนักศึกษา หางานเสริมได้ง่าย ไม่ต้องแข่งกับมืออาชีพ
            <br className='hidden sm:block'/>
            <span className='sm:hidden'> </span>
            สร้างประสบการณ์ สร้างรายได้ ขณะเรียน
          </p>
          
          <div className='grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4 md:gap-8 lg:gap-12 max-w-2xl lg:max-w-3xl mx-auto pt-4 sm:pt-6 lg:pt-8'>
            <div className='text-center'>
              <p className='font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl '>
                {animatedStudents.toLocaleString()}
              </p>
              <p className='text-sm sm:text-base md:text-lg lg:text-xl mt-1 sm:mt-2'>
                นักศึกษาในระบบ
              </p>
            </div>
            
            <div className='text-center'>
              <p className='font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl '>
                {animatedJobs.toLocaleString()}
              </p>
              <p className='text-sm sm:text-base md:text-lg lg:text-xl mt-1 sm:mt-2'>
                งานที่สำเร็จ
              </p>
            </div>
            
            <div className='text-center'>
              <p className='font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl '>
                {animatedCategories}
              </p>
              <p className='text-sm sm:text-base md:text-lg lg:text-xl mt-1 sm:mt-2'>
                หมวดหมู่งาน
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
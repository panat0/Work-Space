import React from 'react'
import Student from '/src/image/Student Male.png'
import Clock from '/src/image/Clock.png'
import Lock from '/src/image/Security Lock.png'

function WorkSpace() {
  return (
    <div className='w-full mx-auto container'>
        <div className='text-center py-14'>
            <h1 className='text-orange1 text-[40px] font-bold mb-4'>ทำไมต้องเลือก WorkSpace?</h1>
            <p className='text-grey1 text-[20px] mb-12'>แพลตฟอร์มที่ออกแบบมาเฉพาะสำหรับนักศึกษา เพื่อประสบการณ์ที่ดีที่สุด</p>
            
            <div className='flex justify-center gap-8 max-w-6xl mx-auto'>
                {/* Card 1 */}
                <div className='rounded-2xl px-6 py-10 w-80 text-center border-creem border-[2px]  drop-shadow-xl shadow-creem shadow-xl hover:bg-white1 '>
                    <div className='mb-6'>
                        <img src={Student} alt="Student" className='w-16 h-16 mx-auto'/>
                    </div>
                    <h3 className='text-xl font-semibold mb-4 text-gray-800'>เฉพาะนักศึกษา</h3>
                    <p className='text-grey2 text-sm leading-relaxed'>
                        ไม่ต้องกังวลเรื่องการแข่งขันกับมืออาชีพ 
                        พื้นที่นี้สงวนไว้สำหรับนักศึกษาเท่านั้น 
                        เพื่อโอกาสที่เท่าเทียม
                    </p>
                </div>

                {/* Card 2 */}
                <div className='rounded-2xl px-6 py-10 w-80 text-center border-creem border-[2px] shadow-creem drop-shadow-xl  shadow-xl hover:bg-white1'>
                    <div className='mb-6'>
                        <img src={Clock} alt="Clock" className='w-16 h-16 mx-auto'/>
                    </div>
                    <h3 className='text-xl font-semibold mb-4 text-gray-800'>เวลาที่ยืดหยุ่น</h3>
                    <p className='text-grey2 text-sm leading-relaxed'>
                        งานที่เข้าใจไลฟ์สไตล์นักศึกษา 
                        สามารถทำงานในช่วงเวลาว่าง 
                        ไม่กระทบการเรียน
                    </p>
                </div>

                {/* Card 3 */}
                <div className='rounded-2xl px-6 py-10 w-80 text-center border-creem border-[2px] shadow-creem drop-shadow-xl shadow-xl hover:bg-white1'>
                    <div className='mb-6'>
                        <img src={Lock} alt="Security Lock" className='w-16 h-16 mx-auto'/>
                    </div>
                    <h3 className='text-xl font-semibold mb-4 text-gray-800'>ปลอดภัย มั่นใจ</h3>
                    <p className='text-grey2 text-sm leading-relaxed'>
                        ระบบการชำระเงินที่ปลอดภัย 
                        พร้อมทีมงานคอยดูแลและให้คำแนะนำ
                        นักศึกษาตลอดเวลา
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WorkSpace
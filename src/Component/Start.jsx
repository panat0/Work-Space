import React from 'react'
import One from '/src/image/one.png'
import Two from '/src/image/two.png'
import Three from '/src/image/three.png'
import Four from '/src/image/four.png'

function WorkSpace() {
    return (
        <div className='w-full mx-auto  bg-partail mt-16'>
            <div className='text-center py-14'>
                <h1 className='text-orange1 text-[40px] font-bold mb-4'>เริ่มต้นได้อย่างไร?</h1>
                <p className='text-grey1 text-[20px] mb-12'>เพียง 4 ขั้นตอนง่ายๆ ก็เริ่มหาเงินได้แล้ว</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                    {/* Card 1 */}
                    <div className="rounded-2xl px-6 py-10 text-center bg-white ">
                        <div className="mb-6">
                            <img src={One} alt="Clock" className="w-24 h-24 mx-auto" />
                        </div>
                        <h3 className="text-xl font-semibold mb-4 text-gray-800">เฉพาะนักศึกษา</h3>
                        <p className="text-grey2 text-sm leading-relaxed">
                            ไม่ต้องกังวลเรื่องการแข่งขันกับมืออาชีพ
                            พื้นที่นี้สงวนไว้สำหรับนักศึกษาเท่านั้น
                            เพื่อโอกาสที่เท่าเทียม
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="rounded-2xl px-6 py-10 text-center bg-white">
                        <div className="mb-6">
                            <img src={Two} alt="Clock" className="w-24 h-24 mx-auto" />
                        </div>
                        <h3 className="text-xl font-semibold mb-4 text-gray-800">เวลาที่ยืดหยุ่น</h3>
                        <p className="text-grey2 text-sm leading-relaxed">
                            งานที่เข้าใจไลฟ์สไตล์นักศึกษา
                            สามารถทำงานในช่วงเวลาว่าง
                            ไม่กระทบการเรียน
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="rounded-2xl px-6 py-10 text-center bg-white">
                        <div className="mb-6">
                            <img src={Three} alt="Security Lock" className="w-24 h-24 mx-auto" />
                        </div>
                        <h3 className="text-xl font-semibold mb-4 text-gray-800">ปลอดภัย มั่นใจ</h3>
                        <p className="text-grey2 text-sm leading-relaxed">
                            ระบบการชำระเงินที่ปลอดภัย
                            พร้อมทีมงานคอยดูแลและให้คำแนะนำ
                            นักศึกษาตลอดเวลา
                        </p>
                    </div>

                    {/* Card 4 */}
                    <div className="rounded-2xl px-6 py-10 text-center bg-white">
                        <div className="mb-6">
                            <img src={Four} alt="Security Lock" className="w-24 h-24 mx-auto" />
                        </div>
                        <h3 className="text-xl font-semibold mb-4 text-gray-800">ปลอดภัย มั่นใจ</h3>
                        <p className="text-grey2 text-sm leading-relaxed">
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
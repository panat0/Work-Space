import React from 'react'
import iconclock from '../image/iconclock.png'
import iconBag from '../image/iconBag.png'

function Employment() {
    return (
        <>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="flex items-center justify-between mb-4 ">
                    <div className='flex items-center'>
                        <img className="w-9 h-9 text-orange-500 mr-2" src={iconclock} />
                        <h2 className="text-lg font-semibold text-gray-800">ประวัติการถูกจ้างงาน</h2>
                    </div>
                    <button>
                        <img className='rounded-lg ' src='' />
                    </button>
                </div>

                <div className=' bg-orange-500 w-full h-[2.5px] rounded-lg mb-2'></div>
                <div className='justify items-center justify-items-center py-24'>
                    <img className='w-20' src={iconBag} />
                    <h2 className="text-grey1 text-lg leading-relaxed pt-4">ยังไม่มีประวัติการจ้างงาน</h2>
                </div>
            </div>
        </>
    )
}

export default Employment

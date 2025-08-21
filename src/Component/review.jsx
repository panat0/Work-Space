import React from 'react'
import iconChat from '../image/iconChat.png'
import iconChat1 from '../image/iconChat1.png'



function Review() {
    return (
        <>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="flex items-center justify-between mb-4 ">
                    <div className='flex items-center'>
                        <img className="w-9 h-9 text-orange-500 mr-2" src={iconChat} />
                        <h2 className="text-lg font-semibold text-gray-800">รีวิวจากผู้จ้างงาน</h2>
                    </div>
                    <button>
                        <img className='rounded-lg ' src='' />
                    </button>
                </div>

                <div className=' bg-orange-500 w-full h-[2.5px] rounded-lg mb-2'></div>
                <div className='justify items-center justify-items-center py-24'>
                    <img className='w-20' src={iconChat1} />
                    <h2 className="text-grey1 text-sm leading-relaxed pt-4">ยังไม่มีรีวิวจากผู้จ้างงาน</h2>
                    <p className='text-grey3 pt-4'>เมื่อคุณทำงานให้ลูกค้าเสร็จสิ้น รีวิวจะปรากฏที่นี่</p>
                </div>
            </div>
        </>
    )
}

export default Review

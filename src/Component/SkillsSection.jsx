import React from 'react';
import { Award } from 'lucide-react';
import Edit from '../image/edit.png'
import iconStar from '../image/iconStar.png'
import one from '../image/iconSkill/1.png'
import two from '../image/iconSkill/2.png'
import three from '../image/iconSkill/3.png'
import four from '../image/iconSkill/4.png'
import five from '../image/iconSkill/5.png'
import six from '../image/iconSkill/6.png'
import seven from '../image/iconSkill/7.png'
import eight from '../image/iconSkill/8.png'

function SkillsSection() {
    return (
        <>
            <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center justify-between mb-4">
                    <div className='flex items-center'>
                        <img className="w-7 h-7 text-orange-500 mr-2" src={iconStar} />
                        <h2 className="text-lg font-semibold text-gray-800">ทักษะความสามารถ</h2>
                    </div>
                    <button>
                        <img className='rounded-lg ' src={Edit} />
                    </button>
                </div>
                <div className=' bg-orange-500 w-full h-[2.5px] rounded-lg mb-5 '></div>
                <div className="flex flex-wrap gap-2">
                    <span className='flex gap-1 bg-gradient-to-br from-orange1 to-orange2 text-white  px-3 py-2 rounded-xl items-center '>
                        <img className='w-4 h-4' src={one} />
                        <p className='text-sm'>เขียนคอนเทนต์</p>
                        <p className='bg-white bg-opacity-30 px-2 py-1 rounded-md text-xs'>ชำนาญ</p>
                    </span>
                    <span className='flex gap-1 bg-gradient-to-br from-orange1 to-orange2 text-white  px-3 py-2 rounded-xl items-center '>
                        <img className='w-4 h-4' src={two} />
                        <p className='text-sm'>Photoshop</p>
                        <p className='bg-white bg-opacity-30 px-2 py-1 rounded-md text-xs'>ดี</p>
                    </span>
                    <span className='flex gap-1 bg-gradient-to-br from-orange1 to-orange2 text-white  px-3 py-2 rounded-xl items-center '>
                        <img className='w-4 h-4' src={three} />
                        <p className='text-sm'>Illustrator</p>
                        <p className='bg-white bg-opacity-30 px-2 py-1 rounded-md text-xs'>ดี</p>
                    </span>
                    <span className='flex gap-1 bg-gradient-to-br from-orange1 to-orange2 text-white  px-3 py-2 rounded-xl items-center '>
                        <img className='w-4 h-4' src={four} />
                        <p className='text-sm'>แปลภาษาอังกฤษ</p>
                        <p className='bg-white bg-opacity-30 px-2 py-1 rounded-md text-xs'>ชำนาญ</p>
                    </span>
                    <span className='flex gap-1 bg-gradient-to-br from-orange1 to-orange2 text-white  px-3 py-2 rounded-xl items-center '>
                        <img className='w-4 h-4' src={five} />
                        <p className='text-sm'>Social Media Marketing</p>
                        <p className='bg-white bg-opacity-30 px-2 py-1 rounded-md text-xs'>ปานกลาง</p>
                    </span>
                    <span className='flex gap-1 bg-gradient-to-br from-orange1 to-orange2 text-white  px-3 py-2 rounded-xl items-center '>
                        <img className='w-4 h-4' src={six} />
                        <p className='text-sm'>ตัดต่อวิดีโอ</p>
                        <p className='bg-white bg-opacity-30 px-2 py-1 rounded-md text-xs'>ปานกลาง</p>
                    </span>
                    <span className='flex gap-1 bg-gradient-to-br from-orange1 to-orange2 text-white  px-3 py-2 rounded-xl items-center '>
                        <img className='w-4 h-4' src={seven} />
                        <p className='text-sm'>ถ่ายภาพ</p>
                        <p className='bg-white bg-opacity-30 px-2 py-1 rounded-md text-xs'>ดี</p>
                    </span>
                    <span className='flex gap-1 bg-gradient-to-br from-orange1 to-orange2 text-white  px-3 py-2 rounded-xl items-center '>
                        <img className='w-4 h-4' src={eight} />
                        <p className='text-sm'>HTML/CSS เบื้องต้น</p>
                        <p className='bg-white bg-opacity-30 px-2 py-1 rounded-md text-xs'>เริ่มต้น</p>
                    </span>
                </div>
            </div >
        </>
    );
};

export default SkillsSection;

import React from 'react';

import UserProfile from '../image/Userprofile.png'
import iconU from '../image/iconUniversity.png'
import iconMail from '../image/iconMail.png'
import iconPhone from '../image/iconPhone.png'
import iconMap from '../image/IconMap.png'
import iconCalendar from '../image/iconCalendar.png'
import iconEdit from '../image/iconEdit.png'

function ProfileHeader() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      {/* Profile Info Section */}
      <div className="text-center mb-6">
        <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-200 mx-auto mb-4 border-4 border-orange-500">
          <img
            src={UserProfile}
            alt="John Doe"
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="text-xl font-bold text-gray-800 mb-1">John Doe</h1>
        <p className="text-orange-500 font-medium mb-4">นักพัฒนาเว็บไซต์ & นักออกแบบกราฟฟิก</p>

        <div className="flex items-center justify-center space-x-2 text-sm text-gray-600 mb-4">
          <img className="w-4 h-4" src={iconU} />
          <span>มหาวิทยาลัยแม่โจ้</span>
        </div>
      </div>

      {/* Rating Section */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-orange-50 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-orange-500">0</div>
          <div className="text-sm text-gray-600 mt-2">ครั้งที่ถูกจ้าง</div>
        </div>
        <div className="bg-orange-50 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-orange-500">4.8</div>
          <div className="text-sm text-gray-600 flex items-center justify-center mt-2">
            คะแนนเฉลี่ย
          </div>
        </div>
      </div>

      {/* Contact Info */}
      <div className="space-y-3 text-sm text-gray-600 mb-6">
        <div className="flex items-center space-x-2">
          <img className=" text-orange-500 " src={iconMail} />
          <span>johndoe@mju.ac.th</span>
        </div>
        <div className="flex items-center space-x-2">
          <img className=" text-orange-500" src={iconPhone} />
          <span>086-xxx-xxxx</span>
        </div>
        <div className="flex items-center space-x-2">
          <img className=" text-orange-500" src={iconMap} />
          <span>เชียงใหม่</span>
        </div>
        <div className="flex items-center space-x-2">
          <img className=" text-orange-500" src={iconCalendar}/>
          <span>เข้าร่วมเมื่อ มกราคม 2024</span>
        </div>
      </div>

      {/* Chat Button */}
      <button className="w-full flex items-center justify-center bg-gradient-to-r from-orange1 to-orange2 text-white py-3 px-4 rounded-lg  transition-colors font-medium">
        <img src={iconEdit} />
        แก้ไขโปรไฟล์
      </button>
    </div>
  );
};

export default ProfileHeader;
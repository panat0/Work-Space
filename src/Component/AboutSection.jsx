import React from 'react';
import { User } from 'lucide-react';
import iconUser from '../image/iconUser.png'

function AboutSection() {
    return (
        <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
                <img className="w-7 h-7 text-orange-500 mr-2" src={iconUser}/>
                <h2 className="text-lg font-semibold text-gray-800">เกี่ยวกับตัวฉัน</h2>
                
            </div>
            <div className=' bg-orange-500 w-full h-[2.5px] rounded-lg mb-2 '></div>
            <p className="text-gray-600 text-sm leading-relaxed">
                สวัสดีครับ ผมเป็นนักศึกษาชั้นปีที่ 3 คณะนิเทศศาสตร์ มหาวิทยาลัยแม่โจ้ สาขาวิชานิเทศศาสตร์
                ผมมีความสนใจในด้านการเขียนคอนเทนต์ การออกแบบกราฟิก และการตลาดดิจิทัล ผมเชื่อว่าการ
                ทำงานเสริมในช่วงเรียนจะช่วยให้ได้ประสบการณ์จริงที่ไม่สามารถเรียนรู้ได้จากตำรา ผมมีความรับผิด
                ชอบสูง ตรงต่อเวลา และพร้อมเรียนรู้สิ่งใหม่ๆ เสมอ ผมสามารถทำงานได้ทั้งแบบเดี่ยวและเป็นทีม มี
                ทักษะการสื่อสารที่ดี และสามารถปรับตัวได้เร็วตามความต้องการของงาน หากมีโอกาสได้ร่วมงานกับ
                ท่าน ผมจะทุ่มเทและส่งมอบผลงานที่ดีที่สุดครับ
            </p>
        </div>
    );
};

export default AboutSection;
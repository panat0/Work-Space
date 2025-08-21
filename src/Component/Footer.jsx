import React from 'react'
import FB from '/src/image/FB.png'
import X from '/src/image/X.png'
import IG from '/src/image/IG.png'
import Mail from '/src/image/Mail.png'

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6">
      <div className="max-w-6xl mx-auto px-4">
        {/* Links */}
        <div className="flex justify-center space-x-6 mb-4">
          <a href="#" className="hover:text-white">เกี่ยวกับเรา</a>
          <a href="#" className="hover:text-white">นโยบายความเป็นส่วนตัว</a>
          <a href="#" className="hover:text-white">ข้อตกลงการใช้งาน</a>
          <a href="#" className="hover:text-white">ติดต่อเรา</a>
          <a href="#" className="hover:text-white">ช่วยเหลือ</a>
        </div>

        {/* Social icons */}
        <div className="flex justify-center space-x-6 mb-4">
          <a href="#" className="text-white hover:text-orange-400 text-xl"><img src={FB} alt=''/></a>
          <a href="#" className="text-white hover:text-orange-400 text-xl"><img src={X} alt=''/></a>
          <a href="#" className="text-white hover:text-orange-400 text-xl"><img src={IG} alt=''/></a>
          <a href="#" className="text-white hover:text-orange-400 text-xl"><img src={Mail} alt=''/></a>

        </div>

        {/* Copyright */}
        <p className="text-center text-sm">
          © 2024 WorkSpace. สงวนลิขสิทธิ์ทุกประการ
        </p>
      </div>
    </footer>
  )
}

export default Footer

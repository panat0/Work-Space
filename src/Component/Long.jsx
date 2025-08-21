import React from 'react'

function Long() {
  return (
    <>
      {/* เพิ่ม relative และ z-index เพื่อให้ element นี้อยู่เหนือ shadow */}
      <section className="relative z-20 bg-gradient-to-r from-orange1 via-orange2 to-orange3 text-center py-16">
        <p className="text-5xl font-bold text-white mb-4 pb-7">
          พร้อมเริ่มต้นแล้วหรือยัง?
        </p>
        <p className="text-white text-lg mb-8 pt-2">
          เข้าร่วมกับนักศึกษาหลายพันคนที่เลือกใช้{" "}
          <span className="font-semibold">WorkSpace</span>{" "}
          เพื่อสร้างประสบการณ์และรายได้
        </p>
        <button className="bg-white text-orange-500 font-semibold px-6 py-3 rounded-full shadow hover:scale-105 transition duration-300">
          เริ่มต้นฟรีวันนี้
        </button>
      </section>
    </>
  )
}

export default Long

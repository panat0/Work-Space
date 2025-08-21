import React, { useState, useEffect, useRef } from 'react';
import Nav from './Component/Nav';
import Footer from './Component/Footer';

const JobBoard = () => {
  // Job data
  const allJobs = [
    {
      id: 1,
      title: "ติวเตอร์คณิตศาสตร์ ม.ปลาย",
      company: "คุณสมศรี นนทบุรี",
      price: "800 บาท/ชั่วโมง",
      priceValue: 800,
      category: "tutoring",
      location: "nonthaburi",
      locationText: "นนทบุรี",
      description: "ต้องการติวเตอร์สอนคณิตศาสตร์ ม.ปลาย เพื่อเตรียมสอบ GAT/PAT นักศึกษาคณะวิศวกรรมศาสตร์หรือวิทยาศาสตร์ที่มีผลการเรียนดี",
      tags: ["การสอนพิเศษ", "คณิตศาสตร์", "ม.ปลาย", "ออนไซต์"],
      time: "2 ชั่วโมง/สัปดาห์",
      rating: "4.8 (12 รีวิว)",
      urgent: false
    },
    {
      id: 2,
      title: "เขียนบทความรีวิวร้านอาหาร",
      company: "บริษัท Food Review Co.",
      price: "300 บาท/บทความ",
      priceValue: 300,
      category: "online",
      location: "remote",
      locationText: "Work from Home",
      description: "รับสมัครนักศึกษาเขียนบทความรีวิวร้านอาหาร 800-1000 คำ พร้อมรูปภาพประกอบ สำหรับเว็บไซต์รีวิวอาหาร",
      tags: ["งานออนไลน์", "เขียนบทความ", "รีวิว", "รีโมท"],
      time: "5 บทความ/สัปดาห์",
      rating: "4.5 (8 รีวิว)",
      urgent: true
    },
    {
      id: 3,
      title: "พนักงานพาร์ทไทม์ ร้านกาแฟ",
      company: "Café Student สยาม",
      price: "120 บาท/ชั่วโมง",
      priceValue: 120,
      category: "service",
      location: "bangkok",
      locationText: "สยาม กรุงเทพ",
      description: "รับสมัครนักศึกษาทำงานพาร์ทไทม์ที่ร้านกาแฟ ทำเครื่องดื่ม รับออเดอร์ แคชเชียร์ เวลาทำงานยืดหยุ่นตามตารางเรียน",
      tags: ["งานบริการ", "ร้านกาแฟ", "พาร์ทไทม์", "สยาม"],
      time: "15-20 ชั่วโมง/สัปดาห์",
      rating: "4.7 (15 รีวิว)",
      urgent: false
    },
    {
      id: 4,
      title: "จัดการเพจ Instagram ร้านเสื้อผ้า",
      company: "Trendy Style Shop",
      price: "8,000 บาท/เดือน",
      priceValue: 8000,
      category: "social",
      location: "remote",
      locationText: "Work from Home",
      description: "หานักศึกษาช่วยจัดการ Instagram ร้านเสื้อผ้า โพสต์รูปภาพ เขียน Caption ตอบคอมเมนต์ และวิเคราะห์ยอดขาย",
      tags: ["โซเชียลมีเดีย", "Instagram", "แฟชั่น", "รีโมท"],
      time: "งานประจำพาร์ทไทม์",
      rating: "4.6 (6 รีวิว)",
      urgent: false
    },
    {
      id: 5,
      title: "สอนภาษาอังกฤษ ระดับประถม",
      company: "โรงเรียนสอนพิเศษ ABC",
      price: "450 บาท/ชั่วโมง",
      priceValue: 450,
      category: "tutoring",
      location: "bangkok",
      locationText: "บางนา กรุงเทพ",
      description: "รับสมัครนักศึกษาสอนภาษาอังกฤษให้เด็กประถม การสนทนาพื้นฐาน และไวยากรณ์เบื้องต้น ต้องการผู้ที่มีทักษะการสื่อสารดี",
      tags: ["การสอนพิเศษ", "ภาษาอังกฤษ", "ประถม", "บางนา"],
      time: "3 ชั่วโมง/สัปดาห์",
      rating: "4.9 (20 รีวิว)",
      urgent: true
    },
    {
      id: 6,
      title: "ออกแบบโลโก้และนามบัตร",
      company: "Creative Agency Plus",
      price: "1,500 บาท/โปรเจค",
      priceValue: 1500,
      category: "online",
      location: "remote",
      locationText: "Work from Home",
      description: "รับออกแบบโลโก้และนามบัตรสำหรับธุรกิจขนาดเล็ก ต้องการนักศึกษาที่มีความรู้ Adobe Illustrator หรือ Photoshop",
      tags: ["ดีไซน์", "โลโก้", "กราฟิก", "Adobe"],
      time: "2-3 โปรเจค/เดือน",
      rating: "4.4 (11 รีวิว)",
      urgent: false
    },
    {
      id: 7,
      title: "พนักงานขายมือถือ",
      company: "Mobile Center เซ็นทรัล",
      price: "150 บาท/ชั่วโมง + คอมมิชชั่น",
      priceValue: 150,
      category: "service",
      location: "bangkok",
      locationText: "เซ็นทรัล กรุงเทพ",
      description: "รับสมัครนักศึกษาขายมือถือและอุปกรณ์ มีค่าคอมมิชชั่นเพิ่ม เวลางานยืดหยุ่น เหมาะกับคนที่ชอบคุยกับลูกค้า",
      tags: ["งานขาย", "มือถือ", "คอมมิชชั่น", "เซ็นทรัล"],
      time: "20-25 ชั่วโมง/สัปดาห์",
      rating: "4.2 (9 รีวิว)",
      urgent: false
    },
    {
      id: 8,
      title: "ช่วยจัดงาน Event",
      company: "Event Pro Thailand",
      price: "200 บาท/ชั่วโมง",
      priceValue: 200,
      category: "service",
      location: "samutprakan",
      locationText: "สมุทรปราการ",
      description: "รับสมัครนักศึกษาช่วยจัดงาน Event ต่างๆ ทั้งงานแต่งงาน งานบริษัท และงานเปิดตัวสินค้า งานหลากหลายและสนุก",
      tags: ["Event", "งานจัดงาน", "หลากหลาย", "ชั่วคราว"],
      time: "5-10 วัน/เดือน",
      rating: "4.6 (14 รีวิว)",
      urgent: true
    }
  ];

  // State
  const [filteredJobs, setFilteredJobs] = useState(allJobs);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [priceFilter, setPriceFilter] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [currentView, setCurrentView] = useState('grid');
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [stats, setStats] = useState({ jobs: 1247, students: 8932, companies: 456 });
  const [headerScrolled, setHeaderScrolled] = useState(false);

  const jobsPerPage = 6;
  const jobListingsRef = useRef(null);

  // Effects
  useEffect(() => {
    const handleScroll = () => {
      setHeaderScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    applyFilters();
  }, [searchTerm, categoryFilter, priceFilter, locationFilter]);

  useEffect(() => {
    updateStats();
  }, []);

  // Functions
  const applyFilters = () => {
    let filtered = allJobs.filter(job => {
      const matchesCategory = !categoryFilter || job.category === categoryFilter;
      const matchesLocation = !locationFilter || job.location === locationFilter;
      const matchesSearch = !searchTerm || 
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())) ||
        job.company.toLowerCase().includes(searchTerm.toLowerCase());

      let matchesPrice = true;
      if (priceFilter) {
        const [min, max] = priceFilter.split('-').map(p => p === '+' ? Infinity : parseInt(p));
        matchesPrice = job.priceValue >= min && (max ? job.priceValue <= max : true);
      }

      return matchesCategory && matchesLocation && matchesPrice && matchesSearch;
    });

    setFilteredJobs(filtered);
    setCurrentPage(1);
  };

  const performSearch = () => {
    if (searchTerm.trim()) {
      setIsLoading(true);
      
      setTimeout(() => {
        applyFilters();
        setIsLoading(false);
        
        if (jobListingsRef.current) {
          jobListingsRef.current.scrollIntoView({ behavior: 'smooth' });
        }
      }, 800);
    } else {
      applyFilters();
    }
  };

  const handleCategoryClick = (category) => {
    setCategoryFilter(category);
    if (jobListingsRef.current) {
      jobListingsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const resetFilters = () => {
    setSearchTerm('');
    setCategoryFilter('');
    setPriceFilter('');
    setLocationFilter('');
    setCurrentPage(1);
  };

  const handleJobClick = (job) => {
    alert(`รายละเอียดงาน: ${job.title}\n\nบริษัท: ${job.company}\nเงินเดือน: ${job.price}\nสถานที่: ${job.locationText}\n\n${job.description}`);
  };

  const updateStats = () => {
    const newStats = {
      jobs: Math.floor(Math.random() * 500) + 1000,
      students: Math.floor(Math.random() * 2000) + 8000,
      companies: Math.floor(Math.random() * 100) + 400
    };
    setStats(newStats);
  };

  const loadMore = () => {
    setCurrentPage(prev => prev + 1);
  };

  // Render functions
  const renderJobCard = (job, index) => {
    return (
      <div
        key={job.id}
        className="bg-white p-8 rounded-3xl shadow-sm border border-gray-50 transition-all duration-500 ease-out cursor-pointer hover:transform hover:-translate-y-2 hover:shadow-xl group relative overflow-hidden"
        onClick={() => handleJobClick(job)}
        style={{ animationDelay: `${index * 0.1}s` }}
      >
        {/* Top gradient line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
        
        <div className="flex justify-between items-start mb-6 gap-4">
          <div>
            <div className="text-xl font-semibold text-gray-900 mb-2 leading-tight">{job.title}</div>
            <div className="text-gray-500 text-sm mb-3">{job.company}</div>
            <div className="inline-block bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-3 py-1 rounded-lg text-xs font-semibold">
              เฉพาะนักศึกษา
            </div>
            {job.urgent && (
              <div className="inline-block bg-gradient-to-r from-amber-500 to-orange-500 text-white px-3 py-1 rounded-lg text-xs font-semibold mt-2 ml-2">
                งานด่วน!
              </div>
            )}
          </div>
          <div className="bg-gradient-to-r from-orange3 to-orange1 text-white px-4 py-2 rounded-xl font-semibold text-sm whitespace-nowrap">
            {job.price}
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {job.tags.map((tag, i) => (
            <span
              key={i}
              className={`px-3 py-2 rounded-lg text-xs font-medium ${
                i === 0 
                  ? 'bg-indigo-50 text-indigo-600' 
                  : 'bg-gray-100 text-gray-600'
              }`}
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="text-gray-600 leading-relaxed mb-4 text-sm">
          {job.description}
        </div>

        <div className="flex justify-between items-center text-gray-400 text-xs pt-4 mt-6 border-t border-gray-50">
          <span>⏰ {job.time}</span>
          <span>📍 {job.locationText}</span>
          <span>⭐ {job.rating}</span>
        </div>
      </div>
    );
  };

  const currentJobs = filteredJobs.slice(0, currentPage * jobsPerPage);
  const hasMore = currentPage * jobsPerPage < filteredJobs.length;

  return (
    <div className="font-sans bg-gray-50 min-h-screen text-gray-900 leading-relaxed">
      {/* Header */}
     
        <Nav/>

      <main>
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-8 py-20 text-center">
          <h1 className="text-6xl font-extrabold text-gray-900 mb-6 tracking-tight">
            แพลตฟอร์มหางาน<span className="bg-gradient-to-r from-orange3 to-orange1 bg-clip-text text-transparent">เสริม</span>
            <br />สำหรับนักศึกษา
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto font-normal">
            เปิดโอกาสให้นักศึกษาหางานเสริมที่เหมาะสม ไม่ต้องแข่งแย่งกับผู้มีประสบการณ์ สร้างประสบการณ์การทำงานตั้งแต่เรียน
          </p>

          {/* Categories */}
        <section className="max-w-7xl mx-auto mb-16 px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12 tracking-tight">
            หมวดหมู่งานยอดนิยม
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { category: 'tutoring', icon: '📚', title: 'การสอนพิเศษ', desc: 'สอนเสริม ติวเตอร์ การบ้าน' },
              { category: 'online', icon: '💻', title: 'งานออนไลน์', desc: 'เขียนบทความ ดีไซน์ โปรแกรม' },
              { category: 'service', icon: '🛍️', title: 'งานบริการ', desc: 'ร้านกาแฟ ร้านอาหาร พนักงานขาย' },
              { category: 'social', icon: '📱', title: 'โซเชียลมีเดีย', desc: 'จัดการเพจ คอนเทนต์ การตลาด' }
            ].map((cat, i) => (
              <div
                key={i}
                className="bg-white p-10 rounded-3xl text-center shadow-sm border border-gray-50 transition-all duration-500 ease-out cursor-pointer hover:transform hover:-translate-y-2 hover:shadow-xl group relative overflow-hidden"
                onClick={() => handleCategoryClick(cat.category)}
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange3 via-orange1 to-orange4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="block text-4xl mb-6">{cat.icon}</span>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{cat.title}</h3>
                <p className="text-gray-600 text-sm">{cat.desc}</p>
              </div>
            ))}
          </div>
        </section>
          
          <div className="bg-white rounded-3xl p-2 shadow-xl max-w-3xl mx-auto mb-12 border border-black/5">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                className="flex-1 border-none outline-none px-6 py-4 text-base bg-transparent"
                placeholder="ค้นหางานที่คุณสนใจ เช่น การสอนพิเศษ, งานออนไลน์, งานพาร์ทไทม์..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && performSearch()}
              />
              <button
                className="bg-gradient-to-r from-orange3 to-orange1 text-white border-none rounded-2xl px-8 py-4 font-semibold cursor-pointer transition-all hover:transform hover:-translate-y-0.5 hover:shadow-lg hover:shadow-indigo-500/30 whitespace-nowrap disabled:opacity-50"
                onClick={performSearch}
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="w-5 h-5 border-2 border-gray-200 border-t-white rounded-full animate-spin"></div>
                ) : (
                  '🔍 ค้นหา'
                )}
              </button>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-center gap-12 mt-8">
            {[
              { number: stats.jobs, label: 'งานที่เปิดรับ' },
              { number: stats.students, label: 'นักศึกษาที่ลงทะเบียน' },
              { number: stats.companies, label: 'บริษัทพาร์ทเนอร์' }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <span className="block text-3xl font-bold text-indigo-500">
                  {stat.number.toLocaleString()}
                </span>
                <span className="text-sm text-gray-600 mt-1">{stat.label}</span>
              </div>
            ))}
          </div>
        </section>

        

        {/* Job Listings */}
        <section ref={jobListingsRef} className="max-w-7xl mx-auto px-8 pb-16">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12 tracking-tight">
            งานล่าสุดสำหรับนักศึกษา
          </h2>
          
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 gap-4">
            <div className="flex flex-wrap gap-4">
              <select
                className="px-4 py-3 border-2 border-gray-200 rounded-xl outline-none text-sm bg-white text-gray-600 cursor-pointer transition-all focus:border-indigo-500 focus:shadow-lg focus:shadow-indigo-500/10 min-w-40"
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
              >
                <option value="">ทุกหมวดหมู่</option>
                <option value="tutoring">การสอนพิเศษ</option>
                <option value="online">งานออนไลน์</option>
                <option value="service">งานบริการ</option>
                <option value="social">โซเชียลมีเดีย</option>
              </select>
              <select
                className="px-4 py-3 border-2 border-gray-200 rounded-xl outline-none text-sm bg-white text-gray-600 cursor-pointer transition-all focus:border-indigo-500 focus:shadow-lg focus:shadow-indigo-500/10 min-w-40"
                value={priceFilter}
                onChange={(e) => setPriceFilter(e.target.value)}
              >
                <option value="">ช่วงราคา</option>
                <option value="0-500">ต่ำกว่า 500 บาท</option>
                <option value="500-1000">500-1,000 บาท</option>
                <option value="1000-2000">1,000-2,000 บาท</option>
                <option value="2000+">มากกว่า 2,000 บาท</option>
              </select>
              <select
                className="px-4 py-3 border-2 border-gray-200 rounded-xl outline-none text-sm bg-white text-gray-600 cursor-pointer transition-all focus:border-indigo-500 focus:shadow-lg focus:shadow-indigo-500/10 min-w-40"
                value={locationFilter}
                onChange={(e) => setLocationFilter(e.target.value)}
              >
                <option value="">ทุกพื้นที่</option>
                <option value="remote">Work from Home</option>
                <option value="bangkok">กรุงเทพ</option>
                <option value="nonthaburi">นนทบุรี</option>
                <option value="samutprakan">สมุทรปราการ</option>
              </select>
            </div>
            <div className="flex bg-gray-100 rounded-xl p-1">
              <button
                className={`px-4 py-2 border-none rounded-lg cursor-pointer font-medium transition-all ${
                  currentView === 'grid' 
                    ? 'bg-white text-indigo-500 shadow-lg shadow-black/10' 
                    : 'bg-transparent text-gray-600'
                }`}
                onClick={() => setCurrentView('grid')}
              >
                Grid
              </button>
              <button
                className={`px-4 py-2 border-none rounded-lg cursor-pointer font-medium transition-all ${
                  currentView === 'list' 
                    ? 'bg-white text-indigo-500 shadow-lg shadow-black/10' 
                    : 'bg-transparent text-gray-600'
                }`}
                onClick={() => setCurrentView('list')}
              >
                List
              </button>
            </div>
          </div>

          {filteredJobs.length === 0 ? (
            <div className="text-center py-16 text-gray-600">
              <div className="text-6xl mb-4 opacity-50">🔍</div>
              <h3 className="text-xl font-semibold mb-2">ไม่พบงานที่ตรงกับการค้นหา</h3>
              <p className="mb-4">ลองเปลี่ยนเงื่อนไขการค้นหาหรือรีเซ็ตตัวกรอง</p>
              <button
                className="px-8 py-3 bg-gradient-to-r from-orange3 to-orange1 text-white font-semibold rounded-xl transition-all hover:transform hover:-translate-y-0.5 hover:shadow-lg"
                onClick={resetFilters}
              >
                รีเซ็ตตัวกรอง
              </button>
            </div>
          ) : (
            <>
              <div className={`grid gap-6 ${
                currentView === 'grid' 
                  ? 'grid-cols-1 lg:grid-cols-2 xl:grid-cols-3' 
                  : 'grid-cols-1'
              }`}>
                {currentJobs.map((job, index) => renderJobCard(job, index))}
              </div>

              {hasMore && (
                <div className="text-center mt-12">
                  <button
                    className="bg-white border-2 border-gray-200 text-gray-600 px-8 py-4 rounded-xl font-semibold cursor-pointer transition-all hover:border-orange2 hover:text-orange3 hover:transform hover:-translate-y-0.5"
                    onClick={loadMore}
                  >
                    โหลดงานเพิ่มเติม
                  </button>
                </div>
              )}
            </>
          )}
        </section>
      </main>

      {/* Footer */}
      <Footer/>
    </div>
  );
};

export default JobBoard;
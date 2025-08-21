import React, { useState } from 'react';
import { Search, ChevronRight, Users, Briefcase, ArrowRight } from 'lucide-react';
import Nav from './Component/Nav'
import Foodter from './Component/Footer'


const WorkCategories = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory] = useState('all');

  const categories = [
    {
      id: 'tech',
      title: 'เทคโนโลยีและเว็บไซต์',
      description: 'พัฒนาเว็บไซต์ แอปพลิเคชัน และเทคโนโลยีสมัยใหม่',
      jobs: [
        'เขียนเว็บ (Frontend / Backend / Fullstack)',
        'ออกแบบเว็บไซต์ (UI/UX, Landing Page)',
        'พัฒนาแอปมือถือ (iOS / Android)',
        'พัฒนาเกมออนไลน์',
        'งาน Blockchain / Web3',
        'AI / Machine Learning'
      ],
      jobCount: 1247,
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'design',
      title: 'งานออกแบบและครีเอทีฟ',
      description: 'สร้างสรรค์งานออกแบบที่สวยงามและน่าประทับใจ',
      jobs: [
        'กราฟิกดีไซน์ (Banner, Poster, Infographic)',
        'ออกแบบโลโก้ / แบรนด์',
        'Motion Graphic / Animation',
        'วิดีโอตัดต่อสำหรับ YouTube / TikTok',
        'ออกแบบ Presentation (PowerPoint, Canva, Keynote)',
        '3D Design / โมเดล'
      ],
      jobCount: 892,
      image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'writing',
      title: 'งานเขียนและการแปล',
      description: 'เขียนเนื้อหาคุณภาพ แปลภาษา และสื่อสารอย่างมีประสิทธิภาพ',
      jobs: [
        'เขียนบทความ SEO / Blog',
        'Copywriting (ข้อความโฆษณา)',
        'เขียนสคริปต์วิดีโอ / Podcast',
        'การแปลภาษา (EN/TH/อื่น ๆ)',
        'เขียนรีวิวสินค้า',
        'ตรวจแกรมมาร์ / Proofreading'
      ],
      jobCount: 654,
      image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'marketing',
      title: 'การตลาดออนไลน์และโซเชียลมีเดีย',
      description: 'สร้างแบรนด์ออนไลน์ และเพิ่มยอดขายผ่านช่องทางดิจิทัล',
      jobs: [
        'ทำโฆษณาออนไลน์ (Facebook Ads, TikTok Ads)',
        'การตลาดผ่านโซเชียล (Social Media Marketing)',
        'การสร้างแบรนด์ออนไลน์ (Branding)',
        'การจัดการเพจ / Community Manager',
        'SEO / SEM',
        'Influencer Marketing'
      ],
      jobCount: 743,
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'audio',
      title: 'ดนตรีและเสียง',
      description: 'ผลิตและตัดต่อเสียงคุณภาพสูง',
      jobs: [
        'พากย์เสียง (Voice Over)',
        'Podcast Editing',
        'ตัดต่อเสียง / ทำ Sound Effect',
        'ทำเพลง / Beat สำหรับคอนเทนต์',
        'Audio Mastering'
      ],
      jobCount: 321,
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'education',
      title: 'การศึกษาและการสอนออนไลน์',
      description: 'ถ่ายทอดความรู้และพัฒนาทักษะให้กับผู้เรียน',
      jobs: [
        'ติวเตอร์ออนไลน์ (คณิต / วิทย์ / ภาษา)',
        'สอนภาษาอังกฤษ / ภาษาจีน / ภาษาญี่ปุ่น',
        'สอนเขียนโค้ด / Programming Online',
        'สอนทำคอนเทนต์ / TikTok / YouTube',
        'สอนออกแบบกราฟิก / Photoshop / Illustrator'
      ],
      jobCount: 432,
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  const filteredCategories = categories.filter(category => {
    const matchesSearch = category.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         category.jobs.some(job => job.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || category.id === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const totalJobs = categories.reduce((sum, category) => sum + category.jobCount, 0);

  return (
    <div className="min-h-screen bg-white">
      
        <Nav />

      {/* Hero Section */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            หมวดหมู่งาน
          </h1>
          <p className="text-xl text-gray-600 mb-8">ค้นหาผู้เชี่ยวชาญด้านการเขียนและแปลภาษาที่เหมาะกับงานของคุณ</p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="ค้นหาหมวดหมู่งาน หรือทักษะที่ต้องการ..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent text-lg"
              />
            </div>
          </div>

          {/* Stats */}
          <div className="flex items-center justify-center gap-8 text-gray-600">
            <div className="flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-orange-500" />
              <span>{totalJobs.toLocaleString()} งานที่เปิดรับ</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-orange-500" />
              <span>ฟรีแลนซ์นมากกว่า 50,000 คน</span>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="max-w-7xl mx-auto px-4 pb-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 group cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                <div className="absolute top-4 left-4">
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white text-xl font-bold mb-1 group-hover:text-orange-300 transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-white/90 text-sm">
                    {category.description}
                  </p>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-orange-500 font-semibold">
                    {category.jobCount.toLocaleString()} งาน
                  </span>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-orange-500 transition-colors" />
                </div>
                
                <div className="space-y-2">
                  {category.jobs.slice(0, 3).map((job, index) => (
                    <div key={index} className="text-sm text-gray-600 flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="leading-relaxed">{job}</span>
                    </div>
                  ))}
                  {category.jobs.length > 3 && (
                    <div className="text-sm font-medium text-orange-500 mt-3">
                      และอีก {category.jobs.length - 3} งาน...
                    </div>
                  )}
                </div>

                <button className="w-full mt-6 py-3 px-4 bg-gray-50 hover:bg-orange-50 border border-gray-200 hover:border-orange-200 rounded-lg text-gray-700 hover:text-orange-600 font-medium transition-all duration-300 group-hover:bg-orange-500 group-hover:text-white group-hover:border-orange-500">
                  ดูงานทั้งหมด
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredCategories.length === 0 && (
          <div className="text-center py-16">
            <div className="text-gray-300 text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">ไม่พบหมวดหมู่งานที่ค้นหา</h3>
            <p className="text-gray-500">ลองใช้คำค้นหาอื่น หรือดูหมวดหมู่งานทั้งหมด</p>
            <button 
              onClick={() => setSearchQuery('')}
              className="mt-4 px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
            >
              ดูงานทั้งหมด
            </button>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            พร้อมที่จะเริ่มทำงานแล้วใช่มั้ย?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            เข้าร่วมกับผู้เชี่ยวชาญหลายพันคนที่หางานและรับจ้างผ่านแพลตฟอร์มของเรา
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              เริ่มหางาน
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors">
              ลงประกาศจ้างงาน
            </button>
          </div>
        </div>
      </div>

      <Foodter/>
    </div>
  );
};

export default WorkCategories;
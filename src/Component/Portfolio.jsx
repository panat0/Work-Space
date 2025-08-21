import React, { useState, useEffect } from 'react';
import Edit from '../image/edit.png'
import image from '../image/iconimage.png'
import one from '../image/ImgPerformance/1.png'
import two from '../image/ImgPerformance/2.png'
import three from '../image/ImgPerformance/3.png'
import four from '../image/ImgPerformance/4.png'
import five from '../image/ImgPerformance/5.png'
import six from '../image/ImgPerformance/6.png'
import test from '../image/test.jpg'

function Portfolio() {
    const [currentImageIndex, setCurrentImageIndex] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const portfolioItems = [
        { id: 1, image: one, },
        { id: 2, image: two, },
        { id: 3, image: three,  },
        { id: 4, image: four, },
        { id: 5, image: five,  },
        { id: 6, image: six,  },
        { id: 7, image: test, },

    ];

    const openModal = (index) => {
        setCurrentImageIndex(index);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setTimeout(() => {
            setCurrentImageIndex(null);
        }, 300);
    };

    const goToNext = () => {
        if (currentImageIndex < portfolioItems.length - 1) {
            setCurrentImageIndex(currentImageIndex + 1);
        }
    };

    const goToPrev = () => {
        if (currentImageIndex > 0) {
            setCurrentImageIndex(currentImageIndex - 1);
        }
    };

    const goToImage = (index) => {
        setCurrentImageIndex(index);
    };

    // Handle keyboard navigation
    useEffect(() => {
        const handleKeyPress = (e) => {
            if (!isModalOpen) return;
            
            switch (e.key) {
                case 'Escape':
                    closeModal();
                    break;
                case 'ArrowRight':
                    if (currentImageIndex < portfolioItems.length - 1) {
                        setCurrentImageIndex(currentImageIndex + 1);
                    }
                    break;
                case 'ArrowLeft':
                    if (currentImageIndex > 0) {
                        setCurrentImageIndex(currentImageIndex - 1);
                    }
                    break;
            }
        };

        if (isModalOpen) {
            window.addEventListener('keydown', handleKeyPress);
        }
        
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, [isModalOpen, currentImageIndex, portfolioItems.length]);

    const currentImage = currentImageIndex !== null ? portfolioItems[currentImageIndex] : null;

    return (
        <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between mb-4">
                <div className='flex items-center'>
                    <img className="w-8 h-9 text-orange-500 mr-2" src={image} alt="icon" />
                    <h2 className="text-lg font-semibold text-gray-800">ทักษะความสามารถ</h2>
                </div>
                <button>
                    <img className='rounded-lg' src={Edit} alt="edit" />
                </button>
            </div>
            <div className=' bg-orange-500 w-full h-[2.5px] rounded-lg mb-5 '></div>
            <div className="grid grid-cols-3 gap-4">
                {portfolioItems.map((item, index) => (
                    <div key={item.id} className="rounded-lg overflow-hidden bg-gray-100">
                        <img
                            src={item.image}
                            alt={item.title}
                            className="w-full max-h-44  transition-transform cursor-pointer"
                            onClick={() => openModal(index)}
                        />
                    </div>
                ))}
            </div>

            {/* Modal สำหรับแสดงรูปภาพขนาดใหญ่ */}
            {currentImage && (
                <div 
                    className={`fixed inset-0 z-50 bg-black transition-all duration-300 ${
                        isModalOpen ? 'bg-opacity-90' : 'bg-opacity-0 pointer-events-none'
                    }`}
                >
                    {/* พื้นที่ว่างสำหรับคลิกปิด */}
                    <div 
                        className="absolute inset-0 cursor-pointer"
                        onClick={closeModal}
                    />

                    {/* ปุ่มปิด */}
                    <button
                        onClick={closeModal}
                        className="absolute top-6 right-6 z-20 bg-black bg-opacity-50 hover:bg-opacity-70 text-white rounded-full p-3 transition-all duration-200"
                    >
                        <svg 
                            className="w-6 h-6" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth={2} 
                                d="M6 18L18 6M6 6l12 12" 
                            />
                        </svg>
                    </button>

                    {/* ตัวนับรูป */}
                    <div className="absolute top-6 left-6 z-20 bg-black bg-opacity-50 text-white px-4 py-2 rounded-full text-sm">
                        {currentImageIndex + 1} / {portfolioItems.length}
                    </div>

                    {/* รูปภาพหลัก */}
                    <div className="flex items-center justify-center h-full px-20 pb-32">
                        <div className={`relative transition-all duration-300 transform ${
                            isModalOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
                        }`}>
                            <img
                                src={currentImage.image}
                                alt={currentImage.title}
                                className="max-w-[80vw] max-h-[60vh] object-contain rounded-lg shadow-2xl cursor-default"
                                onClick={(e) => e.stopPropagation()}
                            />
                        </div>
                    </div>

                    {/* ลูกศรซ้าย */}
                    {currentImageIndex > 0 && (
                        <button
                            onClick={goToPrev}
                            className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 bg-black bg-opacity-50 hover:bg-opacity-70 text-white rounded-full p-4 transition-all duration-200"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                    )}

                    {/* ลูกศรขวา */}
                    {currentImageIndex < portfolioItems.length - 1 && (
                        <button
                            onClick={goToNext}
                            className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20 bg-black bg-opacity-50 hover:bg-opacity-70 text-white rounded-full p-4 transition-all duration-200"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    )}

                    {/* Thumbnail gallery ด้านล่าง */}
                    <div className="absolute bottom-0 left-0 right-0 z-20 bg-black bg-opacity-80 p-6">
                        <div className="flex justify-center space-x-4 overflow-x-auto pb-2">
                            {portfolioItems.map((item, index) => (
                                <div
                                    key={item.id}
                                    className={`flex-shrink-0 cursor-pointer transition-all duration-200 ${
                                        index === currentImageIndex 
                                            ? 'ring-4 ring-orange-500 scale-110' 
                                            : 'hover:scale-105 opacity-70 hover:opacity-100'
                                    }`}
                                    onClick={() => goToImage(index)}
                                >
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-20 h-20 object-cover rounded-lg"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            )}
        </div>
    );
};

export default Portfolio;
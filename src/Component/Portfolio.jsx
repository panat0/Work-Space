import React from 'react';
import { Lightbulb } from 'lucide-react';

function Portfolio() {
    const portfolioItems = [
        { id: 1, image: "/api/placeholder/150/150", title: "Project 1" },
        { id: 2, image: "/api/placeholder/150/150", title: "Project 2" },
        { id: 3, image: "/api/placeholder/150/150", title: "Project 3" },
        { id: 4, image: "/api/placeholder/150/150", title: "Project 4" },
        { id: 5, image: "/api/placeholder/150/150", title: "Project 5" },
        { id: 6, image: "/api/placeholder/150/150", title: "Project 6" }
    ];

    return (
        <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
                <Lightbulb className="w-5 h-5 text-orange-500 mr-2" />
                <h2 className="text-lg font-semibold text-gray-800">ผลงานของฉัน</h2>
            </div>
            <div className="grid grid-cols-3 gap-4">
                {portfolioItems.map((item) => (
                    <div key={item.id} className="aspect-square rounded-lg overflow-hidden bg-gray-100">
                        <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover hover:scale-105 transition-transform cursor-pointer"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Portfolio;
import React from 'react';
import { Star } from 'lucide-react';

function RatingCard()  {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mt-4">
      <div className="flex justify-between items-center">
        <div className="text-center">
          <div className="text-3xl font-bold text-orange-500">0</div>
          <div className="text-sm text-gray-600">คะแนนรีวิว</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-orange-500">4.8</div>
          <div className="text-sm text-gray-600 flex items-center">
            <Star className="w-4 h-4 fill-orange-400 text-orange-400 mr-1" />
            คะแนนเฉลี่ย
          </div>
        </div>
      </div>
    </div>
  );
};

export default RatingCard;
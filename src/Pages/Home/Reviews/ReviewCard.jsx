import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const ReviewCard = ({ review }) => {
  const { userName, user_email, review: testimonial, user_photoURL } = review;
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm max-w-md">
      {/* Quote Icon */}
      <FaQuoteLeft className="text-3xl text-[#4CB4AC] mb-4" />

      {/* Text */}
      <p className="text-gray-600 leading-relaxed mb-6">{testimonial}</p>

      {/* Dotted Line */}
      <div className="border-t border-dashed border-[#4CB4AC] my-4"></div>

      {/* Profile Section */}
      <div className="flex items-center gap-4">
        {/* Avatar Circle */}
        <div className=" ">
          <img src={user_photoURL} alt="" className="w-12 h-12 rounded-full" />
        </div>

        {/* Name + Role */}
        <div className="text-left">
          <h4 className="font-semibold text-[#004D46]">{userName}</h4>
          <p className="text-sm text-gray-500">{user_email}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
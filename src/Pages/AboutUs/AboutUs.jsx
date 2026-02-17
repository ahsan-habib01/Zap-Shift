import { useState } from 'react';

const tabs = ['Story', 'Mission', 'Success', 'Team & Others'];

const content = {
  Story: `
We started with a simple promise — to make parcel delivery fast, reliable, and stress-free. Over the years, our commitment to real-time tracking, efficient logistics, and customer-first service has made us a trusted partner for thousands. Whether it's a personal gift or a time-sensitive business delivery, we ensure it reaches its destination — on time, every time.

We started with a simple promise — to make parcel delivery fast, reliable, and stress-free. Over the years, our commitment to real-time tracking, efficient logistics, and customer-first service has made us a trusted partner for thousands. Whether it is a personal gift or a time-sensitive business delivery, we ensure it reaches its destination — on time, every time.

We started with a simple promise — to make parcel delivery fast, reliable, and stress-free. Over the years, our commitment to real-time tracking, efficient logistics, and customer-first service has made us a trusted partner for thousands. Whether it's a personal gift or a time-sensitive business delivery, we ensure it reaches its destination — on time, every time.
`,

  Mission: `
Our mission is to revolutionize parcel delivery through innovation, speed, and trust. We strive to provide exceptional service while continuously improving logistics, transparency, and customer support.
`,

  Success: `
Our success is built on reliable delivery, efficient logistics, and strong customer satisfaction. With thousands of successful deliveries each day, we continue to grow with a customer-first approach.
`,

  'Team & Others': `
Our dedicated team of logistics experts, delivery specialists, and customer support professionals work tirelessly to ensure seamless service. We believe in teamwork, innovation, and continuous improvement.
`,
};

const AboutUs = () => {
  const [activeTab, setActiveTab] = useState('Story');

  return (
    <div className="bg-[#F3F4F6] py-10 px-4">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl p-10 shadow-sm">
        {/* Header */}
        <h2 className="text-3xl font-semibold text-secondary">About Us</h2>
        <p className="text-gray-600 mt-2 max-w-3xl">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to business shipments — we deliver on
          time, every time.
        </p>

        {/* Divider */}
        <hr className="my-6" />

        {/* Tabs */}
        <div className="flex gap-8 mb-6">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-lg font-medium transition ${
                activeTab === tab
                  ? 'text-[#8ABF00]'
                  : 'text-gray-500 hover:text-[#003D46]'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="text-gray-600 leading-relaxed whitespace-pre-line">
          {content[activeTab]}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

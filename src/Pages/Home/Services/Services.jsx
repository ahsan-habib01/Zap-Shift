import { FaTruck } from 'react-icons/fa';

const services = [
  {
    id: 1,
    title: 'Express & Standard Delivery',
    description:
      'We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.',
    bg: 'bg-white',
    icon: <FaTruck />,
  },
  {
    id: 2,
    title: 'Nationwide Delivery',
    description:
      'We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.',
    bg: 'bg-primary', // light green special highlighted card
    icon: <FaTruck />,
  },
  {
    id: 3,
    title: 'Fulfillment Solution',
    description:
      'We also offer customized service with inventory management support, order processing, packaging, and other sales support.',
    bg: 'bg-white',
    icon: <FaTruck />,
  },
  {
    id: 4,
    title: 'Cash on Home Delivery',
    description:
      '100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.',
    bg: 'bg-white',
    icon: <FaTruck />,
  },
  {
    id: 5,
    title: 'Corporate Service / Contract In Logistics',
    description:
      'Customized corporate services which include warehouse and inventory management support.',
    bg: 'bg-white',
    icon: <FaTruck />,
  },
  {
    id: 6,
    title: 'Parcel Return',
    description:
      'With our reverse logistics facility, customers can return or exchange products with online merchants easily.',
    bg: 'bg-white',
    icon: <FaTruck />,
  },
];

const Services = () => {
  return (
    <div className="p-12 bg-secondary rounded-3xl my-10">
      <div className="container mx-auto px-4 text-center">
        {/* Title */}
        <h2 className="text-3xl font-bold text-white">Our Services</h2>
        <p className="text-gray-200 max-w-2xl mx-auto mt-2">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to business shipments — we deliver on
          time, every time!
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {services.map(service => (
            <div
              key={service.id}
              className={`${service.bg} p-6 rounded-2xl shadow hover:shadow-lg transition`}
            >
              {/* Icon */}
              <div className="flex justify-center mb-4">
                <div className="text-3xl text-secondary p-3 bg-gray-100 rounded-full">
                  {service.icon}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-[#003D46] text-center">
                {service.title}
              </h3>

              <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;

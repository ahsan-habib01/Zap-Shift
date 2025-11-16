import { BiBookmarkAltPlus } from 'react-icons/bi';
import { LuSendToBack } from 'react-icons/lu';
import { TbCashRegister, TbTruckDelivery } from 'react-icons/tb';

const steps = [
  {
    id: 1,
    title: 'Booking Pick & Drop',
    description:
      'From personal packages to business shipments — we deliver on time, every time.',
    icon: <TbTruckDelivery />,
  },
  {
    id: 2,
    title: 'Cash On Delivery',
    description:
      'From personal packages to business shipments — we deliver on time, every time.',
    icon: <TbCashRegister />,
  },
  {
    id: 3,
    title: 'Delivery Hub',
    description:
      'From personal packages to business shipments — we deliver on time, every time.',
    icon: <LuSendToBack />,
  },
  {
    id: 4,
    title: 'Booking SME & Corporate',
    description:
      'From personal packages to business shipments — we deliver on time, every time.',
    icon: <BiBookmarkAltPlus />,
  },
];

const HowItWorks = () => {
  return (
    <div className="py-12 bg-gray-100">
      <div className="container mx-auto px-15">
        <h2 className="text-2xl font-bold mb-8 text-secondary">
          How it Works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map(step => (
            <div
              key={step.id}
              className="bg-white shadow rounded-2xl p-6 flex flex-col gap-4 hover:shadow-lg transition-all"
            >
              <div className="text-4xl text-secondary">{step.icon}</div>

              <h3 className="font-semibold text-lg text-secondary">
                {step.title}
              </h3>

              <p className="text-sm text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;

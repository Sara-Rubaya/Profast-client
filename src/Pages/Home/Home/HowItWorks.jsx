
import React from 'react';
import { Truck } from 'lucide-react'; // or use your preferred icon

const services = [
  {
    title: 'Booking Pick & Drop',
    description: 'From personal packages to business shipments — we deliver on time, every time.',
  },
  {
    title: 'Cash On Delivery',
    description: 'From personal packages to business shipments — we deliver on time, every time.',
  },
  {
    title: 'Delivery Hub',
    description: 'From personal packages to business shipments — we deliver on time, every time.',
  },
  {
    title: 'Booking SME & Corporate',
    description: 'From personal packages to business shipments — we deliver on time, every time.',
  },
];

const HowItWorks = () => {
  return (
    <section data-aos="zoom-in-up" className="py-15 ">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">How it Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-sm text-gray-700 text-sm flex flex-col items-start gap-3"
            >
              <Truck className="text-primary w-12 h-12" />
              <h3 className="font-semibold text-2xl text-gray-900">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

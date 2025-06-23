import React from 'react';

const ServiceCard = ({ service }) => {
    const { icon: Icon, title, description} = service
  return (
    <div className="bg-base-100 shadow-md rounded-2xl p-5 hover:shadow-xl transition duration-300 hover:bg-lime-300">
      <div className="text-primary text-4xl mb-4">
        <Icon />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-primary">{title}</h3>
      <p className="text-sm text-gray-500">{description}</p>
    </div>
  );
};

export default ServiceCard;

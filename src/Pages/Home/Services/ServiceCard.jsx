import React from 'react';

const ServiceCard = ({ service }) => {
    const { icon: Icon, title, description} = service
  return (
    <div className=" bg-white shadow-md rounded-2xl p-5  transition duration-300  hover:bg-[#CAEB66] hover:text-black">
      <div className=" text-4xl mb-4">
        <Icon />
      </div>
      <h3 className="text-xl font-semibold mb-2  s">{title}</h3>
      <p className="text-sm text-gray-500">{description}</p>
    </div>
  );
};

export default ServiceCard;

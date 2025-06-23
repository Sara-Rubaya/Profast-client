import React from 'react';
import location from '../../../../assets/location-merchant.png'

const BeMarchent = () => {
    return (
       <div data-aos="zoom-in-up" className=" bg-[url('assets/be-a-merchant-bg.png')] bg-no-repeat p-20 bg-[#03373D]  rounded-4xl">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src={location}
      className="max-w-sm rounded-lg "
    />
    <div>
      <h1 className="text-5xl font-bold">Merchant and Customer Satisfaction is Our First Priority</h1>
      <p className="py-6">
        We offer the lowest delivery charge with the highest value along with 100% safety of your product. Pathao courier delivers your parcels in every corner of Bangladesh right on time.
      </p>
      <button className="btn rounded-full btn-outline ms-4 text-primary hover:bg-[#CAEB66] hover:text-black">Become A Merchant</button>
      <button className="btn rounded-full btn-outline ms-4 text-primary hover:bg-[#CAEB66] hover:text-black">Become A Merchant</button>
    </div>
  </div>
</div>
    );
};

export default BeMarchent;
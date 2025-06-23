import React from 'react';
import Marquee from 'react-fast-marquee';

import amazon from '../../../../assets/brands/amazon.png';
import amazonVector from '../../../../assets/brands/amazon_vector.png';
import casio from '../../../../assets/brands/casio.png';
import moonstar from '../../../../assets/brands/moonstar.png';
import randstad from '../../../../assets/brands/randstad.png';
import startPeople from '../../../../assets/brands/start-people 1.png';
import start from '../../../../assets/brands/start.png';

const logos = [amazon, amazonVector, casio, moonstar, randstad, startPeople, start];

const ClientLogos = () => {
  return (
    <section className=" m-5">
      <h2 className="text-center text-2xl md:text-3xl font-bold mb-6">We've helped thousands of sales teams</h2>
      <Marquee pauseOnHover={true} speed={50} gradient={false}>
        <div className="flex gap-40  items-center">
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Client logo ${index + 1}`}
              className="h-6 w-auto object-contain"
            />
          ))}
        </div>
      </Marquee>
    </section>
  );
};

export default ClientLogos;

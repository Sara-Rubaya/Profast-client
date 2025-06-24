// CustomerTestimonials.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './testimonialStyles.css'; // We'll create this next
import { Quote } from 'lucide-react';
import img from '../../../assets/Group 5.png'

const testimonials = [
  {
    name: 'Awlad Hossin',
    position: 'Senior Product Designer',
    text: 'A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.',
  },
  {
    name: 'Rasel Ahamed',
    position: 'CTO',
    text: 'A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.',
  },
  {
    name: 'Nasir Uddin',
    position: 'CEO',
    text: 'A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.',
  },
  {
    name: 'Sara Rubaya',
    position: 'Designer',
    text: 'Finally found something that helps reduce my back pain while working on UI all day!',
  },
];

const CustomerTestimonials = () => {
  return (
    <section  data-aos="zoom-in-up" className="py-10 my-10 ">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <img className="mx-auto mb-6 w-50 md:w-56"  src={img} alt="" />
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          What our customers are sayings
        </h2>
        <p className="text-gray-600 mb-10">
          Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce pain, and strengthen your body with ease!
        </p>

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          centeredSlides={true}
          slidesPerView={1}
          loop={true}
          pagination={{ clickable: true }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          breakpoints={{
            1024: {
              slidesPerView: 3,
              centeredSlides: true,
            },
          }}
          className="testimonial-swiper"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index} className="testimonial-slide">
              <div className="bg-white rounded-xl p-6 text-left shadow-md h-full w-[300px] lg:w-[320px] mx-auto my-6">
                <Quote className="text-cyan-400 w-6 h-6 mb-4" />
                <p className="text-gray-700 mb-4 text-sm">{item.text}</p>
                <hr className="border-dashed mb-4" />
                <div>
                  <h4 className="font-semibold text-[#00313D]">{item.name}</h4>
                  <p className="text-gray-500 text-sm">{item.position}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}

          {/* Arrows */}
          <div className="flex justify-center items-center gap-4 mt-8">
  <button className="swiper-button-prev w-10 h-10 rounded-full     transition-all duration-200 flex items-center justify-center ">
    
  </button>
  <button className="swiper-button-next w-10 h-10 rounded-full      transition-all duration-200 flex items-center justify-center ">
    
  </button>
</div>

        </Swiper>
      </div>
    </section>
  );
};

export default CustomerTestimonials;

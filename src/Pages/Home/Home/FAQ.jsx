import React from 'react';

const FAQ = () => {
    return (
         <section data-aos="zoom-in-up" className="max-w-7xl mx-auto  py-20">
      <h2 className="text-4xl font-bold text-center mb-8">Frequently Asked Questions</h2>
      <p className='text-gray-500 text-center pb-6'>Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce pain, and strengthen your body with ease!</p>

      <div className="space-y-4">
        {/* Question 1 */}
        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
          <input type="radio" name="faq-accordion" defaultChecked />
          <div className="collapse-title font-semibold">
            How does this posture corrector work?
          </div>
          <div className="collapse-content text-sm">
            A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day. Here’s how it typically functions: A posture corrector works by providing support and gentle alignment to your shoulders.
          </div>
        </div>

        {/* Question 2 */}
        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title font-semibold">
            Is it suitable for all ages and body types?
          </div>
          <div className="collapse-content text-sm">
            Yes, the posture corrector is designed with adjustable straps and flexible materials to accommodate a wide range of ages and body types. It offers a customizable fit to ensure comfort and effectiveness.
          </div>
        </div>

        {/* Question 3 */}
        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title font-semibold">
            Does it really help with back pain and posture improvement?
          </div>
          <div className="collapse-content text-sm">
            Absolutely. Regular use of a posture corrector helps train your muscles and spine to align correctly, reducing slouching, muscle tension, and long-term back pain.
          </div>
        </div>

        {/* Question 4 */}
        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title font-semibold">
            Does it have smart features like vibration alerts?
          </div>
          <div className="collapse-content text-sm">
            Some models include smart sensors that vibrate gently when poor posture is detected, helping you correct it in real time. Please check the product specifications before purchase.
          </div>
        </div>

        {/* Question 5 */}
        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title font-semibold">
            How will I be notified when the product is back in stock?
          </div>
          <div className="collapse-content text-sm">
            You can subscribe to our restock alerts via email or SMS on the product page. We'll notify you immediately once it's available again.
          </div>
        </div>
      </div>
    </section>
  );
    
};

export default FAQ;
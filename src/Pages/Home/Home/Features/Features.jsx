import React from 'react';

const features = [
  {
    title: "Live Parcel Tracking",
    description:
      "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.",
    image: "https://i.ibb.co/VW7q5JHX/Illustration.png",
  },
  {
    title: "100% Safe Delivery",
    description:
      "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
    image: "https://i.ibb.co/TBD4JNMw/Group-4-2.png",
  },
  {
    title: "24/7 Call Center Support",
    description:
      "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
    image: "https://i.ibb.co/TBD4JNMw/Group-4-2.png",
  },
];

const FeatureSection = () => {
  return (
 <section className="max-w-7xl mx-auto px-4 py-10">
  <div className="divider"></div>

  <h2 className="text-4xl font-bold text-center mb-6">Why Choose Us</h2>

  <div className="space-y-6">
    {features.map((feature, index) => (
      <div
        key={index}
        className="card lg:card-side bg-base-100 shadow-sm items-center p-5 min-h-[160px]"
      >
        {/* Image */}
        <figure className="p-2">
          <img
            src={feature.image}
            alt={feature.title}
            className="w-40 h-40 object-cover rounded-lg"
          />
        </figure>

        {/* Vertical Divider */}
        <div className="hidden lg:flex justify-center px-5">
          <div className="w-px  bg-gray-300 h-full"></div>
        </div>

        {/* Text */}
        <div className="card-body">
          <h2 className="card-title text-xl">{feature.title}</h2>
          <p className="text-sm text-gray-600">{feature.description}</p>
        </div>
      </div>
    ))}
  </div>

  <div className="divider"></div>
</section>


  );
};

export default FeatureSection;

import React from 'react';
import Image from 'next/image';

function Features() {
  const features = [
    {
      count: '2,245,341',
      description: 'Satisfied Customers',
      imgSrc: '/feature1.png',
      imgAlt: 'Satisfied Customers',
    },
    {
      count: '46,328',
      description: 'Successful Group Tours',
      imgSrc: '/feature2.png',
      imgAlt: 'Successful Group Tours',
    },
    {
      count: '828,867',
      description: 'Positive Reviews',
      imgSrc: '/feature3.png',
      imgAlt: 'Positive Reviews',
    },
    {
      count: '1,926,436',
      description: 'Years of Excellence',
      imgSrc: '/feature4.png',
      imgAlt: 'Years of Excellence',
    },
  ];

  return (
    <section className="p-10 bg-[#faf3dd80] text-left">
      <div className="flex flex-col md:flex-row gap-10  xl:gap-40 items-center">
        {/* Left Section with Heading and Description */}
        <div className="flex-1 max-w-md text-gray-700">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 uppercase tracking-wide">
            Why Choose Sahara Group Services?
          </h2>
          <p className="text-base leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. At
            ullamcorper consequat pretium est urna nec eget. Ut at turpis arcu.
          </p>
        </div>

        {/* Right Section with Features Grid */}
        <div className="flex-2  grid gap-10 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-12 rounded-lg shadow-md text-center hover:shadow-lg hover:-translate-y-1 transform transition"
            >
              <Image
                src={feature.imgSrc}
                alt={feature.imgAlt}
                width={100}
                height={100}
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-2xl font-bold text-[#f0a500] mb-2">
                {feature.count}
              </h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;

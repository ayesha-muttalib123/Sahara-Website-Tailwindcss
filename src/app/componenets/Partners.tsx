import React from 'react';
import Image from 'next/image';

function Partners() {
  return (
    <section className="bg-gray-100 py-20 text-center">
      <h2 className="text-4xl font-bold text-gray-800 mb-10 uppercase tracking-wider">
        Our Partners
      </h2>
      <div className="flex flex-wrap justify-center gap-12">
        <div className="w-[140px] h-[140px] bg-white rounded-lg flex justify-center items-center shadow-md transition-transform duration-300 hover:scale-110 hover:shadow-lg">
          <Image src="/image1.png" alt="Partner 1" width={120} height={120} />
        </div>
        <div className="w-[140px] h-[140px] bg-white rounded-lg flex justify-center items-center shadow-md transition-transform duration-300 hover:scale-110 hover:shadow-lg">
          <Image src="/image2.png" alt="Partner 2" width={120} height={120} />
        </div>
        <div className="w-[140px] h-[140px] bg-white rounded-lg flex justify-center items-center shadow-md transition-transform duration-300 hover:scale-110 hover:shadow-lg">
          <Image src="/image3.png" alt="Partner 3" width={120} height={120} />
        </div>
        <div className="w-[140px] h-[140px] bg-white rounded-lg flex justify-center items-center shadow-md transition-transform duration-300 hover:scale-110 hover:shadow-lg">
          <Image src="/image4.png" alt="Partner 4" width={120} height={120} />
        </div>
        <div className="w-[140px] h-[140px] bg-white rounded-lg flex justify-center items-center shadow-md transition-transform duration-300 hover:scale-110 hover:shadow-lg">
          <Image src="/image5.png" alt="Partner 5" width={120} height={120} />
        </div>
      </div>
    </section>
  );
}

export default Partners;

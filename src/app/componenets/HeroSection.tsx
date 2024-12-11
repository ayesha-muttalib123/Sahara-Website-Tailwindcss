import React from 'react';
import Navbar from './Navbar';

const HeroSection = () => {
  return (
    <>
      <Navbar />
      <section
  className="bg-[url('/Desktop.png')] bg-no-repeat bg-cover bg-center w-full h-[1000px] flex flex-col items-center justify-center text-center py-16 px-5 md:py-24 md:px-8"
>       <h1 className="text-4xl md:text-5xl text-white font-extrabold  mb-6">
          Welcome to Sahara Group Services
        </h1>
        <p className="text-lg md:text-xl text-white leading-relaxed mb-8">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores ratione deserunt qui
          <br className="hidden md:block" />
          repudiandae quasi alias earum iure nulla ut, enim modi quae sapiente. Deserunt, modi eligendi dicta
          molestias veniam impedit?
        </p>
        <div className="flex flex-wrap gap-4 justify-center ">
          <button className="bg-orange-500 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all">
            Enroll Now
          </button>
          <button className="bg-orange-500 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all">
            Read More
          </button>
        </div>
      </section>
    </>
  );
};

export default HeroSection;

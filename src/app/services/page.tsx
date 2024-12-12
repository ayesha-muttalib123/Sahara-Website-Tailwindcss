import React from "react";
import Image from "next/image";
import Footer from "../componenets/Footer";
import Navbar from "../componenets/Navbar";

const Services = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <section className="text-center py-20 bg-gray-100 flex-1">
        <h2 className="text-4xl font-bold text-gray-800">What're Sahara Group Visa?</h2>
        <p className="text-lg text-gray-600 mb-10">
          We offer a range of services to meet your needs.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-5">
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Image
              src="/pic-1.png"
              alt="Camel Riding"
              className="rounded-lg object-cover w-full h-56"
              width={300}
              height={200}
            />
            <h3 className="text-2xl font-semibold text-gray-800 mt-4">Camel Rides</h3>
            <p className="text-gray-600 mt-2">
              Experience the beauty of the Sahara Desert on a guided camel ride.
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Image
              src="/pic-2.png"
              alt="Desert Camping"
              className="rounded-lg object-cover w-full h-56"
              width={300}
              height={200}
            />
            <h3 className="text-2xl font-semibold text-gray-800 mt-4">Desert Camping</h3>
            <p className="text-gray-600 mt-2">
              Enjoy a unique overnight experience under the stars in our desert camps.
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Image
              src="/pic-3.png"
              alt="Cultural Experiences"
              className="rounded-lg object-cover w-full h-56"
              width={300}
              height={200}
            />
            <h3 className="text-2xl font-semibold text-gray-800 mt-4">Cultural Experiences</h3>
            <p className="text-gray-600 mt-2">
              Immerse yourself in local traditions and learn about the Saharan lifestyle.
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Image
              src="/pic-4.png"
              alt="Group Service"
              className="rounded-lg object-cover w-full h-56"
              width={300}
              height={200}
            />
            <h3 className="text-2xl font-semibold text-gray-800 mt-4">Group Service</h3>
            <p className="text-gray-600 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </section>
      {/* Footer, always sticks to the bottom */}
      <footer className="bg-gray-100">
        <Footer />
      </footer>
    </div>
  );
};

export default Services;

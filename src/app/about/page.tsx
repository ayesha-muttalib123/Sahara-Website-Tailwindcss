import React from 'react';
import Image from 'next/image';
import Footer from '../componenets/Footer';
import Navbar from '../componenets/Navbar';



function AboutUs() {
  return (
    <>
      <Navbar />

      <div className="space-y-16">
        {/* Hero Section */}
        <section className="relative h-screen bg-cover bg-center text-center text-white p-6 bg-opacity-90" style={{ backgroundImage: 'url("/background.png")' }}>
          <div className="flex flex-col justify-center items-center h-full">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">About Sahara Group</h1>
            <p className="text-lg sm:text-xl mb-6">
              Transforming businesses with innovative solutions and unparalleled expertise.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="px-6 sm:px-12">
          <h2 className="text-3xl font-semibold text-center mb-4">Our Mission</h2>
          <p className="text-lg text-center text-gray-700">
            At Sahara Group, our mission is to empower businesses with cutting-edge technology and creative solutions,
            enabling them to excel in a rapidly evolving digital world.
          </p>
        </section>

        {/* Team Section */}
        <section className="px-6 sm:px-12">
          <h2 className="text-3xl font-semibold text-center mb-4">Meet Our Team</h2>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="text-center group">
              <Image src="/images1.jpg" alt="Jane Doe" width={200} height={200} className="rounded-full mb-4 transition-transform duration-300 ease-in-out group-hover:scale-105" />
              <h3 className="text-xl font-semibold">Jane Doe</h3>
              <p className="text-lg text-gray-600">CEO & Founder</p>
            </div>
            <div className="text-center group">
              <Image src="/images2.jpg" alt="John Smith" width={200} height={200} className="rounded-full mb-4 transition-transform duration-300 ease-in-out group-hover:scale-105" />
              <h3 className="text-xl font-semibold">John Smith</h3>
              <p className="text-lg text-gray-600">Chief Technology Officer</p>
            </div>
            <div className="text-center group">
              <Image src="/images3.jpg" alt="Sarah Lee" width={200} height={200} className="rounded-full mb-4 transition-transform duration-300 ease-in-out group-hover:scale-105" />
              <h3 className="text-xl font-semibold">Sarah Lee</h3>
              <p className="text-lg text-gray-600">Lead Designer</p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="px-6 sm:px-12">
          <h2 className="text-3xl font-semibold text-center mb-4">Our Values</h2>
          <p className="text-lg text-center text-gray-700">
            We are committed to integrity, creativity, and delivering exceptional value to our clients through teamwork and innovation.
          </p>
        </section>
      </div>

      <Footer />
    </>
  );
}

export default AboutUs;


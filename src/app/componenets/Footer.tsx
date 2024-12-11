import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center p-5 py-8">
      <p className="mb-4">© 2024 Sahara Group. All rights reserved.</p>
      <div className="flex justify-center gap-6 mb-6">
        <a href="#" className="hover:text-red-500">
          Terms & Conditions
        </a>
        <a href="#" className="hover:text-red-500">
          Privacy Policy
        </a>
      </div>
      <div className="flex justify-center gap-6 mb-6">
        <Image
          src="/appgalery.jpeg"
          alt="App Gallery"
          width={70}
          height={70}
          className="rounded-lg"
        />
        <Image
          src="/appstore.png"
          alt="App Store"
          width={50}
          height={50}
          className="rounded-lg"
        />
        <Image
          src="/yt.png"
          alt="YouTube"
          width={50}
          height={50}
          className="rounded-lg"
        />
      </div>
      <div className="border-t border-gray-700 pt-6">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:gap-8 text-gray-400 text-sm">
          <p>Call Us: +1 786 9790 877</p>
          <p>Get in touch with us</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

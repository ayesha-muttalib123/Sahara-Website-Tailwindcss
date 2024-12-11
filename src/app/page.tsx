import '../app/globals.css'
import Features from './componenets/Features';
import Footer from './componenets/Footer';

import HeroSection from "./componenets/HeroSection";
import Partners from './componenets/Partners';
import Services from './services/page';

export default function Home() {
  return (
    <div className="flex flex-col ">
      <HeroSection />
      <Partners />
      <Services/>
      <Features />
      <Footer />
    </div>
  );
}

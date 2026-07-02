import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Listings from "./components/Listings";
import Showcase from "./components/Showcase";
import BentoGallery from "./components/BentoGallery";
import Amenities from "./components/Amenities";
import LocationSection from "./components/LocationSection";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Listings />
        <Showcase />
        <BentoGallery />
        <Amenities />
        <LocationSection />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

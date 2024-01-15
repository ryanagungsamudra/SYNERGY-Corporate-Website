import Footer from "@/components/Footer";
import LandingCarousel from "@/components/LandingCarousel";
import Navbar from "@/components/Navbar";
import SectionAbout from "@/components/SectionAbout";
import SectionNews from "@/components/SectionNews";
import SectionTestimonial from "@/components/SectionTestimonial";

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <LandingCarousel />
        <SectionAbout />
        <SectionTestimonial />
        <SectionNews />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

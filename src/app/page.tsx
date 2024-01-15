import Footer from "@/components/Footer";
import LandingCarousel from "@/components/LandingCarousel";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <LandingCarousel />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

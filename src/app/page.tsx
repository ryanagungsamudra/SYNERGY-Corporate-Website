import LandingCarousel from "@/components/LandingCarousel";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <LandingCarousel />
      </main>
    </div>
  );
}

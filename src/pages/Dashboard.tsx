import Navbar from "../components/Navbar";
import DashboardHero from "../components/DashboardHero";
import Footer from "../components/Footer"

export default function Dashboard() {
  return (
    <div className="w-full hero-pixel-clouds relative">
      <Navbar />
      <DashboardHero />
      <Footer />
    </div>
  );
}

import Menu from "./components/Menu";
import FeaturesSection from "./components/FeaturesSection";
import ServicesSection from "./components/ServicesSection";
import PortfolioSection from "./components/PortfolioSection";
import TestimonialsSection from "./components/TestimonialsSection";
import TeamSection from "./components/TeamSection";
import Banner from "./components/Banner";

export default function App() {
  return (
    <>
      <Menu />
      <Banner />
      <FeaturesSection />
      <ServicesSection />
      <PortfolioSection />
      <TestimonialsSection />
      <TeamSection />
    </>
  );
}

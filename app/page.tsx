import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Fields from "@/components/Fields";
import GamesAvailable from "@/components/GamesAvailable";
import BentoShowcase from "@/components/BentoShowcase";
import WhyChooseUs from "@/components/WhyChooseUs";
import Pricing from "@/components/Pricing";
import Programs from "@/components/Programs";
import Coaches from "@/components/Coaches";
import Amenities from "@/components/Amenities";
import Testimonials from "@/components/Testimonials";
import MembershipCTA from "@/components/MembershipCTA";
import Location from "@/components/Location";
import Footer from "@/components/Footer";

export default function Home() {
  const arenaName = "BATTLE GRID";
  const heroHeadline = "STEP ONTO THE GRID";
  const accent = "#E11B22";

  return (
    <>
      <Navbar arenaName={arenaName} accent={accent} />
      <Hero heroHeadline={heroHeadline} accent={accent} />
      <Fields accent={accent} />
      <GamesAvailable accent={accent} />
      <BentoShowcase accent={accent} />
      <WhyChooseUs accent={accent} />
      <Pricing accent={accent} />
      <Programs accent={accent} />
      <Coaches accent={accent} />
      <Amenities accent={accent} />
      <Testimonials accent={accent} />
      <MembershipCTA accent={accent} />
      <Location accent={accent} />
      <Footer accent={accent} />
    </>
  );
}


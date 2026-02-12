import { Hero } from "@/components/Hero";
import { Menu } from "@/components/Menu";
import { Packages } from "@/components/Packages";
import { Legal } from "@/components/Legal";
import { SocialResponsibility } from "@/components/SocialResponsibility";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";
import { PartnershipInfo } from "@/components/PartnershipInfo";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <PartnershipInfo />
      <Legal />
      <SocialResponsibility />
      <Testimonials />
      <Packages />

      <Menu />
      <Footer />
    </main>
  );
}

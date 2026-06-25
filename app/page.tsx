import AboutSection from '@/components/AboutSection';
import FeaturedPlayers from '@/components/FeaturedPlayers';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import LatestNews from '@/components/LatestNews';
import Navbar from '@/components/Navbar';
import Sponsors from '@/components/Sponsors';
import TeamStats from '@/components/TeamStats';
import UpcomingMatch from '@/components/UpcomingMatch';

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-falcon-midnight text-white">
      <Navbar />
      <Hero />
      <AboutSection />
      <FeaturedPlayers />
      <UpcomingMatch />
      <TeamStats />
      <LatestNews />
      <Sponsors />
      <Footer />
    </main>
  );
}

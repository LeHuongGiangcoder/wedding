import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Story from "../components/Story";
import Schedule from "../components/Schedule";
import Destination from "../components/Destination";
import DressCode from "../components/DressCode";
import RSVP from "../components/RSVP";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <Story />
      <Schedule />
      <Destination />
      <DressCode />
      <RSVP />
      <Footer />
    </main>
  );
}

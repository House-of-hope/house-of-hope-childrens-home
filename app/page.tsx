import Hero from "./components/Hero";
import Programs from "./components/Programs";
import Projects from "./components/Projects";
import DonationSection from "./components/DonationSection";

export const metadata = {
  title: "House of Hope — Home",
  description:
    "Join House of Hope in empowering children in Likoni through education, mentorship and community care. Learn how to volunteer, donate, or sponsor a child.",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Programs />
      <Projects />
      <DonationSection />
    </main>
  );
}

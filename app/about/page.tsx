import About from "../components/About";

export const metadata = {
  title: "About House of Hope — Our Mission, Vision & Impact",
  description: "Learn about House of Hope CBO, our mission to empower orphans and vulnerable children in Likoni, and 18+ years of community impact through education, mentorship, and care.",
  openGraph: {
    title: "About House of Hope — Our Mission & Vision",
    description: "18+ years of providing education, mentorship, and care to vulnerable children in Likoni, Mombasa.",
    url: "/about",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <main>
      <About />
    </main>
  );
}

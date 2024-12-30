// import BusinessSolution from "@/components/Business-solution";
import CallToAction from "@/components/Call-to-action";
import ExceptionalWork from "@/components/Exceptional-work";
import Hero from "@/components/Hero";
import Header from "@/components/Navbar";
import RecentProjects from "@/components/Recent-Projects";
import Services from "@/components/Services";

export default function Home() {
  return (
    <main className="bg-[#FFF5F5]">
      <Header />
      <Hero />
      <Services />
      <ExceptionalWork />
      {/* <BusinessSolution /> */}
      <RecentProjects />
      <CallToAction />
    </main>
  );
}

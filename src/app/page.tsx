// import BusinessSolution from "@/components/Business-solution";
// import CallToAction from "@/components/Call-to-action";
// import ExceptionalWork from "@/components/Exceptional-work";
// import Hero from "@/components/Hero";
import Loader from "@/components/Loader";
import Header from "@/components/Navbar";
// import RecentProjects from "@/components/Recent-Projects";
// import Services from "@/components/Services";
import React, { lazy, Suspense } from "react";
const Hero = lazy(() => import("@/components/Hero"));
const Services = lazy(() => import("@/components/Services"));
const ExceptionalWork = lazy(() => import("@/components/Exceptional-work"));
const RecentProjects = lazy(() => import("@/components/Recent-Projects"));
const CallToAction = lazy(() => import("@/components/Call-to-action"));
export default function Home() {
  return (
    <main className="bg-[#FFF5F5]">
      <Suspense fallback={<Loader />}>
        <Header />
        <Hero />
        <Services />
        <ExceptionalWork />
        {/* <BusinessSolution /> */}
        <RecentProjects />
        <CallToAction />
      </Suspense>
    </main>
  );
}

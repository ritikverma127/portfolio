import Image from "next/image";
import React from "react";

function HeroSection() {
  return (
    <div className="container mx-auto mt-28 flex flex-col  md:flex-row items-center">
      <div className="md:ml-20 mb-6 md:mb-0">
        <Image src="/hero.png" width={600} height={600} alt="Hero Section" />
      </div>
      <div className="w-full text-center md:text-left">
        <h1 className="text-2xl font-bold mb-24 text-white">
          Hello! I Am <span className="text-text-name">Ritik Verma</span>
        </h1>
        <h3 className="text-white font-mono sm:mt-10 text-2xl">A Designer Who</h3>
        <h1 className="text-white font-mono sm:text-6xl">
          Judges a bookssss
          <br />
          by its{" "} 
          <span className="relative inline-block">
            <Image src="/circle.png" height={200} width={200} alt="Circle" />
            <span className="absolute inset-0 flex items-center justify-center text-white font-mono">
              cover
            </span>
          </span>
          ...
        </h1>
        <h5 className="text-white font-mono text-sm mt-2">
          Because if the cover does not impress you, what else can?
        </h5>
      </div>
    </div>
  );
}

export default HeroSection;

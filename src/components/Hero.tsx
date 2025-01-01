'use client';

import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Award, Star } from "lucide-react";
import { FlipWords } from "@/components/ui/flip-words";
import IconCloud from "@/components/ui/icon-cloud";

export default function Hero() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
``
  const slugs = [
    "typescript", "javascript", "dart", "java", "react", "flutter", "android",
    "html5", "css3", "nodedotjs", "express", "nextdotjs", "prisma", "amazonaws",
    "postgresql", "firebase", "nginx", "vercel", "testinglibrary", "jest",
    "cypress", "docker", "git", "jira", "github", "gitlab", "visualstudiocode",
    "androidstudio", "sonarqube", "figma"
  ];
   
  const words = [
    "Passionate developer skilled in React, Next.js, and Tailwind CSS. I craft visually stunning, user-friendly applications that deliver seamless experiences.",
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#FFF5F5] via-[#FFF5F5] to-[#E9D5FF] px-4 sm:px-6 lg:px-8" id="home">
      {/* Decorative dots with adjusted positioning - only shown after client-side mount */}
      {isMounted && (
        <>
          <div className="absolute top-20 right-[15%] w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
          <div className="absolute top-40 right-[25%] w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse" />
          <div className="absolute top-32 left-[20%] w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
        </>
      )}

      <div className="max-w-7xl mx-auto min-h-[calc(100vh-4rem)] flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 py-16 lg:py-20">
        {/* Left Content Section */}
        <div className="flex-1 space-y-6 lg:space-y-8 text-center lg:text-left">
          <h1 className="text-[#1E2B4F] text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Hi! I Am
            <br />
            Ritik Verma
          </h1>
          
          <div className="space-y-6 lg:space-y-8">
            {isMounted && (
              <h2 className="text-gray-600 max-w-xl text-lg sm:text-xl lg:text-2xl">
                <FlipWords words={words} />
              </h2>
            )}

            <Button className="bg-[#F15A2B] hover:bg-[#d94d22] text-white px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg transition-all duration-300 hover:scale-105">
              Hire Me
            </Button>
          </div>
        </div>

        {/* Right Content Section */}
        <div className="flex-1 relative w-full min-h-[400px] lg:min-h-[500px]">
          {isMounted && (
            <>
              {/* Award Badge */}
              <div className="absolute top-0 right-8 bg-white rounded-lg p-2.5 shadow-md flex items-center gap-2 hover:scale-105 transition-transform">
                <div className="bg-yellow-400 rounded-full p-2">
                  <Award className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-sm">Best Design</p>
                  <p className="text-gray-600 text-xs">Awards</p>
                </div>
              </div>

              {/* UI/UX Badge */}
              <div className="absolute bottom-4 left-8 bg-white rounded-lg p-2.5 shadow-md flex items-center gap-2 hover:scale-105 transition-transform">
                <div className="bg-green-400 rounded-full p-2">
                  <Star className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-sm">UI/UX</p>
                  <p className="text-gray-600 text-xs">Expert Design</p>
                </div>
              </div>

              {/* Icon Cloud */}
              <div className="absolute inset-0 flex items-center justify-center mt-12 lg:mt-0">
                <div className="w-full max-w-lg overflow-hidden  rounded-lg px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
                  <IconCloud iconSlugs={slugs} />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Award, Star } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#FFF5F5] via-[#FFF5F5] to-[#E9D5FF] px-4 py-20 mt-24">
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-4 h-4 rounded-full bg-red-500" />
      <div className="absolute top-40 right-40 w-4 h-4 rounded-full bg-blue-500" />
      <div className="absolute top-60 left-40 w-4 h-4 rounded-full bg-green-500" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-[#1E2B4F] text-5xl lg:text-6xl font-bold leading-tight">
            Hy! I Am
            <br />
           Ritik Verma
          </h1>

          <p className="text-gray-600 max-w-lg">
            Product designer and digital creative director working in design
            field for 7 years so far, specialize user interface design.
          </p>

          <Button className="bg-[#F15A2B] hover:bg-[#d94d22] text-white px-8 py-6 text-lg">
            Hire Me
          </Button>
        </div>

        <div className="relative">
          {/* Award Badge */}
          <div className="absolute top-64 right-4 bg-white rounded-xl p-3 shadow-lg flex items-center gap-2">
            <div className="bg-yellow-400 rounded-full p-2">
              <Award className="w-4 h-4 text-white" />
            </div>
            <div className="text-sm">
              <p className="font-semibold">Best Design</p>
              <p className="text-gray-600">Awards</p>
            </div>
          </div>

          {/* UI/UX Badge */}
          <div className="absolute bottom-32 left-0 bg-white rounded-xl p-3 shadow-lg flex items-center gap-2">
            <div className="bg-green-400 rounded-full p-2">
              <Star className="w-4 h-4 text-white" />
            </div>
            <div className="text-sm">
              <p className="font-semibold">UI/UX</p>
              <p className="text-gray-600">Lorem ipsum dummy</p>
            </div>
          </div>

          {/* Shopify Badge */}
          <div className="absolute left-[9rem] bottom-20  top-[-8.75rem]  h-42rem w-42rem ">
            <Image
              src="/Skills.png"
              alt="Shopify"
              width={500}
              height={500}
              
            />
          </div>
        </div>
      </div>

      {/* Brands Section */}
      <div className="max-w-7xl mx-auto mt-36">
        <h3 className="text-[#1E2B4F] font-semibold mb-8">
          Work For All This Brand & Client
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {[{
            id:1,
            img: `/Signimus.jpeg`,

          },
          {
            id:2,
            img: `/letsgrowmore.png`,
          },
          {
            id:3,
            img: `/Bharatintern.png`,
          },
          {
            id:4,
            img: `/letsgrowmore.png`,
          },
          
        ].map((item,i) => (
            <div key={i} className="bg-white rounded-lg p-4 shadow-sm">
              <Image
                src={item.img}
                alt={`Brand`}
                width={80}
                height={40}
                className="w-full h-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

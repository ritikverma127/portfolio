import { Code, Palette, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Services() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="space-y-4 bg-white rounded-xl p-6 shadow-sm">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
              <Code className="w-6 h-6 text-[#F15A2B]" />
            </div>
            <h3 className="text-xl font-semibold text-[#1E2B4F]">Developer</h3>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt.
            </p>
          </div>

          <div className="space-y-4 bg-white rounded-xl p-6 shadow-sm">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
              <Smartphone className="w-6 h-6 text-[#F15A2B]" />
            </div>
            <h3 className="text-xl font-semibold text-[#1E2B4F]">UI/UX</h3>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt.
            </p>
          </div>

          <div className="space-y-4 bg-white rounded-xl p-6 shadow-sm">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
              <Palette className="w-6 h-6 text-[#F15A2B]" />
            </div>
            <h3 className="text-xl font-semibold text-[#1E2B4F]">Design</h3>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-[#1E2B4F]">
            My Awesome
            <span className="text-[#F15A2B]"> Services</span>
          </h2>
          <p className="text-gray-600 max-w-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className="text-gray-600 max-w-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco.
          </p>
          <Button className="bg-[#F15A2B] hover:bg-[#d94d22] text-white px-8">
            Hire CV
          </Button>
        </div>
      </div>
    </section>
  );
}

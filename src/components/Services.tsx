import { Code, Database, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Services() {
  return (
    <section className="py-24 px-4" id="services">
      <div className="max-w-7xl mx-auto flex flex-col-reverse  lg:grid  lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="space-y-4 bg-white rounded-xl p-6 shadow-sm">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
              <Smartphone className="w-6 h-6 text-[#F15A2B]" />
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold text-[#386dff]">
              Frontend
            </h3>
            <p className="text-gray-600 font-bold">
              The frontend is the visual and interactive part of a website or
              application that users directly interact with.
            </p>
          </div>

          <div className="space-y-4 bg-white rounded-xl p-6 shadow-sm">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
              <Code className="w-6 h-6 text-[#F15A2B]" />
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold text-[#386dff]">
              Backend
            </h3>
            <p className="text-gray-600 font-bold">
              The backend is the server-side part of a website or application
              that handles data processing and database interactions.
            </p>
          </div>

          <div className="space-y-4 bg-white rounded-xl p-6 shadow-sm">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
              {/* <Palette className="w-6 h-6 text-[#F15A2B]" /> */}
              <Database className="w-6 h-6 text-[#F15A2B]" />
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold text-[#386dff]">
              Database
            </h3>
            <p className="text-gray-600 font-bold">
              A database is a collection of structured information that is
              organized to enable efficient storage and retrieval of data.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-[#1E2B4F]">
            My Awesome
            <span className="text-[#F15A2B]"> Services</span>
          </h2>
          <p className="text-gray-600 max-w-lg">
            As a skilled full-stack developer, I specialize in creating dynamic,
            responsive, and user-friendly applications. From stunning frontend
            designs to robust backend solutions and optimized databases.
          </p>
          <p className="text-gray-600 max-w-lg">
            My expertise guarantees tailored solutions that meet your needs,
            delivering excellence and innovation for your business success! 🚀
          </p>
          <Button className="bg-[#F15A2B] hover:bg-[#d94d22] text-white px-8">
            Hire CV
          </Button>
        </div>
      </div>
    </section>
  );
}

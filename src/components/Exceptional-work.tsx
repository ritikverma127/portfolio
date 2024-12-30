import Image from "next/image";
import { Shield } from "lucide-react";

export default function ExceptionalWork() {
  return (
    <section className="py-24 px-4 relative" id="clients">
      <div className="absolute top-20 right-20 w-4 h-4 rounded-full bg-red-500" />
      <div className="absolute bottom-20 left-20 w-4 h-4 rounded-full bg-blue-500" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <h2 className="text-4xl font-bold text-[#1E2B4F]">
            Clients Get Always
            <br />
            Exceptional Works
            <br />
            From Me
          </h2>
          <p className="text-gray-600 max-w-sm">
            Lorem ipsum is simply dummy text of the printing and typesetting
            industry. Lorem ipsum has been the industry.
          </p>

          <ul className="space-y-4">
            <li className="flex items-center gap-3">
              <span className="text-[#F15A2B] font-bold">1.</span>
              <span className="text-[#1E2B4F] font-semibold">
                Top Quality Works
              </span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-[#F15A2B] font-bold">2.</span>
              <span className="text-[#1E2B4F] font-semibold">Commitments</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-[#F15A2B] font-bold">3.</span>
              <span className="text-[#1E2B4F] font-semibold">
                24 Hours active
              </span>
            </li>
          </ul>
        </div>

        <div className="relative">
          <div className="absolute -top-4 left-4 bg-white rounded-xl p-3 shadow-lg flex items-center gap-2">
            <div className="bg-green-400 rounded-full p-2">
              <Shield className="w-4 h-4 text-white" />
            </div>
            <div className="text-sm">
              <p className="font-semibold">24 Hours active</p>
              <p className="text-gray-600">real your problem</p>
            </div>
          </div>

          <Image
            src="/exceptional.png"
            alt="Professional in orange sweater"
            width={600}
            height={600}
            className="rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}

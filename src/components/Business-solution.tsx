import { Button } from "@/components/ui/button";

export default function BusinessSolution() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="text-4xl font-bold text-[#1E2B4F]">566.12k</h3>
                <p className="text-gray-600">Number of subscribers</p>
              </div>
              <div className="w-12 h-12 bg-gray-100 rounded-full" />
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="h-32 bg-purple-100 rounded-xl" />
              <div className="h-32 bg-blue-100 rounded-xl" />
              <div className="h-32 bg-orange-100 rounded-xl" />
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-red-500 rounded-full" />
                <span className="text-sm text-gray-600">Projects</span>
              </div>
              <div>
                <h4 className="font-bold text-[#1E2B4F]">256.12k</h4>
                <p className="text-sm text-gray-600">In last 6 years</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-[#1E2B4F]">
            Perfect Solution
            <br />
            <span className="text-[#F15A2B]">For Your Business</span>
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
            Details
          </Button>
        </div>
      </div>
    </section>
  );
}

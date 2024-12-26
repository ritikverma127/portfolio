import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

export default function CallToAction() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <h2 className="text-4xl font-bold text-[#1E2B4F]">
            Ready To Get
            <br />
            Started?
          </h2>
        </div>

        <div className="flex items-center gap-4">
          <p className="text-gray-600">
            You Know About Me, Lets Talk
            <br />
            About You.
          </p>
          <Button className="bg-[#F15A2B] hover:bg-[#d94d22] text-white rounded-full h-16 w-16 p-0">
            <MessageCircle className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="bg-[#FFF5F5] px-4 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="text-xl font-semibold">
          Mrstudio
        </Link>

        <nav className="flex items-center gap-8">
          <Link
            href="/"
            className="text-sm hover:text-gray-600 transition-colors"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-sm hover:text-gray-600 transition-colors"
          >
            About Us
          </Link>
          <Link
            href="/services"
            className="text-sm hover:text-gray-600 transition-colors"
          >
            Services
          </Link>
          <Button
            asChild
            className="bg-[#F15A2B] hover:bg-[#d94d22] text-white rounded-md"
          >
            <Link href="/contact">Contact Us</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}

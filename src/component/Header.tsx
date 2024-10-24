import { Search, Heart, MessageCircle, PlusSquare, Home, Menu } from "lucide-react";
import { Link } from "./Link";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
      <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-semibold">
          Instagram
        </Link>

        <div className="hidden md:flex items-center flex-1 max-w-xs mx-8">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search"
              className="w-full bg-gray-100 rounded-lg py-1.5 px-4 pl-10 focus:outline-none focus:ring-1 focus:ring-gray-300"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          </div>
        </div>

        <nav className="flex items-center gap-5">
          <Link href="/" className="hover:scale-110 transition-transform">
            <Home className="w-6 h-6" />
          </Link>
          <Link href="/messages" className="hover:scale-110 transition-transform">
            <MessageCircle className="w-6 h-6" />
          </Link>
          <Link href="/new" className="hover:scale-110 transition-transform">
            <PlusSquare className="w-6 h-6" />
          </Link>
          <Link href="/activity" className="hover:scale-110 transition-transform">
            <Heart className="w-6 h-6" />
          </Link>
          <button className="hover:scale-110 transition-transform">
            <img
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&crop=faces"
              alt="Profile"
              className="w-7 h-7 rounded-full object-cover"
            />
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;

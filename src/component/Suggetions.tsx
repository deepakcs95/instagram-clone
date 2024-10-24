import { SUGGESTIONS } from "../data/Data";
import { Link } from "./Link";

export function Suggestions() {
  return (
    <div className="hidden lg:block w-80">
      <div className="fixed w-80 p-4">
        <div className="flex items-center justify-between mb-4">
          <span className="text-gray-500 font-semibold">Suggestions For You</span>
          <Link href="/explore" className="text-xs font-semibold">
            See All
          </Link>
        </div>

        <div className="space-y-3">
          {SUGGESTIONS.map((suggestion) => (
            <div key={suggestion.username} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src={suggestion.avatar}
                  alt={suggestion.username}
                  className="w-8 h-8 rounded-full object-cover"
                />
                <div className="flex flex-col">
                  <Link
                    href={`/${suggestion.username}`}
                    className="text-sm font-semibold hover:underline"
                  >
                    {suggestion.username}
                  </Link>
                  <span className="text-xs text-gray-500">{suggestion.subtitle}</span>
                </div>
              </div>
              <button className="text-xs font-semibold text-blue-500 hover:text-blue-700">
                Follow
              </button>
            </div>
          ))}
        </div>

        <footer className="mt-6 text-xs text-gray-400">
          <nav className="flex flex-wrap gap-x-2 gap-y-1 mb-4">
            <Link href="/about">About</Link> •<Link href="/help">Help</Link> •
            <Link href="/press">Press</Link> •<Link href="/api">API</Link> •
            <Link href="/jobs">Jobs</Link> •<Link href="/privacy">Privacy</Link> •
            <Link href="/terms">Terms</Link>
          </nav>
          <p>© 2024 Photogram</p>
        </footer>
      </div>
    </div>
  );
}

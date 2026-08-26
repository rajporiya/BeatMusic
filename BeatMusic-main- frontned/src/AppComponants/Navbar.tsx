import { Link, useNavigate } from "react-router-dom";
import { House, Search, ArrowDownToLine, Bell, Users } from "lucide-react";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="h-16 bg-black flex items-center justify-between px-6 select-none shrink-0 z-50">
      {/* Left Area - Logo only (no text) */}
      <div className="flex items-center">
        <Link to="/" className="text-white hover:text-[#1db954] transition-colors flex items-center">
          {/* Official Spotify Wave SVG Icon */}
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-9 h-9 text-white hover:scale-105 transition-transform duration-200"
          >
            <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.586 14.424c-.18.295-.565.387-.86.207-2.377-1.454-5.37-1.783-8.892-.982-.336.076-.67-.135-.746-.472-.076-.336.135-.67.472-.746 3.854-.878 7.15-.502 9.82 1.134.295.18.387.565.207.86zm1.226-2.723c-.226.367-.707.487-1.074.26-2.72-1.672-6.87-2.157-10.082-1.182-.413.125-.847-.107-.972-.52-.125-.413.107-.847.52-.972 3.676-1.116 8.243-.573 11.348 1.336.367.227.488.708.26 1.078zm.106-2.836C14.492 8.78 8.793 8.59 5.483 9.595c-.507.153-1.04-.135-1.194-.64-.154-.507.135-1.04.64-1.195 3.8-1.153 10.103-.928 14.07 1.43.456.27.608.86.338 1.317-.27.457-.86.61-1.317.338z" />
          </svg>
        </Link>
      </div>

      {/* Middle Area - Search & Home */}
      <div className="flex items-center gap-2.5 max-w-[500px] w-full px-4">
        {/* Home Button */}
        <button
          type="button"
          onClick={() => navigate("/")}
          className="h-11 w-11 rounded-full bg-[#121212] hover:bg-[#1f1f1f] text-white hover:scale-105 active:scale-95 flex items-center justify-center transition-all duration-200 cursor-pointer shrink-0"
        >
          <House className="h-5 w-5 fill-white text-white" />
        </button>

        {/* Search Input Box */}
        <div className="relative flex items-center flex-1">
          <Search className="absolute left-4 text-gray-400 h-5 w-5 pointer-events-none" />
          <input
            type="text"
            placeholder="What do you want to play?"
            className="w-full bg-[#121212] hover:bg-[#1f1f1f] focus:bg-[#1f1f1f] text-white placeholder-gray-400 rounded-full py-3 pl-12 pr-12 text-sm border border-transparent focus:border-[#333] outline-none transition-all duration-200 font-semibold"
          />
          <button
            type="button"
            title="Browse"
            className="absolute right-4 text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer flex items-center justify-center"
          >
            {/* Box-like browse icon matching Spotify search */}
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-5 w-5"
            >
              <rect x="3" y="3" width="18" height="13" rx="1.5" />
              <line x1="3" y1="20" x2="21" y2="20" />
            </svg>
          </button>
        </div>
      </div>

      {/* Right Area - Links & Icons */}
      <div className="flex items-center gap-4 select-none">
        {user ? (
          <>
            {/* Explore Premium Pill */}
            <button
              type="button"
              className="bg-white hover:bg-gray-100 text-black text-xs font-extrabold rounded-full py-2 px-4 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer shadow-md shrink-0"
            >
              Explore Premium
            </button>

            {/* Install App Link */}
            <div className="flex items-center gap-1.5 text-gray-300 hover:text-white text-xs font-extrabold cursor-pointer hover:scale-105 transition-transform duration-200 shrink-0">
              <ArrowDownToLine className="h-4 w-4 border border-gray-300 rounded-full p-0.5" />
              <span className="hidden md:inline">Install App</span>
            </div>

            {/* Notification Bell */}
            <button
              type="button"
              className="text-gray-400 hover:text-white p-1 transition-colors cursor-pointer shrink-0"
              title="What's new"
            >
              <Bell size={20} />
            </button>

            {/* Friends Activity */}
            <button
              type="button"
              className="text-gray-400 hover:text-white p-1 transition-colors cursor-pointer shrink-0"
              title="Friend Activity"
            >
              <Users size={20} />
            </button>

            {/* Profile Avatar with letter & logout */}
            <div className="flex items-center gap-3">
              <div
                className="h-8 w-8 rounded-full bg-[#1db954] text-black flex items-center justify-center text-xs font-extrabold border border-black shadow-inner shrink-0"
                title={`Profile: ${user.username}`}
              >
                {user.username.charAt(0).toUpperCase()}
              </div>
              <button
                type="button"
                onClick={logout}
                className="bg-[#282828] hover:bg-[#3e3e3e] text-white hover:text-red-400 text-[11px] font-extrabold py-1.5 px-3 rounded-full border border-white/5 transition-colors cursor-pointer shadow-md"
                title="Log out"
              >
                Log Out
              </button>
            </div>
          </>
        ) : (
          <div className="flex items-center gap-4">
            <Link
              to="/register"
              className="text-gray-400 hover:text-white text-xs font-extrabold transition-all duration-200 hover:scale-105 shrink-0"
            >
              Sign up
            </Link>
            <Link
              to="/login"
              className="bg-white hover:bg-gray-100 text-black text-xs font-extrabold rounded-full py-2 px-4 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer shadow-md shrink-0"
            >
              Log in
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

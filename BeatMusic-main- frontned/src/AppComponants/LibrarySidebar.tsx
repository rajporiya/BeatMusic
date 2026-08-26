import React from "react";
import { Plus, Library, Globe } from "lucide-react";

interface LibrarySidebarProps {
  onCollapse?: () => void;
}

const LibrarySidebar: React.FC<LibrarySidebarProps> = ({ onCollapse }) => {
  const footerLinks = [
    "Legal",
    "Safety & Privacy Center",
    "Privacy Policy",
    "Cookies",
    "About Ads",
    "Accessibility",
    "Cookies",
  ];

  return (
    <div className="flex flex-col h-full bg-[#121212] rounded-lg select-none">
      {/* Sidebar Header */}
      <div className="flex items-center justify-between px-4 py-3 shrink-0">
        <button
          type="button"
          onClick={onCollapse}
          className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer font-extrabold text-base"
        >
          <Library className="h-6 w-6" />
          <span>Your Library</span>
        </button>

        <button
          type="button"
          title="Create playlist or folder"
          className="h-8 w-8 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#1f1f1f] transition-all duration-200 cursor-pointer"
        >
          <Plus className="h-5 w-5" />
        </button>
      </div>

      {/* Sidebar Content Cards */}
      <div className="flex-1 overflow-y-auto px-2 space-y-4 py-2 scrollbar-thin scrollbar-thumb-gray-800">
        {/* Card 1: Playlists */}
        <div className="bg-[#1f1f1f] rounded-lg p-4 flex flex-col gap-3 shadow-md">
          <h4 className="font-bold text-white text-sm">Create your first playlist</h4>
          <p className="text-gray-300 text-xs font-medium">It's easy, we'll help you</p>
          <button
            type="button"
            className="bg-white text-black text-xs font-extrabold py-2 px-4 rounded-full w-fit hover:scale-105 active:scale-95 transition-transform duration-200 cursor-pointer shadow-md"
          >
            Create playlist
          </button>
        </div>

        {/* Card 2: Podcasts */}
        <div className="bg-[#1f1f1f] rounded-lg p-4 flex flex-col gap-3 shadow-md">
          <h4 className="font-bold text-white text-sm">Let's find some podcasts to follow</h4>
          <p className="text-gray-300 text-xs font-medium">We'll keep you updated on new episodes</p>
          <button
            type="button"
            className="bg-white text-black text-xs font-extrabold py-2 px-4 rounded-full w-fit hover:scale-105 active:scale-95 transition-transform duration-200 cursor-pointer shadow-md"
          >
            Browse podcasts
          </button>
        </div>
      </div>

      {/* Sidebar Footer links & Language Button */}
      <div className="p-4 shrink-0 flex flex-col gap-5 bg-[#121212]">
        {/* Links Grid */}
        <div className="flex flex-wrap gap-x-3 gap-y-2 text-[11px] text-gray-400 font-bold">
          {footerLinks.map((link, idx) => (
            <span
              key={idx}
              className="hover:underline cursor-pointer transition-all"
            >
              {link}
            </span>
          ))}
        </div>

        {/* Language Button */}
        <button
          type="button"
          className="flex items-center gap-1.5 border border-gray-600 rounded-full py-1.5 px-3.5 w-fit text-xs font-extrabold text-white hover:border-white hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
        >
          <Globe className="h-4 w-4" />
          <span>English</span>
        </button>
      </div>
    </div>
  );
};

export default LibrarySidebar;

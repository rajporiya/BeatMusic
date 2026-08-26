  import { useState } from "react";
import Navbar from "./Navbar";
import HeroMiddleSection from "./HeroMiddleSection";
import HeroPlaySong from "./HeroPlaySong";
import Footer from "./Footer";
import LibrarySidebar from "./LibrarySidebar";
import NowPlayingSidebar from "./NowPlayingSidebar";
import PlaybackControls from "./PlaybackControls";
import { ArrowRightToLine, ArrowLeftToLine, Plus, Maximize2 } from "lucide-react";

const HeroSectionSIdeNavbar = () => {
  const [leftOpen, setLeftOpen] = useState(true);
  const [rightOpen, setRightOpen] = useState(false);

  return (
    <div className="h-screen flex flex-col bg-black text-white overflow-hidden font-sans">
      {/* Top Header */}
      <Navbar />

      {/* Main Content Area */}
      <div className="flex-1 flex gap-3 p-2 overflow-hidden">
        {/* Left Sidebar */}
        {leftOpen ? (
          <div className="w-[267px] bg-[#121212] rounded-[10px] p-2 flex flex-col h-full overflow-hidden select-none border border-white/5">
            <div className="flex justify-between items-center mb-2 px-1">
              <button
                type="button"
                onClick={() => setLeftOpen(false)}
                className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                title="Collapse sidebar"
              >
                <ArrowRightToLine className="p-0.5" />
              </button>

              <div className="flex gap-3">
                <button
                  type="button"
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                  title="Create playlist or folder"
                >
                  <Plus className="bg-gray-400 text-black rounded-full p-0.5" />
                </button>
                <button
                  type="button"
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                  title="Maximize"
                >
                  <Maximize2 className="hover:bg-gray-700 rounded-full p-1" />
                </button>
              </div>
            </div>
            {/* Library Content */}
            <div className="flex-1 overflow-y-auto">
              <LibrarySidebar onCollapse={() => setLeftOpen(false)} />
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-2 items-center w-18 bg-[#121212] rounded-[10px] p-2 shrink-0 select-none border border-white/5">
            <button
              type="button"
              onClick={() => setLeftOpen(true)}
              className="text-gray-400 hover:text-white transition-colors cursor-pointer"
              title="Expand sidebar"
            >
              <ArrowLeftToLine className="p-0.5" />
            </button>
            <button
              type="button"
              className="text-gray-400 hover:text-white transition-colors cursor-pointer"
              title="Create playlist or folder"
            >
              <Plus className="bg-gray-400 text-black rounded-full p-0.5" />
            </button>
          </div>
        )}

        {/* Main Scrollable Content */}
        <div className="flex-1 bg-[#121212] rounded-[10px] overflow-y-auto p-6 scrollbar-thin scrollbar-thumb-gray-800 flex flex-col gap-6 border border-white/5">
          <HeroMiddleSection />
          <div className="flex flex-col gap-6">
            <HeroPlaySong />
            <Footer />
          </div>
        </div>

        {/* Right Sidebar */}
        {rightOpen ? (
          <div className="w-[267px] bg-[#121212] rounded-[10px] p-2 flex flex-col h-full overflow-hidden select-none border border-white/5">
            <div className="flex justify-between items-center mb-2 px-1">
              <button
                type="button"
                onClick={() => setRightOpen(false)}
                className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                title="Collapse sidebar"
              >
                <ArrowRightToLine className="p-0.5" />
              </button>

              <div className="flex gap-3">
                <button
                  type="button"
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                  title="Create playlist or folder"
                >
                  <Plus className="bg-gray-400 text-black rounded-full p-0.5" />
                </button>
                <button
                  type="button"
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                  title="Maximize"
                >
                  <Maximize2 className="hover:bg-gray-700 rounded-full p-1" />
                </button>
              </div>
            </div>
            {/* Now Playing Content */}
            <div className="flex-1 overflow-y-auto">
              <NowPlayingSidebar onClose={() => setRightOpen(false)} width={251} />
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-2 items-center w-18 bg-[#121212] rounded-[10px] p-2 shrink-0 select-none border border-white/5">
            <button
              type="button"
              onClick={() => setRightOpen(true)}
              className="text-gray-400 hover:text-white transition-colors cursor-pointer"
              title="Expand sidebar"
            >
              <ArrowLeftToLine className="p-0.5" />
            </button>
            <button
              type="button"
              className="text-gray-400 hover:text-white transition-colors cursor-pointer"
              title="Create playlist or folder"
            >
              <Plus className="bg-gray-400 text-black rounded-full p-0.5" />
            </button>
          </div>
        )}
      </div>

      {/* Bottom Playback Controls Bar */}
      <PlaybackControls />
    </div>
  );
};

export default HeroSectionSIdeNavbar;
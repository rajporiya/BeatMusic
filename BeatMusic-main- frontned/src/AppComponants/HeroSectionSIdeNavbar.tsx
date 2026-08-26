import { useState, useEffect, useRef } from "react";
import Navbar from "./Navbar";
import HeroMiddleSection from "./HeroMiddleSection";
import NowPlayingSidebar from "./NowPlayingSidebar";
import LibrarySidebar from "./LibrarySidebar";
import PlaybackControls from "./PlaybackControls";
import { Plus } from "lucide-react";

const HeroSectionSIdeNavbar = () => {
  const [showRightSidebar, setShowRightSidebar] = useState(true);
  const [leftWidth, setLeftWidth] = useState(72);
  const [rightWidth, setRightWidth] = useState(272);

  // Resize refs
  const isResizingLeft = useRef(false);
  const isResizingRight = useRef(false);
  const leftStart = useRef({ x: 0, w: 72 });
  const rightStart = useRef({ x: 0, w: 272 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isResizingLeft.current) {
        const deltaX = e.clientX - leftStart.current.x;
        const newWidth = Math.max(72, Math.min(272, leftStart.current.w + deltaX));
        setLeftWidth(newWidth);
      }
      if (isResizingRight.current) {
        const deltaX = e.clientX - rightStart.current.x;
        const newWidth = Math.max(72, Math.min(272, rightStart.current.w - deltaX));
        setRightWidth(newWidth);
      }
    };

    const handleMouseUp = () => {
      isResizingLeft.current = false;
      isResizingRight.current = false;
      document.body.classList.remove("cursor-col-resize");
      document.body.classList.remove("select-none");
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  const handleLeftMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    leftStart.current = { x: e.clientX, w: leftWidth };
    isResizingLeft.current = true;
    document.body.classList.add("cursor-col-resize");
    document.body.classList.add("select-none");
  };

  const handleRightMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    rightStart.current = { x: e.clientX, w: rightWidth };
    isResizingRight.current = true;
    document.body.classList.add("cursor-col-resize");
    document.body.classList.add("select-none");
  };

  return (
    <div className="h-screen flex flex-col bg-black text-white overflow-hidden font-sans">
      {/* Top Header */}
      <Navbar />

      {/* Main Content Area */}
      <div className="flex-1 flex gap-1 px-2 pb-2 overflow-hidden select-none">
        {/* Left Library Sidebar Panel */}
        <div
          style={{ width: `${leftWidth}px` }}
          className="shrink-0 h-full bg-[#121212] rounded-lg flex flex-col overflow-hidden border border-white/5 select-none"
        >
          {leftWidth > 120 ? (
            <LibrarySidebar onCollapse={() => setLeftWidth(72)} />
          ) : (
            <div className="flex flex-col items-center py-4 gap-4 w-full h-full">
              {/* Custom Spotify Library Icon */}
              <button
                type="button"
                className="text-gray-400 hover:text-white p-2 transition-colors cursor-pointer hover:scale-105 active:scale-95"
                title="Expand Your Library"
                onClick={() => setLeftWidth(200)}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <line x1="6" y1="4" x2="6" y2="20" />
                  <line x1="12" y1="4" x2="12" y2="20" />
                  <line x1="18" y1="5" x2="15" y2="19" />
                </svg>
              </button>

              {/* Plus Button */}
              <button
                type="button"
                className="text-gray-400 hover:text-white p-2 transition-colors cursor-pointer hover:scale-105 active:scale-95"
                title="Create playlist or folder"
              >
                <Plus size={24} />
              </button>
            </div>
          )}
        </div>

        {/* Left Resize Handle */}
        <div
          onMouseDown={handleLeftMouseDown}
          className="w-1.5 hover:w-2 active:w-2 transition-all cursor-col-resize h-full hover:bg-zinc-800/80 active:bg-zinc-700/80 bg-transparent shrink-0 self-stretch rounded-full mx-0.5 flex items-center justify-center group"
        >
          <div className="h-8 w-[2px] bg-zinc-600 opacity-0 group-hover:opacity-100 rounded-full" />
        </div>

        {/* Right Main Scrollable content Panel */}
        <div className="flex-1 bg-[#121212] rounded-lg overflow-y-auto p-6 scrollbar-thin scrollbar-thumb-gray-800 flex flex-col gap-6">
          <HeroMiddleSection />
        </div>

        {/* Right Resize Handle (only visible if sidebar is open) */}
        {showRightSidebar && (
          <div
            onMouseDown={handleRightMouseDown}
            className="w-1.5 hover:w-2 active:w-2 transition-all cursor-col-resize h-full hover:bg-zinc-800/80 active:bg-zinc-700/80 bg-transparent shrink-0 self-stretch rounded-full mx-0.5 flex items-center justify-center group"
          >
            <div className="h-8 w-[2px] bg-zinc-600 opacity-0 group-hover:opacity-100 rounded-full" />
          </div>
        )}

        {/* Right Now Playing Sidebar Panel */}
        {showRightSidebar && (
          <NowPlayingSidebar
            width={rightWidth}
            onClose={() => setShowRightSidebar(false)}
          />
        )}
      </div>

      {/* Bottom Playback Controls Bar */}
      <PlaybackControls />
    </div>
  );
};

export default HeroSectionSIdeNavbar;
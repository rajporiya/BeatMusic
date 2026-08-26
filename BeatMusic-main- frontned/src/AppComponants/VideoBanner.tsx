import { Play } from "lucide-react";

const VideoBanner = () => {
  return (
    <div className="flex flex-col gap-4">
      {/* Title with pagination arrows */}
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-extrabold text-white hover:underline cursor-pointer select-none">
          Getting started
        </h3>
        <div className="flex items-center gap-2 select-none">
          <button
            type="button"
            className="w-8 h-8 rounded-full bg-black/40 hover:bg-black/80 flex items-center justify-center text-gray-400 hover:text-white transition-colors cursor-pointer"
          >
            &lt;
          </button>
          <button
            type="button"
            className="w-8 h-8 rounded-full bg-black/40 hover:bg-black/80 flex items-center justify-center text-gray-400 hover:text-white transition-colors cursor-pointer"
          >
            &gt;
          </button>
        </div>
      </div>

      {/* Banner Box */}
      <div className="bg-[#0b4d53] rounded-lg p-6 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden select-none">
        {/* Left Side Content */}
        <div className="flex-1 flex flex-col items-start gap-4">
          <h4 className="text-3xl font-extrabold text-white tracking-tight">
            3. Watch a video
          </h4>
          <p className="text-white/80 text-sm font-semibold max-w-md">
            Play videos from your favorite artists and creators.
          </p>
          <div className="flex items-center gap-6 mt-2">
            <button
              type="button"
              className="bg-[#1db954] hover:bg-[#1ed760] text-black text-sm font-extrabold py-2.5 px-6 rounded-full hover:scale-105 active:scale-95 transition-transform duration-200 shadow-md cursor-pointer"
            >
              Browse videos
            </button>
            <span className="text-white text-sm font-extrabold hover:underline cursor-pointer">
              Show more tips
            </span>
          </div>
        </div>

        {/* Right Side Video Thumbnail */}
        <div className="w-64 h-36 relative rounded-md overflow-hidden shadow-2xl flex-shrink-0 group cursor-pointer border border-white/10">
          <img
            src="/video_thumbnail.jpg"
            alt="Video Preview"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          {/* Overlay play button */}
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <Play className="h-5 w-5 text-black fill-black translate-x-[1px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoBanner;

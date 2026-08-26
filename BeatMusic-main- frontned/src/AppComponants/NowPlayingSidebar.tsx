import { MoreHorizontal, X, Share2, PlusCircle } from "lucide-react";
import { usePlayback } from "../context/PlaybackContext";

interface NowPlayingSidebarProps {
  onClose?: () => void;
  width?: number;
}

const NowPlayingSidebar: React.FC<NowPlayingSidebarProps> = ({ onClose, width = 272 }) => {
  const isCollapsed = width < 120;
  const { currentSong } = usePlayback();

  // Active details fallback to defaults if no song is loaded
  const title = currentSong?.title || "Shararat (From \"Dhurandhar\")";
  const artist = currentSong?.artist || "Shashwat Sachdev, Madhubanti Bagchi, Jasmine Sandlas";
  const image = currentSong?.image || "/album_cover.jpg";

  return (
    <div
      style={{ width: `${width}px` }}
      className="bg-[#121212] rounded-lg flex flex-col h-full overflow-hidden select-none shrink-0 border border-white/5"
    >
      {/* Header */}
      <div className={`flex items-center ${isCollapsed ? "justify-center p-2" : "justify-between p-4"} border-b border-white/5`}>
        {!isCollapsed && (
          <span className="font-extrabold text-sm text-white hover:underline cursor-pointer truncate mr-2">
            {currentSong ? "Now Playing" : "Dhurandhar - All Songs 🔥"}
          </span>
        )}
        <div className="flex items-center gap-2">
          {!isCollapsed && (
            <button
              type="button"
              className="text-gray-400 hover:text-white transition-colors cursor-pointer"
              title="More options"
            >
              <MoreHorizontal size={18} />
            </button>
          )}
          <button
            type="button"
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors cursor-pointer"
            title="Close sidebar"
          >
            <X size={18} />
          </button>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className={`flex-1 overflow-y-auto ${isCollapsed ? "p-2 space-y-3" : "p-4 space-y-5"} scrollbar-thin scrollbar-thumb-gray-800`}>
        {/* Large Album Cover */}
        <div className="w-full aspect-square rounded-md overflow-hidden shadow-2xl border border-white/5">
          <img
            src={image}
            alt={`${title} Album Art`}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Title & Artist & Action Icons */}
        {!isCollapsed ? (
          <div className="flex items-start justify-between">
            <div className="space-y-1 overflow-hidden min-w-0">
              <h2 className="text-xl font-extrabold text-white tracking-tight hover:underline cursor-pointer leading-tight truncate">
                {title}
              </h2>
              <p className="text-[13px] text-gray-400 font-semibold hover:underline hover:text-white cursor-pointer leading-relaxed truncate">
                {artist}
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0 pt-1">
              <button
                type="button"
                className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                title="Share"
              >
                <Share2 size={18} />
              </button>
              <button
                type="button"
                className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                title="Add to playlist"
              >
                <PlusCircle size={18} />
              </button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-3 py-1">
            <button
              type="button"
              className="text-gray-400 hover:text-white transition-colors cursor-pointer hover:scale-105 active:scale-95"
              title="Share"
            >
              <Share2 size={18} />
            </button>
            <button
              type="button"
              className="text-gray-400 hover:text-white transition-colors cursor-pointer hover:scale-105 active:scale-95"
              title="Add to playlist"
            >
              <PlusCircle size={18} />
            </button>
          </div>
        )}

        {/* About the Artist Card */}
        {!isCollapsed && (
          <div className="bg-[#1f1f1f] rounded-lg overflow-hidden border border-white/5 shadow-md flex flex-col relative group cursor-pointer">
            {/* Card Header text */}
            <div className="p-4 bg-gradient-to-b from-[#5c1c1f]/60 to-[#1f1f1f] border-b border-white/5">
              <span className="text-sm font-extrabold text-white">About the artist</span>
            </div>

            {/* Artist full-bleed image with overlay */}
            <div className="h-56 relative overflow-hidden bg-[#2d2d2d]">
              <img
                src={currentSong ? image : "/artist_photo.jpg"}
                alt={currentSong ? artist : "Shashwat Sachdev"}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Soft dark vignette on the bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1f1f1f] via-transparent to-transparent" />

              {/* Artist Details Overlay */}
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-base font-extrabold text-white block hover:underline drop-shadow-md">
                  {currentSong ? currentSong.artist.split(',')[0] : "Shashwat Sachdev"}
                </span>
                <span className="text-xs text-gray-300 font-bold block mt-0.5 drop-shadow-md">
                  Artist, Producer, Composer
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NowPlayingSidebar;

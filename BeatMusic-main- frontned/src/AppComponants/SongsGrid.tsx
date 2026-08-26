import { Play, Pause } from "lucide-react";
import type { Song } from "../type/movie-name";
import { usePlayback } from "../context/PlaybackContext";

type SongsGridProps = {
  songsList: Song[];
};

const SongsGrid: React.FC<SongsGridProps> = ({ songsList }) => {
  const { currentSong, isPlaying, playSong } = usePlayback();

  const handlePlay = (song: Song, e: React.MouseEvent) => {
    e.stopPropagation(); // Avoid triggering parent click handlers
    playSong(song, songsList);
  };

  return (
    <div className="grid grid-cols-2 min-[480px]:grid-cols-3 min-[700px]:grid-cols-4 min-[950px]:grid-cols-5 min-[1200px]:grid-cols-6 min-[1400px]:grid-cols-8 gap-4 select-none">
      {songsList.map((song) => {
        const isCurrentPlaying = currentSong?.id === song.id && isPlaying;

        return (
          <div
            key={song.id}
            className="bg-[#181818] hover:bg-[#282828] p-3.5 rounded-lg flex flex-col gap-3.5 group relative transition-all duration-300 cursor-pointer shadow-md"
            onClick={(e) => handlePlay(song, e)}
          >
            {/* Card Image Wrapper */}
            <div className="relative aspect-square w-full rounded-md overflow-hidden shadow-lg">
              <img
                src={song.image}
                alt={song.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Floating green play/pause button (Spotify standard) */}
              <button
                type="button"
                onClick={(e) => handlePlay(song, e)}
                className={`absolute bottom-2 right-2 h-11 w-11 bg-[#1db954] hover:bg-[#1ed760] text-black rounded-full flex items-center justify-center shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer ${
                  isCurrentPlaying
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0"
                }`}
              >
                {isCurrentPlaying ? (
                  <Pause className="h-5 w-5 fill-black text-black" />
                ) : (
                  <Play className="h-5 w-5 fill-black text-black translate-x-[1px]" />
                )}
              </button>
            </div>

            {/* Song Title & Artist info */}
            <div className="flex flex-col gap-1.5 min-h-[52px]">
              <h4 className="font-extrabold text-sm text-white truncate w-full" title={song.title}>
                {song.title}
              </h4>
              <div className="text-gray-400 text-xs font-semibold line-clamp-2 leading-relaxed">
                {song.isExplicit && (
                  <span
                    className="inline-flex items-center justify-center bg-[#8f8f8f] text-black text-[9px] font-extrabold rounded-[2px] h-3.5 w-3.5 mr-1.5 shrink-0 align-middle select-none"
                    title="Explicit content"
                  >
                    E
                  </span>
                )}
                <span className="align-middle">{song.artist}</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SongsGrid;

import { useState } from "react";
import { Play, Pause } from "lucide-react";
import type { Artist } from "../type/movie-name";

type ArtistsGridProps = {
  artistsList: Artist[];
};

const ArtistsGrid: React.FC<ArtistsGridProps> = ({ artistsList }) => {
  const [playingArtistId, setPlayingArtistId] = useState<number | null>(null);

  const togglePlay = (id: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setPlayingArtistId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="grid grid-cols-2 min-[480px]:grid-cols-3 min-[700px]:grid-cols-4 min-[950px]:grid-cols-5 min-[1200px]:grid-cols-6 min-[1400px]:grid-cols-8 gap-4 select-none">
      {artistsList.map((artist) => {
        const isPlaying = playingArtistId === artist.id;

        return (
          <div
            key={artist.id}
            className="bg-[#181818] hover:bg-[#282828] p-3.5 rounded-lg flex flex-col gap-3.5 group relative transition-all duration-300 cursor-pointer shadow-md"
            onClick={(e) => togglePlay(artist.id, e)}
          >
            {/* Circular Artist Image Wrapper */}
            <div className="relative aspect-square w-full rounded-full overflow-hidden shadow-lg">
              <img
                src={artist.image}
                alt={artist.name}
                className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-500"
              />

              {/* Floating play/pause on hover */}
              <button
                type="button"
                onClick={(e) => togglePlay(artist.id, e)}
                className={`absolute bottom-2 right-2 h-10 w-10 bg-[#1db954] hover:bg-[#1ed760] text-black rounded-full flex items-center justify-center shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer ${
                  isPlaying
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0"
                }`}
              >
                {isPlaying ? (
                  <Pause className="h-5 w-5 fill-black text-black" />
                ) : (
                  <Play className="h-5 w-5 fill-black text-black translate-x-[1px]" />
                )}
              </button>
            </div>

            {/* Artist Metadata */}
            <div className="flex flex-col gap-0.5">
              <h4 className="font-extrabold text-sm text-white truncate w-full" title={artist.name}>
                {artist.name}
              </h4>
              <p className="text-gray-400 text-xs font-semibold">
                {artist.role}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ArtistsGrid;

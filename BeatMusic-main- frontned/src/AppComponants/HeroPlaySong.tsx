import { Pause, Play, PlusCircle, Plus, Heart } from "lucide-react";
import { useState } from "react";
import { songs } from "../type/dummayData";
import { usePlayback } from "../context/PlaybackContext";

const HeroPlaySong = () => {
  const { currentSong, isPlaying, playSong, playlists, addSongToPlaylist, createPlaylist, toggleLikeSong } = usePlayback();
  const [activeDropdownId, setActiveDropdownId] = useState<number | null>(null);

  const likedSongs = playlists.find((p) => p.id === "liked-songs")?.songs || [];

  return (
    <div className="grid grid-cols-12 gap-1 px-1">
      {songs.map((song) => {
        const isCurrentPlaying = isPlaying && currentSong?.id === song.id;
        const isLiked = likedSongs.some((s) => s.id === song.id);

        return (
          <div key={song.id ?? song.title} className="col-span-3 p-3">
            <div className="group flex items-center justify-between pr-3 bg-[#392F27] rounded-[10px] hover:bg-[#4a3b31] transition-colors duration-300 relative">
              
              <div className="flex items-center gap-3 min-w-0 flex-1">
                <img
                  className="h-16 w-16 rounded-md object-cover flex-shrink-0"
                  src={song.image}
                  alt={song.title}
                />

                <div className="flex flex-col min-w-0 pr-2">
                  <h2 className="font-semibold text-white truncate text-sm">{song.title}</h2>
                  <span className="text-[11px] text-gray-400 truncate">{song.artist}</span>
                </div>
              </div>

              <div className="flex items-center gap-1.5 flex-shrink-0 relative">
                {/* Heart / Like Icon Trigger */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleLikeSong(song);
                  }}
                  className={`transition-colors cursor-pointer p-1 rounded-full hover:bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity ${
                    isLiked ? "opacity-100 text-green-500 fill-green-500" : "text-gray-400 hover:text-white"
                  }`}
                  title={isLiked ? "Remove from Liked Songs" : "Save to Liked Songs"}
                >
                  <Heart size={18} />
                </button>

                {/* Playlist Dropdown */}
                <div className="relative">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveDropdownId(activeDropdownId === song.id ? null : song.id);
                    }}
                    className={`text-gray-400 hover:text-white transition-colors cursor-pointer p-1 rounded-full hover:bg-white/10 opacity-0 group-hover:opacity-100 ${
                      activeDropdownId === song.id ? "opacity-100 text-green-500" : ""
                    }`}
                    title="Add to playlist"
                  >
                    <PlusCircle size={20} />
                  </button>
                  
                  {activeDropdownId === song.id && (
                    <div className="absolute right-0 top-8 bg-[#282828] border border-white/10 rounded-md py-1.5 w-48 shadow-2xl z-50 text-left">
                      <div className="px-3 py-1 text-[10px] text-gray-400 font-bold uppercase tracking-wider">
                        Add to Playlist
                      </div>
                      <div className="max-h-36 overflow-y-auto">
                        {playlists.map((pl) => (
                          <button
                            key={pl.id}
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              addSongToPlaylist(pl.id, song);
                              setActiveDropdownId(null);
                            }}
                            className="w-full text-left px-3 py-1.5 text-xs text-white hover:bg-[#3e3e3e] font-semibold truncate transition-colors cursor-pointer block"
                          >
                            {pl.name}
                          </button>
                        ))}
                      </div>
                      <div className="border-t border-white/5 my-1" />
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          const newId = createPlaylist();
                          if (newId) {
                            addSongToPlaylist(newId, song);
                          }
                          setActiveDropdownId(null);
                        }}
                        className="w-full text-left px-3 py-1.5 text-xs text-green-400 hover:bg-[#3e3e3e] font-extrabold flex items-center gap-1.5 transition-colors cursor-pointer"
                      >
                        <Plus size={14} />
                        <span>Create & Add</span>
                      </button>
                    </div>
                  )}
                </div>

                {/* Play/Pause Button */}
                <button
                  type="button"
                  onClick={() => playSong(song, songs)}
                  className="hover:cursor-pointer opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 bg-green-500 h-10 w-10 rounded-full flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 flex-shrink-0"
                >
                  {isCurrentPlaying ? (
                    <Pause
                      className="text-black fill-black"
                      size={18}
                    />
                  ) : (
                    <Play
                      className="text-black fill-black translate-x-[1px]"
                      size={18}
                    />
                  )}
                </button>
              </div>

            </div>
          </div>
        );
      })}
    </div>
  );
};

export default HeroPlaySong;
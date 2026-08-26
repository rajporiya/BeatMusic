import { Pause, Play } from "lucide-react";
import { useState } from "react";
import { songs } from "../type/dummayData";

const HeroPlaySong = () => {
  const [playingSong, setPlayingSong] = useState<number | null>(null);

  function handlePlay(songId: number) {
    setPlayingSong((prev) => (prev === songId ? null : songId));
  }

  return (
    <div className="grid grid-cols-12">
      {songs.map((song) => {
        const isPlaying = playingSong === song.id;

        return (
          <div key={song.id ?? song.title} className="col-span-3 p-3">
            <div className="group flex items-center justify-between pr-3 bg-[#392F27] rounded-[10px] hover:bg-[#4a3b31] transition-colors duration-300">
              
              <div className="flex items-center gap-3">
                <img
                  className="h-16 w-16 rounded-md object-cover"
                  src={song.image}
                  alt={song.title}
                />

                <h2 className="font-semibold">{song.title}</h2>
              </div>
              <button
                type="button"
                onClick={() => handlePlay(song.id!)}
                className="hover:cursor-pointer opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 bg-green-500 h-12 w-12 rounded-full flex items-center justify-center shadow-lg"
              >
                {isPlaying ? (
                  <Pause
                    className="text-black fill-black"
                    size={22}
                  />
                ) : (
                  <Play
                    className="text-black fill-black"
                    size={22}
                  />
                )}
              </button>

            </div>
          </div>
        );
      })}
    </div>
  );
};

export default HeroPlaySong;
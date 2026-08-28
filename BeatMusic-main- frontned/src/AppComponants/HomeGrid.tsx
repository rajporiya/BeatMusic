import { Play, Pause } from "lucide-react";
import { useState, useEffect } from "react";
import { usePlayback } from "@/context/PlaybackContext";
import { useAuth } from "@/context/AuthContext";
import type { Song } from "@/type/movie-name";

interface GridItem {
  id: number;
  title: string;
  image: string;
}

const HomeGrid = () => {
  const { currentSong, isPlaying, playSong } = usePlayback();
  const { token } = useAuth();
  const [songs, setSongs] = useState<Song[]>([]);

  useEffect(() => {
    if (!token) return;

    fetch("http://localhost:5000/api/songs", {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    })
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setSongs(data);
        }
      })
      .catch((err) => console.error("Error in HomeGrid:", err));
  }, [token]);

  const items: GridItem[] = [
    {
      id: 1,
      title: "Dhurandhar - All Songs 🔥",
      image: "/album_cover.jpg",
    },
    {
      id: 2,
      title: "Trending Now India",
      image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=150&h=150&fit=crop",
    },
    {
      id: 3,
      title: "Sitaare (From \"Ikkis\")",
      image: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=150&h=150&fit=crop",
    },
    {
      id: 4,
      title: "Bollywood Dance Music",
      image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=150&h=150&fit=crop",
    },
    {
      id: 5,
      title: "Hot Hits Hindi",
      image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=150&h=150&fit=crop",
    },
    {
      id: 6,
      title: "Winter of Love",
      image: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=150&h=150&fit=crop",
    },
    {
      id: 7,
      title: "Mehendi",
      image: "https://images.unsplash.com/photo-1608155686393-8fdd966d784d?w=150&h=150&fit=crop",
    },
    {
      id: 8,
      title: "2010s Mix",
      image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=150&h=150&fit=crop",
    },
  ];

  const handlePlayToggle = (id: number, e: React.MouseEvent) => {
    e.stopPropagation();
    const songToPlay = songs.find((s) => s.id === id);
    if (songToPlay) {
      playSong(songToPlay, songs);
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
      {items.map((item) => {
        const isCurrentPlaying = currentSong?.id === item.id && isPlaying;
        return (
          <div
            key={item.id}
            onClick={(e) => handlePlayToggle(item.id, e)}
            className="flex items-center gap-4 bg-white/5 hover:bg-white/10 rounded-md overflow-hidden transition-all duration-300 cursor-pointer relative group pr-4"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-16 h-16 object-cover flex-shrink-0"
            />
            <span className="font-bold text-sm text-white line-clamp-2 select-none flex-1 pr-12">
              {item.title}
            </span>

            {/* Quick Play Button */}
            <button
              onClick={(e) => handlePlayToggle(item.id, e)}
              className={`absolute right-4 bg-[#1db954] hover:bg-[#1ed760] text-black w-10 h-10 rounded-full flex items-center justify-center shadow-lg transform translate-y-1 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:scale-105 active:scale-95 ${
                isCurrentPlaying ? "opacity-100 translate-y-0" : ""
              }`}
            >
              {isCurrentPlaying ? (
                <Pause size={18} className="fill-black text-black" />
              ) : (
                <Play size={18} className="fill-black text-black translate-x-[1px]" />
              )}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default HomeGrid;

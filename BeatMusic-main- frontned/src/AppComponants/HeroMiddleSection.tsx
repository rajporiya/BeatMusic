import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import HomeGrid from "./HomeGrid";
import VideoBanner from "./VideoBanner";
import Footer from "./Footer";
import SongsGrid from "./SongsGrid";
import { useAuth } from "../context/AuthContext";
import type { Song } from "../type/movie-name";

const HeroMiddleSection = () => {
  const [activeFilter, setActiveFilter] = useState<"All" | "Music" | "Podcasts">("All");
  const [songs, setSongs] = useState<Song[]>([]);
  const { token } = useAuth();

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
      .catch((err) => console.error("Error fetching songs:", err));
  }, [token]);

  const filters = [
    { label: "All", value: "All" as const },
    { label: "Music", value: "Music" as const },
    { label: "Podcasts", value: "Podcasts" as const },
  ];

  return (
    <div className="flex flex-col gap-6 w-full select-none">
      {/* Filter Pills Navigation */}
      <div className="flex items-center gap-2 shrink-0">
        {filters.map((filter) => {
          const isActive = activeFilter === filter.value;
          return (
            <button
              key={filter.value}
              type="button"
              onClick={() => setActiveFilter(filter.value)}
              className={`rounded-full py-1.5 px-4 text-xs font-extrabold tracking-wide transition-all duration-200 cursor-pointer shadow-sm ${
                isActive
                  ? "bg-white text-black scale-100"
                  : "bg-[#232323] text-white hover:bg-[#2a2a2a] hover:scale-102"
              }`}
            >
              {filter.label}
            </button>
          );
        })}
      </div>

      {/* Main Grid Area */}
      <div className="flex flex-col gap-8 mt-2">
        {/* Render quick play grid */}
        <HomeGrid />

        {/* Recommended Songs Grid / Call to Action */}
        {token ? (
          songs.length > 0 && (
            <div className="flex flex-col gap-4">
              <h3 className="text-xl font-extrabold text-white">Recommended for You</h3>
              <SongsGrid songsList={songs} />
            </div>
          )
        ) : (
          <div className="bg-[#181818] border border-white/5 p-6 rounded-lg text-center flex flex-col items-center gap-3.5 shadow-md">
            <h3 className="text-lg font-extrabold text-white">Unlock personalized recommendations</h3>
            <p className="text-xs text-gray-400 font-semibold max-w-sm leading-relaxed">
              Log in or create a free account to listen to recommended tracks, save playlists, and enjoy music.
            </p>
            <div className="flex items-center gap-4 mt-1.5">
              <Link
                to="/login"
                className="bg-white hover:bg-gray-100 text-black text-xs font-extrabold py-2.5 px-6 rounded-full hover:scale-105 active:scale-95 transition-all duration-200 shadow-md cursor-pointer"
              >
                Log In
              </Link>
              <Link
                to="/register"
                className="text-gray-400 hover:text-white text-xs font-extrabold transition-colors hover:scale-105"
              >
                Sign Up
              </Link>
            </div>
          </div>
        )}

        {/* Getting started custom teal banner */}
        <VideoBanner />
      </div>

      {/* Main Footer */}
      <Footer />
    </div>
  );
};

export default HeroMiddleSection;

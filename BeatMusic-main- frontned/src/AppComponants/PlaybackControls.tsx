import React, { useState } from "react";
import {
  Play,
  Pause,
  Shuffle,
  SkipBack,
  SkipForward,
  Repeat,
  Mic2,
  ListMusic,
  Laptop2,
  Volume2,
  Maximize2,
  PlusCircle,
  PictureInPicture2,
  Plus,
  Heart,
} from "lucide-react";
import { usePlayback } from "../context/PlaybackContext";

const PlaybackControls = () => {
  const {
    currentSong,
    isPlaying,
    volume,
    currentTime,
    duration,
    togglePlay,
    setVolume,
    seekTo,
    playNext,
    playPrevious,
    playlists,
    createPlaylist,
    addSongToPlaylist,
    toggleLikeSong,
  } = usePlayback();


  const [showPlaylistMenu, setShowPlaylistMenu] = useState(false);

  const formatTime = (time: number) => {
    if (isNaN(time) || time === 0) return "0:00";
    const minutes = Math.floor(time / 60);

    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (duration === 0) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;
    const clickPercent = Math.max(0, Math.min(1, clickX / width));
    seekTo(clickPercent * duration);
  };

  const handleVolumeClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;
    const clickPercent = Math.max(0, Math.min(1, clickX / width));
    setVolume(Math.round(clickPercent * 100));
  };

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className="h-[88px] bg-black text-white px-4 flex items-center justify-between select-none shrink-0 border-t border-[#292929] z-50">
      {/* Left Section - Song Metadata */}
      <div className="flex items-center gap-3.5 min-w-[180px] w-1/4">
        <img
          src={currentSong?.image || "/album_cover.jpg"}
          alt={currentSong ? `${currentSong.title} cover` : "Shararat cover"}
          className="h-14 w-14 rounded-md object-cover flex-shrink-0 shadow-lg border border-white/5"
        />
        <div className="flex flex-col gap-0.5 min-w-0">
          <span className="text-[13px] font-bold text-white hover:underline cursor-pointer truncate">
            {currentSong?.title || "No song playing"}
          </span>
          <span className="text-[11px] text-gray-400 font-semibold hover:underline hover:text-white cursor-pointer truncate">
            {currentSong?.artist || "Select a song to play"}
          </span>
        </div>
        {currentSong && (() => {
          const isLiked = playlists.find((p) => p.id === "liked-songs")?.songs.some((s) => s.id === currentSong.id);
          return (
            <div className="flex items-center gap-2 ml-2 flex-shrink-0">
              {/* Heart/Like Button */}
              <button
                type="button"
                onClick={() => toggleLikeSong(currentSong)}
                className={`transition-colors cursor-pointer ${
                  isLiked ? "text-green-500 fill-green-500" : "text-gray-400 hover:text-white"
                }`}
                title={isLiked ? "Remove from Liked Songs" : "Save to Liked Songs"}
              >
                <Heart size={18} />
              </button>

              {/* Playlist Dropdown */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setShowPlaylistMenu(!showPlaylistMenu)}
                  className={`transition-colors cursor-pointer ${showPlaylistMenu ? "text-green-500" : "text-gray-400 hover:text-white"}`}
                  title="Add to playlist"
                >
                  <PlusCircle size={18} />
                </button>
                {showPlaylistMenu && (
                  <div className="absolute left-0 bottom-8 mb-2 bg-[#282828] border border-white/10 rounded-md py-1.5 w-48 shadow-2xl z-[999] text-left">
                    <div className="px-3 py-1 text-[10px] text-gray-400 font-bold uppercase tracking-wider">
                      Add to Playlist
                    </div>
                    <div className="max-h-36 overflow-y-auto">
                      {playlists.map((pl) => (
                        <button
                          key={pl.id}
                          onClick={() => {
                            addSongToPlaylist(pl.id, currentSong);
                            setShowPlaylistMenu(false);
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
                      onClick={() => {
                        const newId = createPlaylist();
                        if (newId) {
                          addSongToPlaylist(newId, currentSong);
                        }
                        setShowPlaylistMenu(false);
                      }}
                      className="w-full text-left px-3 py-1.5 text-xs text-green-400 hover:bg-[#3e3e3e] font-extrabold flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <Plus size={14} />
                      <span>Create & Add</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          );
        })()}
      </div>

      {/* Center Section - Playback Controls */}
      <div className="flex flex-col items-center flex-1 max-w-[650px] px-4">
        {/* Controls Row */}
        <div className="flex items-center gap-6 mb-2">
          <button
            type="button"
            className="text-gray-400 hover:text-white transition-colors cursor-pointer"
            title="Shuffle"
          >
            <Shuffle size={18} />
          </button>
          <button
            type="button"
            onClick={playPrevious}
            className="text-gray-400 hover:text-white transition-colors cursor-pointer"
            title="Previous"
          >
            <SkipBack size={20} className="fill-current" />
          </button>
          <button
            type="button"
            onClick={togglePlay}
            disabled={!currentSong}
            className={`h-8 w-8 rounded-full bg-white hover:scale-105 active:scale-95 flex items-center justify-center text-black cursor-pointer shadow-md transition-transform ${!currentSong ? "opacity-50 cursor-not-allowed" : ""}`}
            title={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? (
              <Pause size={16} className="fill-black text-black" />
            ) : (
              <Play size={16} className="fill-black text-black translate-x-[1px]" />
            )}
          </button>
          <button
            type="button"
            onClick={playNext}
            className="text-gray-400 hover:text-white transition-colors cursor-pointer"
            title="Next"
          >
            <SkipForward size={20} className="fill-current" />
          </button>
          <button
            type="button"
            className="text-gray-400 hover:text-white transition-colors cursor-pointer"
            title="Enable repeat"
          >
            <Repeat size={18} />
          </button>
        </div>

        {/* Timeline Progress Slider */}
        <div className="flex items-center gap-2.5 w-full text-[11px] text-gray-400 font-semibold">
          <span>{formatTime(currentTime)}</span>
          <div 
            onClick={handleProgressClick}
            className="flex-1 h-1 bg-white/10 hover:h-[6px] rounded-full relative group cursor-pointer transition-all"
          >
            {/* Active progress bar */}
            <div
              className="h-full bg-white group-hover:bg-[#1db954] rounded-full"
              style={{ width: `${progressPercent}%` }}
            />
            {/* Slider knob */}
            <div
              className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 shadow-md transition-opacity"
              style={{ left: `calc(${progressPercent}% - 6px)` }}
            />
          </div>
          <span>{formatTime(duration)}</span>
        </div>
      </div>

      {/* Right Section - Volume & Utilities */}
      <div className="flex items-center gap-3.5 justify-end w-1/4 min-w-[200px]">
        <button
          type="button"
          className="text-gray-400 hover:text-white transition-colors cursor-pointer"
          title="Lyrics"
        >
          <Mic2 size={16} />
        </button>
        <button
          type="button"
          className="text-gray-400 hover:text-white transition-colors cursor-pointer"
          title="Play queue"
        >
          <ListMusic size={16} />
        </button>
        <button
          type="button"
          className="text-gray-400 hover:text-white transition-colors cursor-pointer"
          title="Connect to a device"
        >
          <Laptop2 size={16} />
        </button>
        <div className="flex items-center gap-2 group">
          <button
            type="button"
            className="text-gray-400 hover:text-white transition-colors cursor-pointer"
            title="Mute"
          >
            <Volume2 size={16} />
          </button>
          {/* Volume progress slider */}
          <div 
            onClick={handleVolumeClick}
            className="w-[90px] h-1 bg-white/10 hover:h-[6px] rounded-full relative cursor-pointer group-hover:h-[6px] transition-all"
          >
            <div
              className="h-full bg-white group-hover:bg-[#1db954] rounded-full"
              style={{ width: `${volume}%` }}
            />
            <div
              className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 shadow-md transition-opacity"
              style={{ left: `calc(${volume}% - 6px)` }}
            />
          </div>
        </div>
        <button
          type="button"
          className="text-gray-400 hover:text-white transition-colors cursor-pointer"
          title="Miniplayer"
        >
          <PictureInPicture2 size={16} />
        </button>
        <button
          type="button"
          className="text-gray-400 hover:text-white transition-colors cursor-pointer"
          title="Fullscreen"
        >
          <Maximize2 size={16} />
        </button>
      </div>
    </div>
  );
};

export default PlaybackControls;

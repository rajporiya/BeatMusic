import React from "react";
import { Plus, Library, Globe, Trash2, Play, Music } from "lucide-react";
import { usePlayback } from "../context/PlaybackContext";

interface LibrarySidebarProps {
  onCollapse?: () => void;
}

const LibrarySidebar: React.FC<LibrarySidebarProps> = ({ onCollapse }) => {
  const { playlists, createPlaylist, removePlaylist, playSong } = usePlayback();

  const footerLinks = [
    "Legal",
    "Safety & Privacy Center",
    "Privacy Policy",
    "Cookies",
    "About Ads",
    "Accessibility",
    "Cookies",
  ];

  const handlePlaylistPlay = (e: React.MouseEvent, playlistSongs: any[]) => {
    e.stopPropagation();
    if (playlistSongs.length > 0) {
      playSong(playlistSongs[0], playlistSongs);
    } else {
      alert("This playlist has no songs yet. Click the + icon on a song to add it!");
    }
  };

  return (
    <div className="flex flex-col h-full bg-[#121212] rounded-lg select-none">
      {/* Sidebar Header */}
      <div className="flex items-center justify-between px-4 py-3 shrink-0">
        <button
          type="button"
          onClick={onCollapse}
          className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer font-extrabold text-base"
        >
          <Library className="h-6 w-6" />
          <span>Your Library</span>
        </button>

        <button
          type="button"
          title="Create playlist"
          onClick={() => createPlaylist()}
          className="h-8 w-8 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#1f1f1f] transition-all duration-200 cursor-pointer"
        >
          <Plus className="h-5 w-5" />
        </button>
      </div>

      {/* Sidebar Content Cards / Playlists List */}
      <div className="flex-1 overflow-y-auto px-2 space-y-4 py-2 scrollbar-thin scrollbar-thumb-gray-800">
        {/* Playlists List Rendering */}
        <div className="flex flex-col gap-1">
          {playlists.map((playlist) => {
            const hasSongs = playlist.songs.length > 0;
            return (
              <div
                key={playlist.id}
                onClick={(e) => handlePlaylistPlay(e, playlist.songs)}
                className="flex items-center gap-3 p-2 hover:bg-[#1f1f1f] rounded-lg transition-colors cursor-pointer group relative"
                title={hasSongs ? "Click to play playlist" : "Playlist is empty"}
              >
                {/* Playlist Image with Overlay Play Button */}
                <div className="relative h-12 w-12 rounded-md overflow-hidden bg-[#282828] flex-shrink-0 flex items-center justify-center border border-white/5 shadow-md">
                  {playlist.songs.length > 0 && playlist.image ? (
                    <img
                      src={playlist.image}
                      alt={playlist.name}
                      className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <Music className="h-5 w-5 text-gray-400" />
                  )}
                  {/* Play Overlay */}
                  {hasSongs && (
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Play className="h-4 w-4 fill-white text-white" />
                    </div>
                  )}
                </div>

                {/* Playlist Meta */}
                <div className="flex-1 min-w-0 pr-8">
                  <h4 className="font-bold text-sm text-white truncate group-hover:text-green-500 transition-colors">
                    {playlist.name}
                  </h4>
                  <p className="text-gray-400 text-xs font-semibold">
                    Playlist • {playlist.songs.length} {playlist.songs.length === 1 ? "song" : "songs"}
                  </p>
                </div>

                {/* Delete button (only for custom playlists) */}
                {playlist.id !== "liked-songs" && (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      removePlaylist(playlist.id);
                    }}
                    className="absolute right-2 opacity-0 group-hover:opacity-100 text-gray-400 hover:text-red-500 transition-all p-1 cursor-pointer"
                    title="Delete playlist"
                  >
                    <Trash2 size={16} />
                  </button>
                )}
              </div>
            );
          })}
        </div>

        {/* Dynamic creation call-to-action card if user only has Liked Songs and it's empty */}
        {playlists.length <= 1 && playlists[0]?.songs.length === 0 && (
          <div className="bg-[#1f1f1f] rounded-lg p-4 flex flex-col gap-3 shadow-md mx-1">
            <h4 className="font-bold text-white text-sm">Create your first playlist</h4>
            <p className="text-gray-300 text-xs font-medium">It's easy, we'll help you</p>
            <button
              type="button"
              onClick={() => createPlaylist()}
              className="bg-white text-black text-xs font-extrabold py-2 px-4 rounded-full w-fit hover:scale-105 active:scale-95 transition-transform duration-200 cursor-pointer shadow-md"
            >
              Create playlist
            </button>
          </div>
        )}

        {/* Podcasts Call to action card */}
        <div className="bg-[#1f1f1f] rounded-lg p-4 flex flex-col gap-3 shadow-md mx-1">
          <h4 className="font-bold text-white text-sm">Let's find some podcasts to follow</h4>
          <p className="text-gray-300 text-xs font-medium">We'll keep you updated on new episodes</p>
          <button
            type="button"
            className="bg-white text-black text-xs font-extrabold py-2 px-4 rounded-full w-fit hover:scale-105 active:scale-95 transition-transform duration-200 cursor-pointer shadow-md"
          >
            Browse podcasts
          </button>
        </div>
      </div>

      {/* Sidebar Footer links & Language Button */}
      <div className="p-4 shrink-0 flex flex-col gap-5 bg-[#121212]">
        {/* Links Grid */}
        <div className="flex flex-wrap gap-x-3 gap-y-2 text-[11px] text-gray-400 font-bold">
          {footerLinks.map((link, idx) => (
            <span
              key={idx}
              className="hover:underline cursor-pointer transition-all"
            >
              {link}
            </span>
          ))}
        </div>

        {/* Language Button */}
        <button
          type="button"
          className="flex items-center gap-1.5 border border-gray-600 rounded-full py-1.5 px-3.5 w-fit text-xs font-extrabold text-white hover:border-white hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
        >
          <Globe className="h-4 w-4" />
          <span>English</span>
        </button>
      </div>
    </div>
  );
};

export default LibrarySidebar;

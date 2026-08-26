import React, { createContext, useContext, useState, useEffect, useRef } from "react";
import type { Song } from "../type/movie-name";

interface PlaybackContextType {
  currentSong: Song | null;
  isPlaying: boolean;
  volume: number; // 0 - 100
  currentTime: number;
  duration: number;
  playSong: (song: Song, allSongs?: Song[]) => void;
  pauseSong: () => void;
  togglePlay: () => void;
  setVolume: (level: number) => void;
  seekTo: (time: number) => void;
  playNext: () => void;
  playPrevious: () => void;
}

const PlaybackContext = createContext<PlaybackContextType | undefined>(undefined);

export const PlaybackProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentSong, setCurrentSong] = useState<Song | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolumeState] = useState(50);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [queue, setQueue] = useState<Song[]>([]);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Initialize Audio Element on Mount
  useEffect(() => {
    const audio = new Audio();
    audioRef.current = audio;

    // Apply initial volume
    audio.volume = volume / 100;

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    const handleDurationChange = () => {
      setDuration(audio.duration || 0);
    };

    const handleEnded = () => {
      // Auto play next song
      playNext();
    };

    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("durationchange", handleDurationChange);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.pause();
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("durationchange", handleDurationChange);
      audio.removeEventListener("ended", handleEnded);
    };
  }, [queue, currentSong]); // depend on queue/currentSong so references are fresh

  const playSong = (song: Song, allSongs?: Song[]) => {
    if (!audioRef.current) return;

    if (allSongs && allSongs.length > 0) {
      setQueue(allSongs);
    }

    // If same song, just toggle play/pause
    if (currentSong && currentSong.id === song.id) {
      togglePlay();
      return;
    }

    setCurrentSong(song);
    setIsPlaying(true);
    setCurrentTime(0);
    setDuration(0);

    const audioUrl = song.url || "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3";
    audioRef.current.src = audioUrl;
    audioRef.current.load();
    audioRef.current.play()
      .catch((error) => console.error("Playback failed:", error));
  };

  const pauseSong = () => {
    if (!audioRef.current) return;
    audioRef.current.pause();
    setIsPlaying(false);
  };

  const togglePlay = () => {
    if (!audioRef.current || !currentSong) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch((error) => console.error("Playback play failed:", error));
    }
  };

  const setVolume = (level: number) => {
    const clampedLevel = Math.max(0, Math.min(100, level));
    setVolumeState(clampedLevel);
    if (audioRef.current) {
      audioRef.current.volume = clampedLevel / 100;
    }
  };

  const seekTo = (time: number) => {
    if (!audioRef.current) return;
    audioRef.current.currentTime = time;
    setCurrentTime(time);
  };

  const playNext = () => {
    if (queue.length === 0 || !currentSong) return;
    const currentIndex = queue.findIndex((s) => s.id === currentSong.id);
    if (currentIndex !== -1 && currentIndex < queue.length - 1) {
      const nextSong = queue[currentIndex + 1];
      playSong(nextSong);
    } else if (queue.length > 0) {
      // Loop back to first song
      playSong(queue[0]);
    }
  };

  const playPrevious = () => {
    if (queue.length === 0 || !currentSong) return;
    const currentIndex = queue.findIndex((s) => s.id === currentSong.id);
    if (currentIndex > 0) {
      const prevSong = queue[currentIndex - 1];
      playSong(prevSong);
    } else if (queue.length > 0) {
      // Loop to last song
      playSong(queue[queue.length - 1]);
    }
  };

  return (
    <PlaybackContext.Provider
      value={{
        currentSong,
        isPlaying,
        volume,
        currentTime,
        duration,
        playSong,
        pauseSong,
        togglePlay,
        setVolume,
        seekTo,
        playNext,
        playPrevious,
      }}
    >
      {children}
    </PlaybackContext.Provider>
  );
};

export const usePlayback = () => {
  const context = useContext(PlaybackContext);
  if (context === undefined) {
    throw new Error("usePlayback must be used within a PlaybackProvider");
  }
  return context;
};

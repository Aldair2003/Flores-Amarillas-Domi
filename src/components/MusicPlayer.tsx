'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import dynamic from 'next/dynamic';
import Image from 'next/image';

const ReactPlayer = dynamic(() => import('react-player/youtube'), { ssr: false });

interface Song {
  title: string;
  artist: string;
  url: string;
  thumbnail: string;
}

const playlist: Song[] = [
  {
    title: "M.A.I",
    artist: "Milo J",
    url: "https://www.youtube.com/watch?v=SrQFSwAyteg",
    thumbnail: "https://i.ytimg.com/vi/SrQFSwAyteg/hqdefault.jpg"
  },
  {
    title: "X20X",
    artist: "Feid",
    url: "https://www.youtube.com/watch?v=PDNAkgpNOCI",
    thumbnail: "https://i.ytimg.com/vi/PDNAkgpNOCI/hqdefault.jpg"
  },
  {
    title: "Sparks",
    artist: "Coldplay",
    url: "https://www.youtube.com/watch?v=Ar48yzjn1PE",
    thumbnail: "https://i.ytimg.com/vi/Ar48yzjn1PE/hqdefault.jpg"
  },
  {
    title: "Sanctuary",
    artist: "Joji",
    url: "https://www.youtube.com/watch?v=wdl13YtcLRk",
    thumbnail: "https://i.ytimg.com/vi/wdl13YtcLRk/hqdefault.jpg"
  }
];

const containerVariants = {
  hidden: { y: 100, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20
    }
  },
  exit: { 
    y: 100, 
    opacity: 0,
    transition: { duration: 0.3 }
  }
};

const playerVariants = {
  hidden: { 
    opacity: 0,
    scale: 0.8,
    y: 20
  },
  visible: { 
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 25
    }
  },
  exit: { 
    opacity: 0,
    scale: 0.8,
    y: 20,
    transition: { duration: 0.2 }
  }
};

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaylistVisible, setIsPlaylistVisible] = useState(false);

  const currentSong = playlist[currentSongIndex];

  const nextSong = () => {
    setCurrentSongIndex((prev) => (prev + 1) % playlist.length);
  };

  const previousSong = () => {
    setCurrentSongIndex((prev) => (prev - 1 + playlist.length) % playlist.length);
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={containerVariants}
      className="fixed bottom-4 right-4 z-50 md:bottom-8 md:right-8"
    >
      <AnimatePresence mode="wait">
        {isExpanded ? (
          <motion.div
            variants={playerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="gradient-yellow-pink backdrop-blur-md rounded-2xl p-6 mb-4 romantic-shadow w-[280px] md:w-[320px] relative overflow-hidden"
          >
            {/* Decoración de flores */}
            <div className="absolute -top-4 -right-4 text-4xl rotate-12 opacity-20">🌻</div>
            <div className="absolute -bottom-4 -left-4 text-4xl -rotate-12 opacity-20">🌸</div>
            
            <div className="flex flex-col gap-4">
              <motion.div 
                className="relative w-full h-48 rounded-xl overflow-hidden romantic-shadow group"
                whileHover={{ scale: 1.02 }}
              >
                <Image
                  src={currentSong.thumbnail}
                  alt={currentSong.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-110"
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent flex items-end p-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <div className="text-white">
                    <motion.h3 
                      className="font-bold text-xl mb-1 drop-shadow-lg"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.1 }}
                    >
                      {currentSong.title}
                    </motion.h3>
                    <motion.p 
                      className="text-white/90 drop-shadow-lg"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      {currentSong.artist}
                    </motion.p>
                  </div>
                </motion.div>
              </motion.div>

              <div className="flex items-center justify-between gap-4">
                <motion.button
                  whileHover={{ scale: 1.1, rotate: -10 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={previousSong}
                  className="w-10 h-10 flex items-center justify-center bg-white/80 rounded-full shadow-lg text-primary-600 hover:text-primary-800 transition-all hover:bg-white"
                >
                  <span className="text-xl">⏮️</span>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  animate={isPlaying ? { rotate: [0, 360] } : {}}
                  transition={isPlaying ? { duration: 4, repeat: Infinity, ease: "linear" } : {}}
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-12 h-12 flex items-center justify-center bg-primary-500 rounded-full shadow-lg text-white hover:bg-primary-600 transition-all"
                >
                  <span className="text-2xl">{isPlaying ? '⏸️' : '▶️'}</span>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={nextSong}
                  className="w-10 h-10 flex items-center justify-center bg-white/80 rounded-full shadow-lg text-primary-600 hover:text-primary-800 transition-all hover:bg-white"
                >
                  <span className="text-xl">⏭️</span>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsPlaylistVisible(!isPlaylistVisible)}
                  className="w-10 h-10 flex items-center justify-center bg-white/80 rounded-full shadow-lg text-primary-600 hover:text-primary-800 transition-all hover:bg-white"
                >
                  <span className="text-xl">📝</span>
                </motion.button>
              </div>

              <motion.div 
                className="mt-2 relative"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <div className="relative">
                  <input
                    type="range"
                    min={0}
                    max={1}
                    step={0.01}
                    value={volume}
                    onChange={(e) => setVolume(parseFloat(e.target.value))}
                    className="w-full h-2 bg-white/30 rounded-lg appearance-none cursor-pointer accent-primary-500 hover:accent-primary-600 transition-all"
                  />
                  <div 
                    className="absolute left-0 top-0 h-2 bg-gradient-to-r from-primary-400 to-primary-600 rounded-lg pointer-events-none"
                    style={{ width: `${volume * 100}%` }}
                  />
                </div>
              </motion.div>

              <AnimatePresence>
                {isPlaylistVisible && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-4 space-y-2">
                      {playlist.map((song, index) => (
                        <motion.button
                          key={song.url}
                          whileHover={{ scale: 1.02, x: 5 }}
                          onClick={() => {
                            setCurrentSongIndex(index);
                            setIsPlaying(true);
                          }}
                          className={`w-full text-left p-2 rounded-lg transition-all flex items-center gap-3
                                    ${index === currentSongIndex 
                                      ? 'bg-white/40 text-primary-800 shadow-md' 
                                      : 'hover:bg-white/20 text-primary-700'}`}
                        >
                          <span className="text-lg">
                            {index === currentSongIndex ? '🎵' : '🎶'}
                          </span>
                          <div>
                            <p className="font-medium">{song.title}</p>
                            <p className="text-sm opacity-75">{song.artist}</p>
                          </div>
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Botón para cerrar */}
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsExpanded(false)}
              className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center bg-white/80 rounded-full shadow-lg text-primary-600 hover:text-primary-800 transition-all hover:bg-white"
            >
              ✕
            </motion.button>
          </motion.div>
        ) : (
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsExpanded(true)}
            className="gradient-yellow-pink p-4 rounded-full shadow-lg text-2xl relative overflow-hidden group"
          >
            <span className="relative z-10">🎵</span>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
          </motion.button>
        )}
      </AnimatePresence>

      <div className="hidden">
        <ReactPlayer
          url={currentSong.url}
          playing={isPlaying}
          volume={volume}
          width="0"
          height="0"
          onEnded={nextSong}
          onError={(e) => console.error('Error en la reproducción:', e)}
          config={{
            playerVars: {
              controls: 0,
              modestbranding: 1,
              showinfo: 0,
              rel: 0,
              playsinline: 1
            }
          }}
        />
      </div>
    </motion.div>
  );
} 
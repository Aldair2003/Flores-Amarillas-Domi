'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import ReasonsGrid from '@/components/ReasonsGrid';
import MusicPlayer from '@/components/MusicPlayer';
import PhotoCarousel from '@/components/PhotoCarousel';
import Counters from '@/components/Counters';
import ReunionCounter from '@/components/ReunionCounter';
import MagicalSection from '@/components/MagicalSection';
import RapunzelElements from '@/components/RapunzelElements';
import BarbieMovies from '@/components/BarbieMovies';
import FutureLetterSection from '@/components/FutureLetterSection';

export default function Home() {
  const [activeSection, setActiveSection] = useState<'photos' | 'reasons' | 'counters' | 'reunion' | 'magical' | 'rapunzel' | 'barbie' | 'letter'>('photos');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Contenido principal */}
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-12 relative"
        >
          {/* Decoración de flores alrededor del título */}
          <div className="absolute -top-10 -left-10 text-6xl floating">🌻</div>
          <div className="absolute -top-10 -right-10 text-6xl floating" style={{ animationDelay: "0.5s" }}>🌻</div>
          <div className="absolute -bottom-10 -left-10 text-6xl floating" style={{ animationDelay: "1s" }}>🌻</div>
          <div className="absolute -bottom-10 -right-10 text-6xl floating" style={{ animationDelay: "1.5s" }}>🌻</div>

          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-primary-800 mb-4 relative z-10"
            animate={{ 
              scale: [1, 1.02, 1],
              rotate: [0, 1, -1, 0]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            Para mi Domi 💛
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-primary-600 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Con todo mi amor, de Aldair para Domi
          </motion.p>

          {/* Navegación entre secciones */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <motion.button
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full transition-all shadow-lg shine-effect ${
                activeSection === 'photos'
                  ? 'gradient-love text-white'
                  : 'glass-effect text-primary-700 hover:text-primary-800'
              }`}
              onClick={() => setActiveSection('photos')}
            >
              📸 Fotos
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full transition-all shadow-lg shine-effect ${
                activeSection === 'reasons'
                  ? 'gradient-love text-white'
                  : 'glass-effect text-primary-700 hover:text-primary-800'
              }`}
              onClick={() => setActiveSection('reasons')}
            >
              💝 100 Razones
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full transition-all shadow-lg shine-effect ${
                activeSection === 'counters'
                  ? 'gradient-love text-white'
                  : 'glass-effect text-primary-700 hover:text-primary-800'
              }`}
              onClick={() => setActiveSection('counters')}
            >
              ⏰ Nuestro Tiempo
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full transition-all shadow-lg shine-effect ${
                activeSection === 'reunion'
                  ? 'gradient-love text-white'
                  : 'glass-effect text-primary-700 hover:text-primary-800'
              }`}
              onClick={() => setActiveSection('reunion')}
            >
              🤗 Reencuentro
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full transition-all shadow-lg shine-effect ${
                activeSection === 'magical'
                  ? 'gradient-love text-white'
                  : 'glass-effect text-primary-700 hover:text-primary-800'
              }`}
              onClick={() => setActiveSection('magical')}
            >
              ✨ Mundo Mágico
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full transition-all shadow-lg shine-effect ${
                activeSection === 'rapunzel'
                  ? 'gradient-love text-white'
                  : 'glass-effect text-primary-700 hover:text-primary-800'
              }`}
              onClick={() => setActiveSection('rapunzel')}
            >
              👸 Rapunzel
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full transition-all shadow-lg shine-effect ${
                activeSection === 'barbie'
                  ? 'gradient-love text-white'
                  : 'glass-effect text-primary-700 hover:text-primary-800'
              }`}
              onClick={() => setActiveSection('barbie')}
            >
              💖 Barbie
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full transition-all shadow-lg shine-effect ${
                activeSection === 'letter'
                  ? 'gradient-love text-white'
                  : 'glass-effect text-primary-700 hover:text-primary-800'
              }`}
              onClick={() => setActiveSection('letter')}
            >
              💌 Carta Especial
            </motion.button>
          </div>
        </motion.div>

        {/* Contenido dinámico */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            {activeSection === 'photos' && <PhotoCarousel />}
            {activeSection === 'reasons' && <ReasonsGrid />}
            {activeSection === 'counters' && <Counters />}
            {activeSection === 'reunion' && <ReunionCounter />}
            {activeSection === 'magical' && <MagicalSection />}
            {activeSection === 'rapunzel' && <RapunzelElements />}
            {activeSection === 'barbie' && <BarbieMovies />}
            {activeSection === 'letter' && <FutureLetterSection />}
          </motion.div>
        </AnimatePresence>
    </div>

      {/* Reproductor de música */}
      {mounted && <MusicPlayer />}
    </main>
  );
}

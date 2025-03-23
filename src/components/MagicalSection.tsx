'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

// Elementos mágicos y referencias
const magicalElements = [
  {
    id: 'lantern',
    emoji: '🏮',
    message: 'Como las linternas que iluminan el cielo, tú iluminas mi vida'
  },
  {
    id: 'crown',
    emoji: '👑',
    message: 'Mi princesa de Corona y de todo mi mundo'
  },
  {
    id: 'flower',
    emoji: '🌺',
    message: 'La flor mágica que cura todo, es tu amor'
  },
  {
    id: 'sun',
    emoji: '☀️',
    message: 'El sol de Corona brilla en tu sonrisa'
  }
];

// Referencias de Anime
const animeReferences = [
  {
    title: 'Ao Haru Ride',
    message: 'Como Futaba y Kou, nuestro amor supera el tiempo y las circunstancias',
    image: '/images/anime/Ao-Haru-Ride-Anime.png'
  },
  {
    title: 'Spy x Family',
    message: 'Como Loid y Yor, juntos formamos la familia perfecta en nuestro propio mundo',
    image: '/images/anime/spy-1.jpg'
  },
  {
    title: 'Orange',
    message: 'Cada momento contigo es un tesoro que quiero proteger, como las cartas del futuro',
    image: '/images/anime/orange_always.png'
  },
  {
    title: 'Horimiya',
    message: 'Como Hori y Miyamura, nos aceptamos y amamos tal como somos',
    image: '/images/anime/portada_horimiya-37.jpg'
  }
];

// Elementos de Barbie
const barbieElements = [
  {
    title: 'Barbie Princess',
    message: 'Eres mi princesa perfecta, como en las películas de Barbie',
    color: 'pink'
  },
  {
    title: 'Barbie Dreams',
    message: 'Contigo todos los sueños se hacen realidad',
    color: 'purple'
  }
];

// Estado para la galería de la muñeca
const dollImages = [
  {
    src: '/images/doll/Rapunzel1.JPEG',
    alt: 'Muñeca Rapunzel 1'
  },
  {
    src: '/images/doll/Rapunzel2.JPEG',
    alt: 'Muñeca Rapunzel 2'
  },
  {
    src: '/images/doll/Rapunzel3.JPEG',
    alt: 'Muñeca Rapunzel 3'
  }
];

export default function MagicalSection() {
  const [activeElement, setActiveElement] = useState<string | null>(null);
  const [showMagicParticles, setShowMagicParticles] = useState(false);
  const [lanterns, setLanterns] = useState<Array<{ id: number; x: number; delay: number }>>([]);
  const [currentDollImage, setCurrentDollImage] = useState(0);

  // Generar linternas flotantes
  useEffect(() => {
    const newLanterns = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 5
    }));
    setLanterns(newLanterns);

    // Cambiar imagen de la muñeca cada 5 segundos
    const interval = setInterval(() => {
      setCurrentDollImage((prev) => (prev + 1) % dollImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Fondo mágico con gradiente */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900 via-pink-800 to-orange-900 opacity-50" />

      {/* Linternas flotantes */}
      <div className="absolute inset-0 overflow-hidden">
        {lanterns.map((lantern) => (
          <motion.div
            key={lantern.id}
            className="absolute"
            initial={{ y: '100vh', x: `${lantern.x}vw`, opacity: 0 }}
            animate={{
              y: '-20vh',
              opacity: [0, 1, 1, 0],
              x: `${lantern.x + (Math.random() * 20 - 10)}vw`
            }}
            transition={{
              duration: 15,
              delay: lantern.delay,
              repeat: Infinity,
              ease: 'linear'
            }}
          >
            <div className="w-8 h-8 md:w-12 md:h-12 bg-yellow-500/30 rounded-full blur-sm" />
            <div className="w-6 h-6 md:w-8 md:h-8 bg-orange-400/40 rounded-full absolute top-1 left-1" />
          </motion.div>
        ))}
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 container mx-auto px-4 py-12">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-white text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Nuestro Mundo Mágico ✨
        </motion.h2>

        {/* Sección de Rapunzel */}
        <motion.div
          className="bg-purple-900/40 backdrop-blur-md rounded-2xl p-6 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-yellow-300 mb-6 text-center">
            La Torre de Nuestros Sueños 🗼
          </h3>

          {/* Galería de la muñeca */}
          <div className="relative rounded-xl overflow-hidden mb-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentDollImage}
                className="relative h-[500px] md:h-[600px] transform-style-3d"
                initial={{ opacity: 0, rotateY: -90 }}
                animate={{ opacity: 1, rotateY: 0 }}
                exit={{ opacity: 0, rotateY: 90 }}
                transition={{
                  duration: 1,
                  ease: "easeInOut"
                }}
              >
                <Image
                  src={dollImages[currentDollImage].src}
                  alt={dollImages[currentDollImage].alt}
                  fill
                  className="object-contain rounded-xl"
                  sizes="(max-width: 768px) 100vw, 80vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent pointer-events-none" />
                
                {/* Efecto de luz */}
                <motion.div
                  className="absolute inset-0 bg-yellow-400/20 pointer-events-none"
                  animate={{
                    opacity: [0, 0.2, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>
            </AnimatePresence>

            {/* Miniaturas de navegación */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
              {dollImages.map((_, index) => (
                <motion.button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentDollImage ? 'bg-yellow-300 w-4' : 'bg-yellow-300/50'
                  }`}
                  onClick={() => setCurrentDollImage(index)}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>
          </div>

          {/* Elementos mágicos */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {magicalElements.map((element) => (
              <motion.button
                key={element.id}
                className="relative group bg-purple-800/30 rounded-xl p-4 text-center hover:bg-purple-700/40 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setActiveElement(element.id);
                  setShowMagicParticles(true);
                  setTimeout(() => setShowMagicParticles(false), 2000);
                }}
              >
                <span className="text-4xl mb-2 block">{element.emoji}</span>
                <motion.p
                  className="text-white/80 text-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {element.message}
                </motion.p>
                
                {/* Partículas mágicas */}
                <motion.div
                  className="absolute -inset-2 pointer-events-none"
                  animate={{
                    background: [
                      'radial-gradient(circle, rgba(255,215,0,0.2) 0%, transparent 70%)',
                      'radial-gradient(circle, rgba(255,215,0,0.1) 100%, transparent 100%)'
                    ]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Sección de Barbie */}
        <motion.div
          className="bg-pink-900/40 backdrop-blur-md rounded-2xl p-6 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-pink-300 mb-6 text-center">
            Tu Mundo Barbie 💖
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {barbieElements.map((element, index) => (
              <motion.div
                key={element.title}
                className="relative overflow-hidden rounded-xl p-6 text-center"
                style={{
                  background: `linear-gradient(135deg, ${element.color === 'pink' ? '#FF69B4' : '#9370DB'}33, transparent)`
                }}
                whileHover={{ scale: 1.02 }}
              >
                <h4 className="text-xl font-bold text-white mb-3">{element.title}</h4>
                <p className="text-white/90">{element.message}</p>
                
                {/* Efecto brillante */}
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  animate={{
                    background: [
                      'radial-gradient(circle, rgba(255,192,203,0.2) 0%, transparent 70%)',
                      'radial-gradient(circle, rgba(255,192,203,0.1) 100%, transparent 100%)'
                    ]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.5
                  }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Sección de Anime */}
        <motion.div
          className="bg-blue-900/40 backdrop-blur-md rounded-2xl p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-blue-300 mb-6 text-center">
            Nuestro Anime Love Story 💕
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {animeReferences.map((anime, index) => (
              <motion.div
                key={anime.title}
                className="relative overflow-hidden rounded-xl aspect-video"
                whileHover={{ scale: 1.02 }}
              >
                <Image
                  src={anime.image}
                  alt={anime.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end p-6">
                  <div className="text-white">
                    <h4 className="text-xl font-bold mb-2">{anime.title}</h4>
                    <p className="text-sm text-white/90">{anime.message}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Partículas mágicas */}
      <AnimatePresence>
        {showMagicParticles && (
          <motion.div
            className="fixed inset-0 pointer-events-none z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {Array.from({ length: 50 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-yellow-300 rounded-full"
                initial={{
                  x: Math.random() * window.innerWidth,
                  y: Math.random() * window.innerHeight,
                  scale: 0
                }}
                animate={{
                  y: [null, -100],
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0]
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.1,
                  repeat: Infinity,
                  repeatDelay: Math.random() * 2
                }}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 
'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';

interface Message {
  text: string;
  emoji: string;
}

const panMessages: Message[] = [
  { text: "¡Cuidado con la sartén!", emoji: "🍳" },
  { text: "El amor golpea cuando menos lo esperas", emoji: "💘" },
  { text: "¡Como el primer encuentro de Flynn y Rapunzel!", emoji: "💫" },
  { text: "Un arma poco convencional para un amor extraordinario", emoji: "✨" },
  { text: "¡El amor a primera sartén!", emoji: "💝" }
];

const thugsMessages: Message[] = [
  { text: "¡Tengo un sueño!", emoji: "💭" },
  { text: "Nuestro amor es como una canción del Snuggly Duckling", emoji: "🎵" },
  { text: "Cada bandido tiene un corazón", emoji: "❤️" },
  { text: "Los sueños se hacen realidad", emoji: "🌟" }
];

export default function RapunzelElements() {
  const [panRotation, setPanRotation] = useState(0);
  const [currentMessage, setCurrentMessage] = useState<Message | null>(null);
  const [showBoat, setShowBoat] = useState(false);
  const [showThugs, setShowThugs] = useState(false);
  const [maximusPosition, setMaximusPosition] = useState(-100);

  const handlePanClick = () => {
    setPanRotation(panRotation + 360);
    const randomMessage = panMessages[Math.floor(Math.random() * panMessages.length)];
    setCurrentMessage(randomMessage);
    setTimeout(() => setCurrentMessage(null), 3500);
  };

  return (
    <div className="relative min-h-[600px] p-4 md:p-8 bg-gradient-to-br from-purple-100 via-pink-50 to-yellow-50">
      {/* Sol de Corona */}
      <motion.div
        className="absolute top-4 right-4 w-24 h-24 md:w-32 md:h-32"
        animate={{
          scale: [1, 1.2, 1],
          rotate: 360
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <div className="absolute inset-0 bg-yellow-400 rounded-full" />
        <div className="absolute inset-2 bg-yellow-300 rounded-full animate-pulse" />
      </motion.div>

      {/* Sartén interactiva */}
      <motion.div
        className="relative w-32 h-32 md:w-40 md:h-40 mx-auto mb-8 cursor-pointer"
        animate={{ rotate: panRotation }}
        transition={{ duration: 0.5 }}
        onClick={handlePanClick}
        whileHover={{ scale: 1.1 }}
      >
        <Image
          src="/images/rapunzel/sarten.png"
          alt="Sartén mágica"
          fill
          className="object-contain"
        />
        <AnimatePresence mode="wait">
          {currentMessage && (
            <motion.div
              className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-xl border border-pink-100 max-w-[90vw] md:max-w-none mx-4"
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-base md:text-lg font-medium text-primary-800 break-words md:whitespace-nowrap text-center">
                {currentMessage.emoji} {currentMessage.text}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Maximus corriendo */}
      <motion.div
        className="absolute bottom-20 w-32 h-32 md:w-40 md:h-40"
        animate={{
          x: [maximusPosition, window.innerWidth],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
      >
        <Image
          src="/images/rapunzel/Maximus_KH3.png"
          alt="Maximus corriendo"
          fill
          className="object-contain"
        />
      </motion.div>

      {/* Bote con linternas */}
      <motion.div
        className="absolute bottom-40 left-1/2 transform -translate-x-1/2 cursor-pointer"
        whileHover={{ scale: 1.05 }}
        onClick={() => setShowBoat(!showBoat)}
      >
        <div className="relative w-64 h-48 md:w-80 md:h-60">
          <Image
            src="/images/rapunzel/bote con linterna.png"
            alt="Bote romántico"
            fill
            className="object-contain"
          />
          {showBoat && (
            <motion.div
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {Array.from({ length: 10 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-8 h-8 md:w-10 md:h-10"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    delay: i * 0.2,
                    repeat: Infinity,
                  }}
                >
                  <Image
                    src="/images/rapunzel/Linterna flotante1.png"
                    alt="Linterna flotante"
                    fill
                    className="object-contain"
                  />
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </motion.div>

      {/* Bandidos del Patito Modosito */}
      <motion.div
        className="absolute bottom-4 right-4 cursor-pointer"
        whileHover={{ scale: 1.1 }}
        onClick={() => setShowThugs(!showThugs)}
      >
        <div className="relative w-40 h-40 md:w-48 md:h-48">
          <Image
            src="/images/rapunzel/Snuggly Duckling.png"
            alt="Bandidos del Patito Modosito"
            fill
            className="object-contain"
          />
          {showThugs && (
            <motion.div
              className="absolute -top-48 md:-top-16 right-0 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-xl border border-pink-100 w-72"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            >
              {thugsMessages.map((message, index) => (
                <motion.p
                  key={index}
                  className="text-base md:text-lg font-medium text-primary-800 mb-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.2 }}
                >
                  {message.emoji} {message.text}
                </motion.p>
              ))}
            </motion.div>
          )}
        </div>
      </motion.div>

      {/* Instrucciones para móviles */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm p-4 md:hidden border-t border-pink-100">
        <p className="text-sm text-center text-primary-600">
          Toca la sartén para mensajes especiales 🍳
          <br />
          Explora el bote y los bandidos para más sorpresas ✨
        </p>
      </div>
    </div>
  );
} 
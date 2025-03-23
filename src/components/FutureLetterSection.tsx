'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function FutureLetterSection() {
  return (
    <div className="relative min-h-[500px] flex items-center justify-center p-4 md:p-8">
      {/* Fondo con gradiente */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-pink-100 to-yellow-100 opacity-50" />
      
      {/* Contenedor principal */}
      <motion.div 
        className="relative bg-white/80 backdrop-blur-md rounded-3xl p-6 md:p-8 max-w-2xl w-full shadow-xl"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Pascal como guardián */}
        <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-40 h-40">
          <Image
            src="/images/pascal.gif"
            alt="Pascal guardián"
            width={160}
            height={160}
            className="object-contain"
          />
        </div>

        {/* Contenido de la carta */}
        <motion.div 
          className="text-center mt-16"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">
            Carta Especial en Construcción 💌
          </h2>
          
          <div className="relative my-8">
            <motion.div 
              className="w-32 h-24 mx-auto bg-pink-100 rounded-lg shadow-md transform rotate-3 relative overflow-hidden"
              whileHover={{ scale: 1.05, rotate: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Sello de cera */}
              <div className="absolute -right-4 -top-4 w-16 h-16 bg-red-400 rounded-full flex items-center justify-center transform rotate-12">
                <span className="text-white text-2xl">💝</span>
              </div>
              
              {/* Líneas decorativas */}
              <div className="absolute inset-4 border-2 border-dashed border-pink-300 rounded" />
            </motion.div>

            {/* Efectos brillantes */}
            <motion.div
              className="absolute inset-0"
              animate={{
                background: [
                  'radial-gradient(circle, rgba(255,223,137,0.2) 0%, transparent 50%)',
                  'radial-gradient(circle, rgba(255,223,137,0.4) 0%, transparent 50%)',
                  'radial-gradient(circle, rgba(255,223,137,0.2) 0%, transparent 50%)'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>

          <p className="text-lg md:text-xl text-primary-600 mb-6">
            Pascal está cuidando un mensaje muy especial para ti... 
          </p>
          
          <p className="text-primary-500 italic">
            Pronto descubrirás lo que hay dentro... 🌟
          </p>

          {/* Decoraciones flotantes */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-3xl"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                rotate: [0, 360],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 4,
                delay: i * 0.2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              {['✨', '💫', '🌟', '💝', '💌'][i]}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
} 
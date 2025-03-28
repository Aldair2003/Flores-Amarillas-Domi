'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface Photo {
  src: string;
  alt: string;
  description: string;
  date?: string;
}

// Configuración de las fotos con descripciones románticas
const photos: Photo[] = [
  {
    src: '/images/photo1.JPEG',
    alt: 'Nosotros 1',
    description: 'El comienzo de nuestra historia juntos...',
    date: 'Nuestro primer momento'
  },
  {
    src: '/images/photo2.JPEG',
    alt: 'Nosotros 2',
    description: 'Cada sonrisa tuya ilumina mi mundo',
    date: 'Momentos especiales'
  },
  {
    src: '/images/photo3.JPEG',
    alt: 'Nosotros 3',
    description: 'Juntos, construyendo nuestros sueños',
    date: 'Nuestras aventuras'
  },
  {
    src: '/images/photo4.JPEG',
    alt: 'Nosotros 4',
    description: 'Tu amor me hace mejor persona cada día',
    date: 'Amor infinito'
  },
  {
    src: '/images/photo5.JPEG',
    alt: 'Nosotros 5',
    description: 'Contigo, cada momento es mágico',
    date: 'Momentos mágicos'
  },
  {
    src: '/images/photo6.JPEG',
    alt: 'Nosotros 6',
    description: 'Tu sonrisa es mi lugar favorito',
    date: 'Felicidad pura'
  },
  {
    src: '/images/photo7.jpg',
    alt: 'Nosotros 7',
    description: 'Nuestro amor crece más cada día',
    date: 'Creciendo juntos'
  },
  {
    src: '/images/photo8.jpg',
    alt: 'Nosotros 8',
    description: 'Eres mi razón para sonreír',
    date: 'Sonrisas compartidas'
  },
  {
    src: '/images/photo9.jpg',
    alt: 'Nosotros 9',
    description: 'Juntos, todo es posible',
    date: 'Sueños compartidos'
  },
  {
    src: '/images/photo10.jpg',
    alt: 'Nosotros 10',
    description: 'Mi corazón late por ti',
    date: 'Amor eterno'
  },
  {
    src: '/images/photo11.JPEG',
    alt: 'Nosotros 11',
    description: 'Cada día te amo más',
    date: 'Amor creciente'
  },
  {
    src: '/images/photo12.JPEG',
    alt: 'Nosotros 12',
    description: 'Nuestros momentos son tesoros',
    date: 'Tesoros compartidos'
  },
  {
    src: '/images/photo13.JPEG',
    alt: 'Nosotros 13',
    description: 'Tu amor es mi inspiración',
    date: 'Inspiración diaria'
  },
  {
    src: '/images/photo14.JPEG',
    alt: 'Nosotros 14',
    description: 'Contigo todo es mejor',
    date: 'Mejores momentos'
  },
  {
    src: '/images/photo15JPEG.JPEG',
    alt: 'Nosotros 15',
    description: 'Eres mi felicidad completa',
    date: 'Felicidad absoluta'
  },
  {
    src: '/images/photo16.JPEG',
    alt: 'Nosotros 16',
    description: 'Nuestro amor es único',
    date: 'Amor único'
  },
  {
    src: '/images/photo17.JPEG',
    alt: 'Nosotros 17',
    description: 'Juntos escribimos nuestra historia',
    date: 'Nuestra historia'
  },
  {
    src: '/images/photo18.JPEG',
    alt: 'Nosotros 18',
    description: 'Cada día es especial contigo',
    date: 'Días especiales'
  },
  {
    src: '/images/photo19.JPEG',
    alt: 'Nosotros 19',
    description: 'Tu amor me hace más fuerte',
    date: 'Fortaleza en el amor'
  },
  {
    src: '/images/photo20.JPEG',
    alt: 'Nosotros 20',
    description: 'Por siempre juntos',
    date: 'Amor eterno'
  }
];

export default function PhotoCarousel() {
  const [[page, direction], setPage] = useState([0, 0]);
  const [isLoading, setIsLoading] = useState(true);

  const imageIndex = Math.abs(page % photos.length);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8
    })
  };

  return (
    <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden rounded-2xl romantic-shadow">
      {/* Fondo con efecto de desenfoque */}
      <div className="absolute inset-0 z-0">
        <Image
          src={photos[imageIndex].src}
          alt="background"
          fill
          sizes="100vw"
          className="object-cover blur-md scale-110 opacity-30"
          priority
          quality={60}
        />
      </div>

      {/* Carrusel principal */}
      <div className="relative h-full z-10">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={page}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            className="absolute w-full h-full flex items-center justify-center"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = offset.x > 0 ? -1 : 1;
              if (Math.abs(offset.x) > 50) {
                paginate(swipe);
              }
            }}
          >
            <div className="relative w-[85%] sm:w-[80%] h-[85%] sm:h-[80%] rounded-xl overflow-hidden romantic-shadow">
              <Image
                src={photos[imageIndex].src}
                alt={photos[imageIndex].alt}
                fill
                sizes="(max-width: 640px) 85vw, (max-width: 1024px) 80vw, 75vw"
                className="object-cover"
                priority
                quality={85}
                onLoad={() => setIsLoading(false)}
              />
              
              {/* Descripción de la foto */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-black/70 to-transparent text-white"
              >
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
                  {photos[imageIndex].date}
                </h3>
                <p className="text-base sm:text-lg md:text-xl line-clamp-2 sm:line-clamp-none">
                  {photos[imageIndex].description}
                </p>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Indicador de carga */}
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-white/30 backdrop-blur-sm">
            <motion.div
              className="w-16 h-16 border-4 border-primary-500 border-t-transparent rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
          </div>
        )}

        {/* Controles de navegación */}
        <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none z-20">
          <motion.button
            whileHover={{ scale: 1.1, backgroundColor: 'rgba(255, 255, 255, 0.95)' }}
            whileTap={{ scale: 0.95 }}
            className="pointer-events-auto p-2 sm:p-4 bg-white/70 backdrop-blur-sm rounded-full transition-all romantic-shadow group"
            onClick={() => paginate(-1)}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-4 w-4 sm:h-6 sm:w-6 text-primary-600 group-hover:text-primary-800 transition-colors" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M15 19l-7-7 7-7" 
              />
            </svg>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1, backgroundColor: 'rgba(255, 255, 255, 0.95)' }}
            whileTap={{ scale: 0.95 }}
            className="pointer-events-auto p-2 sm:p-4 bg-white/70 backdrop-blur-sm rounded-full transition-all romantic-shadow group"
            onClick={() => paginate(1)}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-4 w-4 sm:h-6 sm:w-6 text-primary-600 group-hover:text-primary-800 transition-colors" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M9 5l7 7-7 7" 
              />
            </svg>
          </motion.button>
        </div>

        {/* Indicadores de navegación */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {photos.map((_, index) => (
            <motion.button
              key={index}
              className={`w-2 h-2 rounded-full transition-all ${
                index === imageIndex ? 'bg-white w-4' : 'bg-white/50'
              }`}
              onClick={() => setPage([index, index > imageIndex ? 1 : -1])}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
} 
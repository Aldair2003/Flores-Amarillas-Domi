'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

interface BarbieMovie {
  title: string;
  year: string;
  quote: string;
  description: string;
  color: string;
  icon: string;
  image: string;
}

const barbieMovies: BarbieMovie[] = [
  {
    title: "Barbie y las 12 Princesas Bailarinas",
    year: "2006",
    quote: "La verdadera belleza viene de ser tú misma",
    description: "Donde cada princesa tiene su propio estilo de baile, como nosotros tenemos nuestra propia forma de amor",
    color: "#FF69B4",
    icon: "👗",
    image: "/images/barbie/barbie-en-las-12-princesas-bailarinas.jpg"
  },
  {
    title: "Barbie Rapunzel",
    year: "2002",
    quote: "El amor y la imaginación pueden transformar cualquier cosa",
    description: "Como Rapunzel, nuestro amor pinta un mundo lleno de colores y magia",
    color: "#9370DB",
    icon: "🎨",
    image: "/images/barbie/barbie-as-rapunzel.jpg"
  },
  {
    title: "Barbie y el Castillo de Diamantes",
    year: "2008",
    quote: "La verdadera amistad brilla más que cualquier diamante",
    description: "Nuestro amor brilla como los diamantes del castillo, iluminando cada momento juntos",
    color: "#4169E1",
    icon: "💎",
    image: "/images/barbie/BarbieyelCastillodeDiamantes.jpg"
  },
  {
    title: "Barbie en el Lago de los Cisnes",
    year: "2003",
    quote: "El verdadero amor puede romper cualquier hechizo",
    description: "Como Odette, nuestro amor transforma la magia en realidad",
    color: "#87CEEB",
    icon: "🦢",
    image: "/images/barbie/BarbieenelLagodelosCisnes.jpg"
  },
  {
    title: "Barbie y la Puerta Secreta",
    year: "2014",
    quote: "La magia está en creer en ti misma",
    description: "Juntos descubrimos puertas secretas hacia nuevas aventuras",
    color: "#DDA0DD",
    icon: "🚪",
    image: "/images/barbie/barbie-y-la-puerta-secreta.jpg"
  },
  {
    title: "Barbie Escuela de Princesas",
    year: "2011",
    quote: "Todos tenemos una princesa interior esperando brillar",
    description: "Como Blair, aprenderemos juntos que el verdadero amor nos hace brillar más que cualquier corona",
    color: "#FFB6C1",
    icon: "👑",
    image: "/images/barbie/Barbieescueladeprincesas.jpg"
  }
];

export default function BarbieMovies() {
  const [selectedMovie, setSelectedMovie] = useState<BarbieMovie | null>(null);
  const [hoveredMovie, setHoveredMovie] = useState<string | null>(null);

  return (
    <div className="relative min-h-[600px] p-4 md:p-8">
      {/* Fondo con gradiente */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-100 via-purple-50 to-blue-50 opacity-70" />
      
      <motion.h3
        className="text-3xl md:text-4xl font-bold text-center text-primary-800 mb-8 relative"
        animate={{
          textShadow: [
            '0 0 8px rgba(255,105,180,0.3)',
            '0 0 16px rgba(255,105,180,0.5)',
            '0 0 8px rgba(255,105,180,0.3)',
          ],
        }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        Mundo Mágico de Barbie 💖
      </motion.h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative">
        {barbieMovies.map((movie) => (
          <motion.div
            key={movie.title}
            className="relative rounded-2xl overflow-hidden cursor-pointer h-64 md:h-72"
            style={{
              backgroundColor: `${movie.color}22`,
            }}
            whileHover={{ scale: 1.02, y: -5 }}
            onHoverStart={() => setHoveredMovie(movie.title)}
            onHoverEnd={() => setHoveredMovie(null)}
            onClick={() => setSelectedMovie(movie)}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            
            <div className="relative h-full p-6 flex flex-col justify-end">
              <motion.div
                className="text-4xl mb-4"
                animate={{
                  rotate: hoveredMovie === movie.title ? [0, 15, -15, 0] : 0,
                  scale: hoveredMovie === movie.title ? [1, 1.2, 1] : 1,
                }}
                transition={{ duration: 0.5 }}
              >
                {movie.icon}
              </motion.div>
              
              <motion.h4 
                className="text-xl font-bold text-white mb-2"
                animate={{
                  y: hoveredMovie === movie.title ? [0, -5, 0] : 0,
                }}
              >
                {movie.title}
              </motion.h4>
              
              <motion.p 
                className="text-white/80 text-sm"
                initial={{ opacity: 0.6 }}
                animate={{
                  opacity: hoveredMovie === movie.title ? 1 : 0.6,
                }}
              >
                {movie.year}
              </motion.p>

              <motion.div
                className="absolute inset-0"
                style={{
                  backgroundImage: `url(${movie.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  zIndex: -1,
                }}
                animate={{
                  scale: hoveredMovie === movie.title ? 1.1 : 1,
                }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal de película */}
      <AnimatePresence>
        {selectedMovie && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedMovie(null)}
          >
            <motion.div
              className="relative max-w-lg w-full bg-white rounded-2xl overflow-hidden"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div 
                className="h-48 md:h-64 bg-cover bg-center"
                style={{ backgroundImage: `url(${selectedMovie.image})` }}
              />

              <div className="relative p-6">
                <motion.div
                  className="absolute -top-10 right-6 text-6xl"
                  animate={{
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {selectedMovie.icon}
                </motion.div>

                <h3 className="text-2xl font-bold mb-2 text-primary-800">{selectedMovie.title}</h3>
                <p className="text-primary-600 mb-4">{selectedMovie.year}</p>
                
                <div className="space-y-4">
                  <div className="bg-pink-50 rounded-lg p-4">
                    <p className="text-pink-800 italic">"{selectedMovie.quote}"</p>
                  </div>
                  
                  <div className="bg-purple-50 rounded-lg p-4">
                    <p className="text-purple-800">{selectedMovie.description}</p>
                  </div>
                </div>

                <motion.button
                  className="mt-6 w-full bg-primary-500 text-white rounded-lg py-2 px-4 hover:bg-primary-600 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedMovie(null)}
                >
                  Cerrar
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Decoraciones flotantes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-2xl opacity-20"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: 4,
              delay: i * 0.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {['👗', '👠', '👑', '💝', '✨', '💖', '🎀', '🌟'][i]}
          </motion.div>
        ))}
      </div>
    </div>
  );
} 
'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Reason {
  id: number;
  text: string;
  category: 'love' | 'leave';
  emoji?: string;
}

const reasons: Reason[] = [
  { id: 1, text: 'Por tu hermosa sonrisa que ilumina mi día', category: 'love', emoji: '😊' },
  { id: 2, text: 'Por la forma en que tus ojos brillan cuando me miras', category: 'love', emoji: '👀' },
  { id: 3, text: 'Por cómo me haces sentir especial cada día', category: 'love', emoji: '✨' },
  { id: 4, text: 'Por tu dulzura al hablarme', category: 'love', emoji: '💝' },
  { id: 5, text: 'Por los momentos mágicos que creamos juntos', category: 'love', emoji: '💫' },
  { id: 6, text: 'Por tu forma de ser tan única y especial', category: 'love', emoji: '🌟' },
  { id: 7, text: 'Por cómo me apoyas en todo momento', category: 'love', emoji: '🤝' },
  { id: 8, text: 'Por tu risa contagiosa', category: 'love', emoji: '😄' },
  { id: 9, text: 'Por los sueños que compartimos', category: 'love', emoji: '💭' },
  { id: 10, text: 'Por tu manera de hacerme feliz', category: 'love', emoji: '🥰' },
  { id: 11, text: 'Por tu inteligencia y determinación', category: 'love', emoji: '🎓' },
  { id: 12, text: 'Por tu pasión por la justicia', category: 'love', emoji: '⚖️' },
  { id: 13, text: 'Por cómo defiendes tus ideales', category: 'love', emoji: '💪' },
  { id: 14, text: 'Por tu amor por los animales', category: 'love', emoji: '🐾' },
  { id: 15, text: 'Por tu corazón bondadoso', category: 'love', emoji: '❤️' },
  { id: 16, text: 'Por tu valentía ante los desafíos', category: 'love', emoji: '🦁' },
  { id: 17, text: 'Por tu forma de ver el mundo', category: 'love', emoji: '🌎' },
  { id: 18, text: 'Por tu capacidad de hacerme reír', category: 'love', emoji: '😂' },
  { id: 19, text: 'Por nuestras conversaciones interminables', category: 'love', emoji: '💬' },
  { id: 20, text: 'Por tu forma de bailar', category: 'love', emoji: '💃' },
  { id: 21, text: 'Por cómo me miras cuando estoy distraído', category: 'love', emoji: '👀' },
  { id: 22, text: 'Por tu forma de abrazarme', category: 'love', emoji: '🤗' },
  { id: 23, text: 'Por tu dedicación a tus estudios', category: 'love', emoji: '📚' },
  { id: 24, text: 'Por tu amor por la familia', category: 'love', emoji: '👨‍👩‍👧‍👦' },
  { id: 25, text: 'Por tu forma de expresar amor', category: 'love', emoji: '💌' },
  { id: 26, text: 'Por tu creatividad', category: 'love', emoji: '🎨' },
  { id: 27, text: 'Por tu forma de cuidarme', category: 'love', emoji: '🏥' },
  { id: 28, text: 'Por tu espíritu aventurero', category: 'love', emoji: '🗺️' },
  { id: 29, text: 'Por tu forma de ver lo positivo', category: 'love', emoji: '☀️' },
  { id: 30, text: 'Por tu paciencia conmigo', category: 'love', emoji: '🙏' },
  { id: 31, text: 'Por tu forma de escucharme', category: 'love', emoji: '👂' },
  { id: 32, text: 'Por tu forma de apoyar mis sueños', category: 'love', emoji: '🌠' },
  { id: 33, text: 'Por tu forma de decir mi nombre', category: 'love', emoji: '💖' },
  { id: 34, text: 'Por tu forma de mostrar cariño', category: 'love', emoji: '🥰' },
  { id: 35, text: 'Por tu forma de ser tú misma', category: 'love', emoji: '✨' },
  { id: 36, text: 'Por tu forma de enfrentar los problemas', category: 'love', emoji: '💪' },
  { id: 37, text: 'Por tu forma de celebrar mis logros', category: 'love', emoji: '🎉' },
  { id: 38, text: 'Por tu forma de consolarme', category: 'love', emoji: '🤗' },
  { id: 39, text: 'Por tu forma de sorprenderme', category: 'love', emoji: '🎁' },
  { id: 40, text: 'Por tu forma de hacerme sentir especial', category: 'love', emoji: '👑' },
  { id: 41, text: 'Por tu forma de compartir tus sueños', category: 'love', emoji: '💫' },
  { id: 42, text: 'Por tu forma de demostrar afecto', category: 'love', emoji: '💕' },
  { id: 43, text: 'Por tu forma de ser detallista', category: 'love', emoji: '🎀' },
  { id: 44, text: 'Por tu forma de ser comprensiva', category: 'love', emoji: '🤝' },
  { id: 45, text: 'Por tu forma de ser cariñosa', category: 'love', emoji: '💝' },
  { id: 46, text: 'Por tu forma de ser romántica', category: 'love', emoji: '🌹' },
  { id: 47, text: 'Por tu forma de ser divertida', category: 'love', emoji: '🎮' },
  { id: 48, text: 'Por tu forma de ser apasionada', category: 'love', emoji: '🔥' },
  { id: 49, text: 'Por tu forma de ser sincera', category: 'love', emoji: '💯' },
  { id: 50, text: 'Por tu forma de ser leal', category: 'love', emoji: '🤍' },
  { id: 51, text: 'Por nuestras citas en la pizzería', category: 'love', emoji: '🍕' },
  { id: 52, text: 'Por nuestros paseos juntos', category: 'love', emoji: '🚶‍♂️' },
  { id: 53, text: 'Por nuestras fotos juntos', category: 'love', emoji: '📸' },
  { id: 54, text: 'Por nuestros momentos de silencio', category: 'love', emoji: '🤫' },
  { id: 55, text: 'Por nuestras risas compartidas', category: 'love', emoji: '😂' },
  { id: 56, text: 'Por nuestros planes futuros', category: 'love', emoji: '📅' },
  { id: 57, text: 'Por nuestros momentos de locura', category: 'love', emoji: '🤪' },
  { id: 58, text: 'Por nuestras historias compartidas', category: 'love', emoji: '📖' },
  { id: 59, text: 'Por nuestros secretos', category: 'love', emoji: '🤫' },
  { id: 60, text: 'Por nuestros momentos especiales', category: 'love', emoji: '✨' },
  { id: 61, text: 'Por tu forma de decir te amo', category: 'love', emoji: '💘' },
  { id: 62, text: 'Por tu forma de ser mi compañera', category: 'love', emoji: '👫' },
  { id: 63, text: 'Por tu forma de ser mi confidente', category: 'love', emoji: '🤝' },
  { id: 64, text: 'Por tu forma de ser mi apoyo', category: 'love', emoji: '🏋️‍♀️' },
  { id: 65, text: 'Por tu forma de ser mi inspiración', category: 'love', emoji: '💫' },
  { id: 66, text: 'Por tu forma de ser mi motivación', category: 'love', emoji: '🎯' },
  { id: 67, text: 'Por tu forma de ser mi felicidad', category: 'love', emoji: '🌈' },
  { id: 68, text: 'Por tu forma de ser mi paz', category: 'love', emoji: '🕊️' },
  { id: 69, text: 'Por tu forma de ser mi amor', category: 'love', emoji: '❤️' },
  { id: 70, text: 'Por tu forma de ser mi todo', category: 'love', emoji: '🌟' },
  { id: 71, text: 'Por cada mensaje de buenos días', category: 'love', emoji: '🌅' },
  { id: 72, text: 'Por cada mensaje de buenas noches', category: 'love', emoji: '🌙' },
  { id: 73, text: 'Por cada "te extraño"', category: 'love', emoji: '💔' },
  { id: 74, text: 'Por cada "te amo"', category: 'love', emoji: '💖' },
  { id: 75, text: 'Por cada "te pienso"', category: 'love', emoji: '💭' },
  { id: 76, text: 'Por cada "te necesito"', category: 'love', emoji: '🥺' },
  { id: 77, text: 'Por cada "te quiero ver"', category: 'love', emoji: '👀' },
  { id: 78, text: 'Por cada "te espero"', category: 'love', emoji: '⌛' },
  { id: 79, text: 'Por cada "te sueño"', category: 'love', emoji: '💫' },
  { id: 80, text: 'Por cada "te adoro"', category: 'love', emoji: '💝' },
  { id: 81, text: 'Por ser mi primer pensamiento al despertar', category: 'love', emoji: '🌅' },
  { id: 82, text: 'Por ser mi último pensamiento al dormir', category: 'love', emoji: '🌙' },
  { id: 83, text: 'Por ser mi persona favorita', category: 'love', emoji: '👑' },
  { id: 84, text: 'Por ser mi mejor amiga', category: 'love', emoji: '👯‍♀️' },
  { id: 85, text: 'Por ser mi confidente', category: 'love', emoji: '🤫' },
  { id: 86, text: 'Por ser mi compañera de vida', category: 'love', emoji: '👫' },
  { id: 87, text: 'Por ser mi razón de sonreír', category: 'love', emoji: '😊' },
  { id: 88, text: 'Por ser mi motivo de felicidad', category: 'love', emoji: '🌈' },
  { id: 89, text: 'Por ser mi amor verdadero', category: 'love', emoji: '💑' },
  { id: 90, text: 'Por ser mi destino', category: 'love', emoji: '🎯' },
  { id: 91, text: 'Por ser mi presente', category: 'love', emoji: '📅' },
  { id: 92, text: 'Por ser mi futuro', category: 'love', emoji: '🔮' },
  { id: 93, text: 'Por ser mi todo', category: 'love', emoji: '💫' },
  { id: 94, text: 'Por ser mi vida', category: 'love', emoji: '❤️' },
  { id: 95, text: 'Por ser mi mundo', category: 'love', emoji: '🌎' },
  { id: 96, text: 'Por ser mi universo', category: 'love', emoji: '🌌' },
  { id: 97, text: 'Por ser mi eternidad', category: 'love', emoji: '♾️' },
  { id: 98, text: 'Por ser mi amor infinito', category: 'love', emoji: '💞' },
  { id: 99, text: 'Por ser mi alma gemela', category: 'love', emoji: '👥' },
  { id: 100, text: 'Por ser tú, simplemente tú', category: 'love', emoji: '💝' },
  { 
    id: 101, 
    text: 'No existe ni existirá ninguna razón para dejarte. Mi corazón te eligió para siempre, y cada día me enamoro más de ti. Eres mi presente y mi futuro, el amor de mi vida. No hay razón en este mundo que me haga querer alejarme de ti, porque tú eres mi razón para ser feliz cada día. Te amo infinitamente, mi Domi ❤️', 
    category: 'leave',
    emoji: '💘'
  }
];

export default function ReasonsGrid() {
  const [selectedReason, setSelectedReason] = useState<Reason | null>(null);
  const [showLeaveReason, setShowLeaveReason] = useState(false);
  const [hoveredReason, setHoveredReason] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Efecto para la animación de carga inicial
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0,
      y: 20,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10
      }
    }
  };

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <div className="w-full min-h-screen p-4 bg-gradient-to-br from-pink-50 via-yellow-50 to-purple-50">
      {isLoading ? (
        <div className="flex items-center justify-center min-h-screen">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="w-16 h-16 border-4 border-primary-500 border-t-transparent rounded-full"
          />
        </div>
      ) : (
        <>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="text-center mb-12 relative"
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-primary-800 mb-6"
              animate={floatingAnimation}
            >
              100 Razones Para Amarte 💝
            </motion.h2>

            {/* Decorative elements */}
            <motion.div 
              className="absolute -top-10 -left-10 text-6xl"
              animate={floatingAnimation}
            >
              🌸
            </motion.div>
            <motion.div 
              className="absolute -bottom-10 -right-10 text-6xl"
              animate={floatingAnimation}
            >
              🌺
            </motion.div>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            variants={containerVariants}
          >
            {reasons.filter(r => r.category === 'love').map((reason) => (
              <motion.div
                key={reason.id}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  y: -10,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                whileTap={{ scale: 0.95 }}
                className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg cursor-pointer
                         border border-primary-100 hover:border-primary-300 transition-all duration-300
                         transform hover:rotate-1"
                onClick={() => setSelectedReason(reason)}
                onHoverStart={() => setHoveredReason(reason.id)}
                onHoverEnd={() => setHoveredReason(null)}
              >
                <motion.div
                  className="absolute -top-3 -right-3 w-10 h-10 bg-primary-500 rounded-full 
                           flex items-center justify-center text-white font-bold text-sm
                           border-2 border-white shadow-lg"
                  animate={{
                    scale: hoveredReason === reason.id ? [1, 1.2, 1] : 1,
                    rotate: hoveredReason === reason.id ? [0, 15, -15, 0] : 0
                  }}
                  transition={{ duration: 0.5 }}
                >
                  {reason.id}
                </motion.div>
                <motion.div 
                  className="text-4xl mb-4"
                  animate={hoveredReason === reason.id ? {
                    y: [0, -10, 0],
                    scale: [1, 1.2, 1],
                  } : {}}
                  transition={{ duration: 0.5 }}
                >
                  {reason.emoji}
                </motion.div>
                <p className="text-primary-700 text-lg font-medium line-clamp-3 hover:line-clamp-none transition-all duration-300">
                  {reason.text}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Botón para la razón de dejarte */}
          <motion.div 
            className="flex justify-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowLeaveReason(true)}
              className="text-xl text-primary-600 hover:text-primary-800 transition-all duration-300 
                       bg-white/70 backdrop-blur-sm px-10 py-4 rounded-full shadow-lg hover:shadow-xl
                       border-2 border-primary-200 hover:border-primary-400"
            >
              Y 1 razón para dejarte... 💭
            </motion.button>
          </motion.div>

          {/* Modal para mostrar razón seleccionada */}
          <AnimatePresence>
            {selectedReason && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50"
                onClick={() => setSelectedReason(null)}
              >
                <motion.div
                  initial={{ scale: 0.8, opacity: 0, y: 50 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  exit={{ scale: 0.8, opacity: 0, y: 50 }}
                  className="bg-white/90 backdrop-blur-md rounded-3xl p-8 max-w-md w-full
                           shadow-2xl border border-primary-200"
                  onClick={e => e.stopPropagation()}
                >
                  <motion.div 
                    className="text-6xl mb-6"
                    animate={{ 
                      scale: [1, 1.2, 1],
                      rotate: [0, 10, -10, 0]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {selectedReason.emoji}
                  </motion.div>
                  <motion.h3 
                    className="text-3xl font-bold text-primary-800 mb-6"
                    initial={{ x: -20 }}
                    animate={{ x: 0 }}
                  >
                    Razón #{selectedReason.id}
                  </motion.h3>
                  <motion.p 
                    className="text-xl text-primary-700 mb-8 leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {selectedReason.text}
                  </motion.p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-primary-600 text-white rounded-xl py-4 font-medium
                             hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl
                             text-lg"
                    onClick={() => setSelectedReason(null)}
                  >
                    Cerrar con Amor ❤️
                  </motion.button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Modal para la razón para dejarte */}
          <AnimatePresence>
            {showLeaveReason && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50"
                onClick={() => setShowLeaveReason(false)}
              >
                <motion.div
                  initial={{ scale: 0.8, opacity: 0, y: 50 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  exit={{ scale: 0.8, opacity: 0, y: 50 }}
                  className="bg-gradient-to-br from-pink-50 to-yellow-50 rounded-3xl p-10 max-w-2xl w-full
                           shadow-2xl relative overflow-hidden"
                  onClick={e => e.stopPropagation()}
                >
                  {/* Decoración de flores y corazones */}
                  {[...Array(12)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute"
                      style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                      }}
                      animate={{
                        y: [0, -30, 0],
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.6, 0.3],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        delay: i * 0.2,
                      }}
                    >
                      {['🌸', '💝', '✨', '💫', '🌺', '💖'][i % 6]}
                    </motion.div>
                  ))}

                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="relative z-10"
                  >
                    <motion.div 
                      className="text-7xl mb-8"
                      animate={{ 
                        scale: [1, 1.2, 1],
                        rotate: [0, 10, -10, 0]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      💝
                    </motion.div>
                    <motion.h3 
                      className="text-3xl font-bold text-primary-800 mb-8"
                      initial={{ x: -20 }}
                      animate={{ x: 0 }}
                    >
                      La única razón...
                    </motion.h3>
                    <motion.p 
                      className="text-xl text-primary-700 mb-10 leading-relaxed"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      {reasons.find(r => r.category === 'leave')?.text}
                    </motion.p>
                    <motion.button
                      whileHover={{ scale: 1.05, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-primary-600 text-white rounded-xl px-10 py-4 font-medium
                               hover:bg-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl
                               text-lg border border-primary-400"
                      onClick={() => setShowLeaveReason(false)}
                    >
                      Te Amaré Por Siempre ❤️
                    </motion.button>
                  </motion.div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
    </div>
  );
} 
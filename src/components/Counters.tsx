'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TimeUnit {
  value: number;
  label: string;
}

export default function Counters() {
  const [timeTogether, setTimeTogether] = useState<TimeUnit[]>([]);
  const [timeUntilGoodbye, setTimeUntilGoodbye] = useState<TimeUnit[]>([]);

  const startDate = new Date('2023-09-28T20:00:00'); // Hora aproximada en la noche
  const goodbyeDate = new Date('2025-03-23'); // Actualizado a 2025

  const starWarsQuote = {
    quote: "Eres mi Fuerza, mi Luz y mi Destino. Como las estrellas gemelas de Tatooine, nuestro amor brilla eternamente en la galaxia. No necesito la Fuerza cuando tengo tu amor, porque tú eres el balance que mi corazón siempre buscó.",
    author: "De tu Jedi enamorado",
    origin: "En una galaxia no muy lejana..."
  };

  const ourStory = {
    date: "28 de septiembre del 2023",
    place: "Pizzería Italiana",
    moment: "Una noche mágica donde nuestras almas se conectaron",
    detail: "Te di una muñeca tejida de Rapunzel, simbolizando el inicio de nuestro cuento de hadas"
  };

  useEffect(() => {
    const updateCounters = () => {
      const now = new Date();

      // Tiempo juntos
      const diffTogether = now.getTime() - startDate.getTime();
      const daysTogether = Math.floor(diffTogether / (1000 * 60 * 60 * 24));
      const hoursTogether = Math.floor((diffTogether % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutesTogetherTotal = Math.floor((diffTogether % (1000 * 60 * 60)) / (1000 * 60));
      const secondsTogetherTotal = Math.floor((diffTogether % (1000 * 60)) / 1000);

      setTimeTogether([
        { value: daysTogether, label: 'días' },
        { value: hoursTogether, label: 'horas' },
        { value: minutesTogetherTotal, label: 'minutos' },
        { value: secondsTogetherTotal, label: 'segundos' }
      ]);

      // Tiempo hasta la despedida
      const diffGoodbye = goodbyeDate.getTime() - now.getTime();
      if (diffGoodbye > 0) {
        const daysGoodbye = Math.floor(diffGoodbye / (1000 * 60 * 60 * 24));
        const hoursGoodbye = Math.floor((diffGoodbye % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutesGoodbye = Math.floor((diffGoodbye % (1000 * 60 * 60)) / (1000 * 60));
        const secondsGoodbye = Math.floor((diffGoodbye % (1000 * 60)) / 1000);

        setTimeUntilGoodbye([
          { value: daysGoodbye, label: 'días' },
          { value: hoursGoodbye, label: 'horas' },
          { value: minutesGoodbye, label: 'minutos' },
          { value: secondsGoodbye, label: 'segundos' }
        ]);
      }
    };

    updateCounters();
    const interval = setInterval(updateCounters, 1000);
    return () => clearInterval(interval);
  }, []);

  const counterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="w-full space-y-8 p-6">
      {/* Historia de amor */}
      <motion.div
        className="counter-container bg-gradient-to-r from-amber-100 to-yellow-200 rounded-2xl p-6 shadow-xl mb-8"
        initial="hidden"
        animate="visible"
        variants={counterVariants}
      >
        <h3 className="text-2xl md:text-3xl font-bold text-primary-800 mb-4 text-center">
          Nuestra Historia de Amor 💫
        </h3>
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center">
          <p className="text-lg text-primary-700 mb-4">
            Todo comenzó el <span className="font-bold text-primary-800">{ourStory.date}</span> en {ourStory.place}.
          </p>
          <p className="text-lg text-primary-700 mb-4">
            {ourStory.moment}. {ourStory.detail}.
          </p>
        </div>
      </motion.div>

      {/* Tiempo juntos */}
      <motion.div 
        className="counter-container bg-gradient-to-r from-pink-100 to-purple-100 rounded-2xl p-6 shadow-xl"
        initial="hidden"
        animate="visible"
        variants={counterVariants}
      >
        <h3 className="text-2xl md:text-3xl font-bold text-primary-800 mb-4 text-center">
          Tiempo Juntos 💑
        </h3>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {timeTogether.map((unit, index) => (
            <motion.div
              key={unit.label}
              className="flex flex-col items-center bg-white/80 backdrop-blur-sm rounded-lg p-4 min-w-[120px]"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.span 
                className="text-3xl md:text-4xl font-bold text-primary-600"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {unit.value}
              </motion.span>
              <span className="text-sm md:text-base text-primary-500">
                {unit.label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Frase especial con estilo Star Wars y flores */}
        <motion.div
          className="relative bg-gradient-to-r from-amber-50 to-yellow-100 backdrop-blur-sm rounded-xl p-8 text-center mt-6 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {/* Decoración de flores */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-6 h-6 bg-yellow-300/30 rounded-full"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>

          {/* Contenedor de la frase con estilo Star Wars */}
          <motion.div
            className="relative z-10 bg-gradient-to-b from-amber-100/80 to-transparent p-6 rounded-lg border border-amber-200 shadow-[0_0_15px_rgba(252,211,77,0.3)]"
            animate={{ 
              y: [0, -3, 0],
              scale: [1, 1.01, 1]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <p className="text-xl md:text-2xl text-primary-800 font-medium mb-6 leading-relaxed">
              "{starWarsQuote.quote}"
            </p>
            
            <div className="mt-4 space-y-1">
              <p className="text-lg text-primary-700 font-semibold">
                — {starWarsQuote.author}
              </p>
              <p className="text-sm text-primary-600/80 italic">
                {starWarsQuote.origin}
              </p>
            </div>

            {/* Gif de Star Wars en la parte inferior */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
              <motion.img
                src="/images/giftstarwars.gif"
                alt="Star Wars"
                className="w-16 h-16 object-contain"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.8, 1, 0.8]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>

            {/* Decoración inferior */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent" />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Tiempo hasta la despedida */}
      {timeUntilGoodbye.length > 0 && (
        <motion.div 
          className="counter-container bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl p-6 shadow-xl"
          initial="hidden"
          animate="visible"
          variants={counterVariants}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-primary-800 mb-4 text-center">
            Tiempo Hasta Decir "Hasta Pronto" 👋
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {timeUntilGoodbye.map((unit, index) => (
              <motion.div
                key={unit.label}
                className="flex flex-col items-center bg-white/80 backdrop-blur-sm rounded-lg p-4 min-w-[120px]"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.span 
                  className="text-3xl md:text-4xl font-bold text-primary-600"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {unit.value}
                </motion.span>
                <span className="text-sm md:text-base text-primary-500">
                  {unit.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
} 
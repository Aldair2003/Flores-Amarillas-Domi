'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TimeUnit {
  value: number;
  label: string;
}

export default function ReunionCounter() {
  const [timeUntilReunion, setTimeUntilReunion] = useState<TimeUnit[]>([]);
  const [message, setMessage] = useState<string>('');
  const reunionDate = new Date('2025-04-14'); // Fecha tentativa del reencuentro

  useEffect(() => {
    const updateCounter = () => {
      const now = new Date();
      const diffReunion = reunionDate.getTime() - now.getTime();

      if (diffReunion > 0) {
        const daysReunion = Math.floor(diffReunion / (1000 * 60 * 60 * 24));
        const hoursReunion = Math.floor((diffReunion % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutesReunion = Math.floor((diffReunion % (1000 * 60 * 60)) / (1000 * 60));
        const secondsReunion = Math.floor((diffReunion % (1000 * 60)) / 1000);

        setTimeUntilReunion([
          { value: daysReunion, label: 'días' },
          { value: hoursReunion, label: 'horas' },
          { value: minutesReunion, label: 'minutos' },
          { value: secondsReunion, label: 'segundos' }
        ]);

        // Mensajes personalizados según el tiempo restante
        if (daysReunion > 30) {
          setMessage('Cada día que pasa es un día menos para volver a verte ❤️');
        } else if (daysReunion > 7) {
          setMessage('¡Ya falta menos de un mes! Pronto estaremos juntos 💕');
        } else if (daysReunion > 1) {
          setMessage('¡Ya casi! La espera valdrá la pena 🥰');
        } else {
          setMessage('¡Mañana nos vemos! Mi corazón late más fuerte 💓');
        }
      } else {
        setMessage('¡Por fin juntos otra vez! 💑');
      }
    };

    updateCounter();
    const interval = setInterval(updateCounter, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-pink-50 via-yellow-50 to-purple-50">
      <motion.div 
        className="max-w-4xl w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-center mb-8">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-primary-800 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Cuenta Regresiva Para Nuestro Reencuentro 💝
          </motion.h2>
          <motion.p 
            className="text-xl text-primary-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {message}
          </motion.p>
        </div>

        <motion.div 
          className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex flex-wrap justify-center gap-6">
            {timeUntilReunion.map((unit, index) => (
              <motion.div
                key={unit.label}
                className="flex flex-col items-center bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-6 min-w-[140px] shadow-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 + 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.span 
                  className="text-4xl md:text-5xl font-bold text-primary-600 mb-2"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  {unit.value}
                </motion.span>
                <span className="text-lg text-primary-500 font-medium">
                  {unit.label}
                </span>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="mt-8 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <p className="text-primary-600 text-lg italic">
              "La distancia es temporal, pero nuestro amor es eterno"
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
} 
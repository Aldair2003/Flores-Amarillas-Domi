'use client';

import { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

export default function AnimatedBackground() {
  const prefersReducedMotion = useReducedMotion();
  const [flowerPetals, setFlowerPetals] = useState<Array<{ id: number; left: string; delay: number }>>([]);
  
  const createPetals = useCallback(() => {
    // Reducir la cantidad de pétalos en dispositivos móviles
    const petalCount = window.innerWidth < 768 ? 8 : 12;
    
    return Array.from({ length: petalCount }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: Math.random() * 3 // Reducido de 5 a 3 segundos
    }));
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) {
      // Si el usuario prefiere menos movimiento, mostrar menos pétalos estáticos
      setFlowerPetals(createPetals().slice(0, 4));
      return;
    }
    
    setFlowerPetals(createPetals());

    // Actualizar pétalos periódicamente para mantener la animación fresca
    const interval = setInterval(() => {
      setFlowerPetals(createPetals());
    }, 30000); // Cada 30 segundos

    return () => clearInterval(interval);
  }, [prefersReducedMotion, createPetals]);

  return (
    <>
      {/* Fondo con gradiente optimizado */}
      <div className="fixed inset-0 bg-gradient-to-b from-flower-yellow-light via-flower-pink-light to-flower-yellow-light" />
      
      {/* Pétalos de flores cayendo con will-change */}
      <AnimatePresence>
        {flowerPetals.map((petal) => (
          <motion.div
            key={petal.id}
            className="flower-petal will-change-transform"
            initial={{ top: "-10%", left: petal.left, opacity: 0 }}
            animate={{ 
              top: "110%",
              opacity: [0, 1, 1, 0],
              rotate: prefersReducedMotion ? 0 : 360
            }}
            transition={{ 
              duration: prefersReducedMotion ? 0 : 8, // Reducido de 10 a 8 segundos
              delay: petal.delay,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              position: 'fixed',
              zIndex: 1,
              pointerEvents: 'none',
            }}
          />
        ))}
      </AnimatePresence>

      {/* Decoraciones de flores fijas optimizadas */}
      {!prefersReducedMotion && (
        <>
          <div className="fixed top-10 left-10 flower-decoration will-change-transform" style={{ animationDelay: "0s" }} />
          <div className="fixed top-20 right-20 flower-decoration will-change-transform" style={{ animationDelay: "2s" }} />
          <div className="fixed bottom-10 left-20 flower-decoration will-change-transform" style={{ animationDelay: "4s" }} />
          <div className="fixed bottom-20 right-10 flower-decoration will-change-transform" style={{ animationDelay: "6s" }} />
        </>
      )}
    </>
  );
} 
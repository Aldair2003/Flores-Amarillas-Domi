'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface ReasonCardProps {
  number: number;
  reason: string;
  category: string;
  emoji: string;
}

export default function ReasonCard({ number, reason, category, emoji }: ReasonCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="relative w-full h-[200px] cursor-pointer perspective-1000"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="w-full h-full relative transform-style-3d transition-transform duration-500"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
      >
        {/* Frente de la tarjeta */}
        <div className="absolute w-full h-full backface-hidden bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl p-4 flex flex-col items-center justify-center shadow-lg">
          <span className="text-4xl mb-2">{emoji}</span>
          <span className="text-2xl font-bold text-primary-800">#{number}</span>
          <span className="text-sm text-primary-600">{category}</span>
        </div>

        {/* Reverso de la tarjeta */}
        <div className="absolute w-full h-full backface-hidden bg-white rounded-xl p-4 flex items-center justify-center text-center transform rotate-y-180 shadow-lg">
          <p className="text-gray-800 font-medium">{reason}</p>
        </div>
      </motion.div>
    </div>
  );
} 
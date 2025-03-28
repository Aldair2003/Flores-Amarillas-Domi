'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

const letterContent = {
  title: "Mi Amor ❤️",
  content: `Feliz mes, mi amor. Hoy celebramos un mes más juntos, y sé que este día es diferente… especialmente delicado para ti. 
Pero como las estrellas que guían a los viajeros en Star Wars, tú has sido mi luz desde que llegaste a mi vida, iluminando incluso los rincones más oscuros de mi corazón.

Quiero decirte que te amo, sin medida ni condiciones. Desde ese primer momento en que te vi, cuando fui a verte, sentí que algo en mí cambió... 
Mi mundo se transformó, como el castillo de Howl al encontrar a Sophie. 
Cada instante contigo se ha convertido en un tesoro más valioso que el One Piece: 
las risas compartidas, nuestras comidas, las películas, las series, todo. 
Como Yor y Loid, descubriendo el amor entre aventuras y secretos, 
contigo cada momento es único, es mágico, es nuestro.

Las lágrimas y el frío te hicieron construir muros, 
como la torre donde Rapunzel aguardaba en silencio, 
pero nuestro amor… 
Nuestro amor ha sido como aquellas luces flotantes en el cielo: 
brillante, cálido, esperanzador. 
Ha derretido cada muro, cada miedo escondido. 
Y hoy, sin dudarlo, te ofrezco un amor real, 
de un corazón sincero que late más fuerte solo por ti.

Tu alma era viajera y solitaria, como Chihiro antes de hallar su camino, 
y aunque parezca un atrevimiento, como cuando Coldplay susurra "Vi chispas" en medio de la oscuridad, 
nuestros caminos se cruzaron, y de pronto… todo tuvo sentido. 
"Mi corazón es tuyo, es a ti a quien me aferro", susurra mi alma, 
como Totoro llenando de magia la vida de las niñas, 
tú llegaste y llenaste mi mundo de color y alegría. 
Y aunque sé que no soy perfecto, te prometo: siempre cuidaré de ti.

Lograste entender partes de mí que ni yo conocía, 
como Naruto entendiendo el verdadero significado de nunca rendirse. 
Preferiste escuchar mi silencio antes que forzar una sonrisa, 
y gracias a ti, he aprendido a ser mejor. 
Solo puedo darte las gracias… 
por cada risa, cada abrazo, cada instante contigo.

No me imagino un solo lugar sin ti, 
porque estás conmigo siempre… 
en mis mejores días, y también en los peores. 
Con un abrazo tuyo, todo mejora. 
Eres como el mar: profundo, paciente, que escucha sin juzgar. 
Tú entiendes mi corazón, incluso cuando yo no sé cómo expresarlo.

Te escribo esto con los ojos llenos de emoción… 
Perdón si suena cursi, pero es lo que verdaderamente siento. 
Lo que tenemos tú y yo no se encuentra en cualquier parte, 
es una conexión única, especial… 
como esa magia que une todos los mundos que amamos. 
Y te juro que no la imagino con nadie más. 
No me imagino mi vida sin ti.

Te amo con todo lo que soy, mi princesa Leia, 
mi compañera de aventuras, mi razón de sonreír. 
Como las estrellas que guían a través de la galaxia, 
tú iluminas cada paso que doy. 
Gracias por ser tú… gracias por amarme.`,
  signature: "Con todo mi amor, tu chuquinuni ❤️",
  specialMessage: "Como en las películas de Studio Ghibli, nuestro amor es mágico, lleno de aventuras y momentos inolvidables. Cada día contigo es como vivir en un hermoso anime, donde los sueños se hacen realidad y el amor verdadero existe. Tú eres mi Chihiro, mi Sophie, mi razón para creer en la magia del amor. 🌸✨"
};

export default function FutureLetterSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [showSparkles, setShowSparkles] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleOpenLetter = () => {
    setIsOpen(true);
    setShowSparkles(true);
    setTimeout(() => setShowSparkles(false), 2000);
  };

  return (
    <div className="relative min-h-[500px] flex items-center justify-center p-4 md:p-8">
      {/* Fondo con gradiente */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-pink-100 to-yellow-100 opacity-50" />
      
      {/* Contenedor principal */}
      <motion.div 
        className="relative bg-white/90 backdrop-blur-md rounded-3xl p-6 md:p-8 max-w-4xl w-full shadow-xl border border-pink-200"
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

        <AnimatePresence>
          {!isOpen ? (
            <motion.div 
              className="text-center mt-16"
              exit={{ opacity: 0, scale: 0.8 }}
            >
              <motion.div 
                className="w-44 h-36 mx-auto bg-gradient-to-br from-pink-50 to-yellow-50 rounded-xl shadow-xl relative overflow-hidden cursor-pointer border-2 border-pink-200"
                whileHover={{ scale: 1.05, rotate: 2 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleOpenLetter}
              >
                {/* Sello de cera */}
                <div className="absolute -right-4 -top-4 w-20 h-20 bg-gradient-to-br from-red-400 to-pink-500 rounded-full flex items-center justify-center transform rotate-12 shadow-lg">
                  <span className="text-white text-2xl">💝</span>
                </div>
                
                {/* Líneas decorativas */}
                <div className="absolute inset-4 border-2 border-dashed border-pink-300 rounded-lg">
                  <motion.div
                    className="absolute inset-0"
                    animate={{
                      background: [
                        'linear-gradient(45deg, rgba(255,192,203,0.2) 0%, transparent 50%)',
                        'linear-gradient(45deg, rgba(255,192,203,0.3) 50%, transparent 100%)',
                        'linear-gradient(45deg, rgba(255,192,203,0.2) 100%, transparent 100%)'
                      ]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                </div>

                {/* Decoración de corazones */}
                <motion.div
                  className="absolute bottom-2 left-2 text-pink-400 text-lg"
                  animate={{ scale: [1, 1.2, 1], rotate: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  ❤️
                </motion.div>
              </motion.div>

              <p className="text-lg md:text-xl text-primary-600 mt-6 mb-4 font-medium">
                Pascal está cuidando un mensaje muy especial para ti... 
              </p>
              
              <p className="text-primary-500 italic">
                Click para abrir la carta 💌
              </p>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-16 relative"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-pink-50/50 to-yellow-50/50 rounded-3xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              />

              <h2 className="text-4xl md:text-5xl font-bold text-primary-800 mb-8 text-center relative">
                {letterContent.title}
                <motion.div
                  className="absolute -top-4 -right-4 text-3xl"
                  animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  ✨
                </motion.div>
              </h2>
              
              <div className="prose prose-lg max-w-none text-primary-700 whitespace-pre-line px-4 md:px-8">
                {letterContent.content.split('\n\n').map((paragraph, index) => (
                  <motion.p
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="mb-6 relative"
                  >
                    {paragraph}
                    {index % 3 === 0 && (
                      <motion.span
                        className="absolute -left-6 text-pink-400 opacity-50"
                        animate={{ scale: [1, 1.2, 1], rotate: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                      >
                        ❤️
                      </motion.span>
                    )}
                  </motion.p>
                ))}
              </div>

              <motion.div
                className="text-right mt-12 relative"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                <motion.div 
                  className="inline-flex flex-col sm:flex-row items-center justify-end gap-2 cursor-pointer group relative"
                  onClick={() => setShowModal(true)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.span
                    className="text-sm text-primary-600 flex items-center gap-1 mb-2 sm:mb-0"
                    animate={{ 
                      scale: [1, 1.05, 1],
                      opacity: [0.7, 1, 0.7]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    👆 Click aquí para ver algo especial ✨
                  </motion.span>
                  <motion.p className="text-xl text-primary-800 font-bold italic group-hover:text-primary-600 transition-colors">
                    {letterContent.signature}
                  </motion.p>
                </motion.div>

                {/* Modal de imagen especial */}
                <AnimatePresence>
                  {showModal && (
                    <>
                      {/* Overlay mejorado */}
                      <motion.div
                        className="fixed inset-0 bg-black/60 z-[9998] backdrop-blur-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setShowModal(false)}
                      />
                      
                      {/* Modal centrado desde abajo */}
                      <motion.div
                        className="fixed bottom-[15vh] left-1/2 -translate-x-1/2 z-[9999] w-[95vw] md:w-[90vw] max-w-5xl bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border-2 border-pink-200 p-4 md:p-6"
                        initial={{ y: "100%", opacity: 0, x: "-50%" }}
                        animate={{ y: "0%", opacity: 1, x: "-50%" }}
                        exit={{ y: "100%", opacity: 0, x: "-50%" }}
                        transition={{ type: "spring", damping: 20 }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        {/* Botón de cerrar */}
                        <motion.button
                          className="absolute -top-3 -right-3 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-primary-600 hover:text-primary-800 border-2 border-pink-200 z-[10000]"
                          whileHover={{ scale: 1.1, rotate: 90 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => setShowModal(false)}
                        >
                          ✕
                        </motion.button>

                        {/* Contenedor principal del contenido */}
                        <div className="flex flex-col items-center justify-center gap-4">
                          {/* Contenedor de la imagen optimizado */}
                          <div className="relative w-full h-[45vh] md:h-[55vh] lg:h-[65vh]">
                            <Image
                              src="/iconweb.webp"
                              alt="Nosotros estilo Ghibli"
                              fill
                              className="object-contain"
                              sizes="(max-width: 768px) 95vw, (max-width: 1200px) 90vw, 85vw"
                              priority
                            />
                          </div>

                          {/* Mensaje especial mejorado */}
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="w-full bg-white/80 backdrop-blur-sm rounded-xl shadow-inner p-3 md:p-4"
                          >
                            <p className="text-sm md:text-base lg:text-lg text-primary-700 italic leading-relaxed text-center">
                              {letterContent.specialMessage}
                            </p>
                          </motion.div>
                        </div>

                        {/* Decoraciones */}
                        <motion.div
                          className="absolute -top-4 -left-4 text-3xl md:text-4xl pointer-events-none"
                          animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
                          transition={{ duration: 3, repeat: Infinity }}
                        >
                          🌸
                        </motion.div>
                        <motion.div
                          className="absolute -bottom-4 -right-4 text-3xl md:text-4xl pointer-events-none"
                          animate={{ rotate: [0, -10, 10, 0], scale: [1, 1.1, 1] }}
                          transition={{ duration: 3, repeat: Infinity }}
                        >
                          ✨
                        </motion.div>
                      </motion.div>
                    </>
                  )}
                </AnimatePresence>

                <motion.div
                  className="absolute -bottom-4 right-0 text-2xl"
                  animate={{ y: [0, -5, 0], rotate: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  💝
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Efectos de chispas */}
        <AnimatePresence>
          {showSparkles && (
            <>
              {[...Array(30)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-yellow-300 rounded-full"
                  initial={{
                    opacity: 1,
                    x: "50%",
                    y: "50%"
                  }}
                  animate={{
                    opacity: 0,
                    x: `${50 + (Math.random() * 120 - 60)}%`,
                    y: `${50 + (Math.random() * 120 - 60)}%`,
                    scale: 0
                  }}
                  transition={{
                    duration: 1.5,
                    delay: i * 0.03
                  }}
                  exit={{ opacity: 0 }}
                />
              ))}
            </>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
} 
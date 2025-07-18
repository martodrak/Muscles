import React, { useState, useEffect } from "react"; // Import React a hooků useState a useEffect
import { useData } from "../parts/Memory"; // Importuje vlastní hook pro získání dat
import { motion, AnimatePresence } from "framer-motion"; // Import motion pro animace

export default function Carousel() {
  const [index, setIndex] = useState(0); // Definuje stav pro aktuální index obrázku
  const [isTransitioning, setIsTransitioning] = useState(false); // Stav pro přechod
  const { musclesData, screenSize } = useData(); // Získává data o svalových partiích a velikosti obrazovky

  useEffect(() => {
    const interval = setInterval(() => {
      // Nastavuje interval pro změnu obrázku
      setIsTransitioning(true); // Začátek přechodu
      setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * musclesData.length); // Generuje náhodný index
        setIndex(randomIndex > 1 ? randomIndex - 1 : randomIndex); // Upraví index tak, aby byl vždy 0 nebo větší než 1
        setIsTransitioning(false); // Konec přechodu
      }, 500); // Půl sekundy na přechod
    }, 4500); // Čas proměny obr

    return () => clearInterval(interval); // Vyčistí interval, když komponenta zmizí
  }, [musclesData.length]); // Přidán dependency pro musclesData.length

  return (
    <div className="flex items-center gap-16 justify-center mt-6">
      <div className="flex flex-col items-center justify-center">
        <div className="relative w-[155px] h-[260px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              className="absolute inset-0 w-full h-full"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <img src={musclesData[index].image} className="h-[250px] " />
            </motion.div>
          </AnimatePresence>
        </div>
        <motion.p
          key={`name-${index}`}
          className="text-black-300 mt-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          {musclesData[index].name}
        </motion.p>
      </div>

      {screenSize.width > 1024 && ( // Pokud je šířka obrazovky větší než 1024px, zobrazí se 2 obrázky
        <div className="flex flex-col items-center justify-center">
          <div className="relative w-[155px] h-[260px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={index + 1}
                className="absolute inset-0 w-full h-full"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <img
                  src={musclesData[index + 1].image}
                  className="h-[250px] "
                />
              </motion.div>
            </AnimatePresence>
          </div>
          <motion.p
            key={`name-${index + 1}`}
            className="text-black-300 mt-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            {musclesData[index + 1].name}
          </motion.p>
        </div>
      )}
    </div>
  );
}

import React, { useState, useEffect } from "react"; // Import React a hooků useState a useEffect
import { useData } from "../parts/Memory"; // Importuje vlastní hook pro získání dat

export default function Carousel() {
  const [index, setIndex] = useState(0);   // Definuje stav pro aktuální index obrázku
  const { musclesData, screenSize } = useData(); // Získává data o svalových partiích a velikosti obrazovky
  useEffect(() => {                             
    const interval = setInterval(() => {        // Nastavuje interval pro změnu obrázku
      const randomIndex = Math.floor(Math.random() * musclesData.length);  // Generuje náhodný index
      setIndex(randomIndex > 1 ? randomIndex - 1 : randomIndex);            // Upraví index tak, aby byl vždy 0 nebo větší než 1
    }, 4500); // Čas proměny obr

    return () => clearInterval(interval); // Vyčistí interval, když komponenta zmizí
  }, []); // Efekt se spustí pouze jednou při načtení komponenty
  return (
    <div className="flex items-center gap-16 justify-center mt-6">   
      <div className="flex flex-col items-center justify-center">
        <img className="w-[155px] h-[260px]" src={musclesData[index].image} />
        <p className="text-black-300">{musclesData[index].name}</p>
      </div>

      {screenSize.width > 1024 && (      // Pokud je šířka obrazovky větší než 1024px, zobrazí se 2 obrázky
        <div className="flex flex-col items-center justify-center">
          <img
            className="w-[155px] h-[260px]"
            src={musclesData[index + 1].image}
          />
          <p className="text-black-300">{musclesData[index + 1].name}</p>   
        </div>
      )} 
    </div>
  );
}

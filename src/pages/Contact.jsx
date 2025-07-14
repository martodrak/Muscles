import React from "react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white">
      {/* Hero Section */}
      <div className="pt-20 pb-16 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl lg:text-7xl font-bold text-green-700 mb-8 font-sans">
            Martin Drinka
          </h1>
          <p className="text-xl lg:text-2xl text-green-800 font-semibold mb-12 font-sans">
            Developer & Fitness Enthusiast
          </p>

          {/* Profile Image */}
          <div className="relative inline-block mb-16">
            <div className="w-48 h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden shadow-2xl border-4 border-green-200">
              <img
                className="w-full h-full object-cover"
                src="images/face.jpeg"
                alt="Martin Drinka"
              />
            </div>
            <a
              href="https://www.instagram.com/martin.drink_/"
              rel="noopener noreferrer"
              target="_blank"
              className="absolute -top-2 -right-2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform duration-200 border-2 border-green-200"
            >
              <img
                className="w-8 h-8 rounded-lg"
                src="images/Instagram.webp"
                alt="Instagram"
              />
            </a>
          </div>
        </div>
      </div>

      {/* About Me Section */}
      <div className="py-16 px-6 lg:px-8 bg-gradient-to-br from-white to-green-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-green-700 mb-6 font-sans">
              O mně
            </h2>
            <div className="w-24 h-1 bg-green-200 mx-auto rounded"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg lg:text-xl text-green-900 leading-relaxed font-sans">
                Jmenuji se Martin Drinka a jsem nadšenec do programování,
                fitness a vzdělávání. Tento projekt vznikl z mé touhy propojit
                svět technologií a zdravého životního stylu.
              </p>
              <p className="text-lg lg:text-xl text-green-900 leading-relaxed font-sans">
                Věřím, že každý může najít cestu ke zdravějšímu tělu, když má
                správné informace a motivaci. Proto jsem vytvořil tuto aplikaci
                – abych pomohl ostatním lépe pochopit své tělo, naučit se
                správně cvičit a dosáhnout svých cílů.
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl p-8 lg:p-12 shadow-xl border-2 border-green-200">
              <h3 className="text-2xl font-bold text-green-700 mb-6 font-sans">
                Proč tento projekt?
              </h3>
              <p className="text-green-900 leading-relaxed mb-4 font-sans">
                Chtěl jsem vytvořit něco, co propojí mé technické dovednosti s
                vášní pro fitness. Tato aplikace pomáhá lidem lépe porozumět
                svému tělu a učit se interaktivní formou.
              </p>
              <p className="text-green-900 leading-relaxed font-sans">
                Každá funkce je navržena s ohledem na uživatele – aby byla
                anatomie jednoduchá a zábavná k objevování.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Gym Section */}
      <div className="py-16 px-6 lg:px-8 bg-gradient-to-br from-green-50 to-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-green-700 mb-6 font-sans">
              Gym & Fitness
            </h2>
            <div className="w-24 h-1 bg-green-200 mx-auto rounded"></div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-white to-green-100 rounded-2xl p-8 shadow-lg border-2 border-green-100">
              <div className="w-12 h-12 bg-green-200 rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl">💪</span>
              </div>
              <h3 className="text-xl font-bold text-green-700 mb-4 font-sans">
                Silový trénink
              </h3>
              <p className="text-green-900 leading-relaxed font-sans">
                Zaměřeno na budování funkční síly a rozvoj svalů pomocí principů
                progresivního zatížení.
              </p>
            </div>

            <div className="bg-gradient-to-br from-white to-emerald-100 rounded-2xl p-8 shadow-lg border-2 border-emerald-100">
              <div className="w-12 h-12 bg-emerald-200 rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl">🏃</span>
              </div>
              <h3 className="text-xl font-bold text-emerald-700 mb-4 font-sans">
                Kardio & Kondice
              </h3>
              <p className="text-emerald-900 leading-relaxed font-sans">
                Udržování kardiovaskulárního zdraví a vytrvalosti pomocí různých
                tréninkových metod a intervalů.
              </p>
            </div>

            <div className="bg-gradient-to-br from-white to-teal-100 rounded-2xl p-8 shadow-lg border-2 border-teal-100">
              <div className="w-12 h-12 bg-teal-200 rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl">🧠</span>
              </div>
              <h3 className="text-xl font-bold text-teal-700 mb-4 font-sans">
                Mysl & Tělo
              </h3>
              <p className="text-teal-900 leading-relaxed font-sans">
                Pochopení anatomie a pohybových vzorců pro optimalizaci výkonu a
                prevenci zranění.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Footer */}
      <div className="py-12 px-6 lg:px-8 bg-gradient-to-br from-white to-green-50">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-green-700 mb-4 font-sans">
            Spojme se a vytvořme něco skvělého společně
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href="https://www.instagram.com/martin.drink_/"
              rel="noopener noreferrer"
              target="_blank"
              className="text-green-700 hover:text-green-900 transition-colors duration-200 font-semibold font-sans"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>

      {/* Floating Logo */}
      <img
        className="fixed bottom-8 left-8 w-12 h-12 rounded-xl opacity-80 hover:opacity-100 transition-opacity duration-200"
        src="images/mdlogo.webp"
        alt="MD Logo"
      />
    </div>
  );
}

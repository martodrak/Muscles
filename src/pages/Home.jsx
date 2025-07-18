import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";
import Carousel from "../components/Carousel";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center lg:min-h-[calc(100vh-264px)]">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center justify-center mt-16 mb-20"
      >
        <p className="lg:text-5xl text-3xl font-semibold text-center">
          První den V gymu?
        </p>
        <p className="ml-16 lg:ml-64 text-2xl lg:text-4xl lg:mt-6 mt-4">
          tak to jsi správně!
        </p>
      </motion.div>

      <motion.img
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="lg:w-[25%] w-[50%] mb-24"
        src="images/logoFinal.png"
      />

      {/* Target Audience Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="max-w-6xl mx-auto mb-32 px-6 lg:px-8"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Pro koho je aplikace určena?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Naše platforma je navržena pro různé typy uživatelů s různými
            potřebami
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            className="bg-gradient-to-br from-white to-green-50 rounded-3xl p-8 border-2 border-green-200 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
          >
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-100 rounded-full -translate-y-16 translate-x-16 opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>

            <div className="relative z-10">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <span className="text-4xl">🎯</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-700 transition-colors duration-300">
                Fitness Začátečníci
              </h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                Perfektní pro ty, kteří začínají svou fitness cestu. Nauč se
                správnou formu a pochop, které svaly procvičuješ.
              </p>
              <div className="mt-6 pt-4 border-t border-green-200">
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Základní anatomie
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Správná technika
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Bezpečné cvičení
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            className="bg-gradient-to-br from-white to-emerald-50 rounded-3xl p-8 border-2 border-emerald-200 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
          >
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-100 rounded-full -translate-y-16 translate-x-16 opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>

            <div className="relative z-10">
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <span className="text-4xl">💪</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-emerald-700 transition-colors duration-300">
                Gym Nadšenci
              </h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                Prohlub své znalosti svalové anatomie a optimalizuj svůj trénink
                s cílenými cviky.
              </p>
              <div className="mt-6 pt-4 border-t border-emerald-200">
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></span>
                    Pokročilá anatomie
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></span>
                    Optimalizace tréninku
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></span>
                    Specializované cviky
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            className="bg-gradient-to-br from-white to-teal-50 rounded-3xl p-8 border-2 border-teal-200 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
          >
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-teal-100 rounded-full -translate-y-16 translate-x-16 opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>

            <div className="relative z-10">
              <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <span className="text-4xl">🧠</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-teal-700 transition-colors duration-300">
                Studenti Anatomie
              </h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                Interaktivní učební pomůcka pro studenty studující lidskou
                anatomii a fyziologii.
              </p>
              <div className="mt-6 pt-4 border-t border-teal-200">
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-teal-500 rounded-full mr-3"></span>
                    Detailní anatomie
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-teal-500 rounded-full mr-3"></span>
                    Interaktivní učení
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-teal-500 rounded-full mr-3"></span>
                    Vzdělávací obsah
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* About Me Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="w-full max-w-6xl mx-auto mb-32 lg:px-32 px-8"
      >
        <div className="grid lg:grid-cols-2 gap-32 items-center">
          {/* About Me Text Content */}
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              O mně
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Jmenuji se Martin Drinka a jsem nadšenec do programování, fitness
              a vzdělávání. Tento projekt vznikl z mé touhy propojit svět
              technologií a zdravého životního stylu.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Věřím, že každý může najít cestu ke zdravějšímu tělu, když má
              správné informace a motivaci. Proto jsem vytvořil tuto aplikaci –
              abych pomohl ostatním lépe pochopit své tělo, naučit se správně
              cvičit a dosáhnout svých cílů.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Pokud máš otázky, nebo se chceš jen podělit o svůj příběh, neváhej
              mě kontaktovat. Společně můžeme posouvat hranice toho, co je
              možné!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <button
                onClick={() => navigate("/muscles")}
                className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors duration-300"
              >
                Prozkoumat svaly
              </button>
              <button
                onClick={() => navigate("/contact")}
                className="px-6 py-3 border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white font-semibold rounded-lg transition-all duration-300"
              >
                Kontaktovat mě
              </button>
            </div>
          </div>

          {/* Picture */}
          <div className="relative px-8">
            <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl p-8 shadow-xl">
              <img
                src="images/panak_triceps.png"
                alt="Martin Drinka"
                className="w-full h-full rounded-xl"
              />
            </div>
            {/* Floating elements for visual appeal */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-green-500 rounded-full opacity-80"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-emerald-400 rounded-full opacity-60"></div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="w-full max-w-6xl mx-auto px-6 lg:px-8 mb-16"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Všechny cviky co budeš potřebovat
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Objev detailní svalové skupiny s interaktivními modely a komplexními
            průvodci cviky
          </p>
        </div>

        <motion.div
          whileHover={{ y: -2 }}
          className="bg-gradient-to-br from-white to-green-50 rounded-3xl p-8 lg:mb-32 lg:p-12 border-2 border-green-200 shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
        >
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-green-100 rounded-full -translate-y-20 translate-x-20 opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-emerald-100 rounded-full translate-y-16 -translate-x-16 opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>

          <div className="relative z-10">
            {/* Carousel Container */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-green-100 shadow-lg">
              <Carousel />
            </div>

            {/* Description */}
            <div className="text-center mb-8">
              <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
                Perfektní pro pochopení tvého těla a optimalizaci tréninků.
                Každý sval má svůj příběh a každý cvik má svůj účel.
              </p>
            </div>

            {/* Action Button */}
            <div className="text-center">
              <button
                className="
                  bg-gradient-to-r from-green-600 to-emerald-600 
                  hover:from-green-700 hover:to-emerald-700
                  text-white px-6 py-3 rounded-2xl text-lg font-semibold
                  transition-all duration-300
                  shadow-lg hover:shadow-xl
                  hover:shadow-green-500/25
                  focus:outline-none
                  transform
                  hover:duration-200
                  hover:scale-[103%] active:scale-95
                  hover:border-2 hover:border-white border-2
                "
                onClick={() => navigate("/muscles")}
              >
                Jdu do toho
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

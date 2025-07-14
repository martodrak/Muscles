import React from "react";
import Card from "../components/Card";
import { useData } from "../parts/Memory";

export default function Muscles() {
  const { musclesData } = useData();
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white flex flex-col items-center justify-center py-16 px-4">
      <div className="max-w-4xl w-full text-center mb-16">
        <h1 className="text-5xl lg:text-6xl font-bold text-green-700 mb-6 font-sans">
          Vyber si sval
        </h1>
        <div className="w-24 h-1 bg-green-200 mx-auto rounded mb-4"></div>
        <p className="text-lg text-green-900 font-sans">
          Prozkoumej jednotlivé svalové partie a zjisti o nich vše potřebné.
        </p>
      </div>
      <div className="w-full max-w-6xl bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border-2 border-green-100 flex flex-wrap gap-8 justify-center items-center">
        {musclesData.map((muscle, i) => (
          <div key={i} className="flex items-center justify-center">
            <Card data={muscle} />
          </div>
        ))}
      </div>
    </div>
  );
}

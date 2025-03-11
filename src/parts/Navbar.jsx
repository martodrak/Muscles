import React, { useEffect, useState } from "react";
import { useData } from "./Memory";

export default function Navbar() {
  const { windowSize } = useData();
  const [actualPage, setActualPage] = useState("/");
  useEffect(() => {
    setActualPage(window.location.pathname);
  });
  return (
    <div>
      {windowSize.width > 1024 && (
        <div className="flex items-center text-white justify-between px-8 py-4 bg-green-500">
          <div className="w-16">
            <a href="/">
              <img className="w-16 rounded-xl" src="images/LOGO.png" />
            </a>
          </div>

          <div className="flex flex-col items-center justify-center">
            <p className="text-4xl">Svalová zóna</p>
            <div className="flex mt-4 text-lg font-bold text-center items-center justify-center space-x-16">
              <a className="w-16" href="/">
                <p className={`w-16 ${actualPage === "/" ? "underline" : ""}`}>
                  Domů
                </p>
              </a>
              <a className="w-16" href="/muscles">
                <p
                  className={`w-16 ${
                    actualPage === "/muscles" ? "underline" : ""
                  }`}
                >
                  Svaly
                </p>
              </a>
              <a className="w-16" href="/contact">
                <p
                  className={`w-16 ${
                    actualPage === "/contact" ? "underline" : ""
                  }`}
                >
                  O mně
                </p>
              </a>
            </div>
          </div>
          <div className="w-16"></div>
        </div>
      )}
    </div>
  );
}

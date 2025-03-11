import React, { useState, useEffect, createContext, useContext } from "react";

// Define a default context value

// Create Context with a default value
const DataContext = createContext();

// Custom hook to use the context
export const useData = () => {
  return useContext(DataContext);
};

// Memory Provider Component
export const Memory = ({ children }) => {
  const musclesData = [
    {
      name: "Bicepsový sval",
      latin: "Biceps Brachii",
      description:
        "Má dvě hlavy: dlouhou a krátkou. Je zde také brachialis, malý sval mezi hlavami. Aktivuje se při tahání a flexi paže. Cvičení: bicepsové zdvihy s činkami, shyby s úzkým úchopem. Pohyb: zvedání předloktí směrem k rameni.",
      image: "images/panak_bicepsNP.png",
    },
    {
      name: "Břišní sval",
      latin: "Abdominals",
      description:
        "Skládá se z rectus abdominis, obliques (šikmé svaly) a transversus abdominis. Aktivuje se při flexi trupu a stabilizaci pánve. Cvičení: crunches, plank, ruské rotace. Pohyb: ohyb trupu nebo rotace. Pohybové směry: flexe trupu, rotace a laterální flexe.",
      image: "images/panak_bricho.png",
    },
    {
      name: "Hýžďové svaly",
      latin: "Gluteus Maximus, Medius, Minimus",
      description:
        "Má tři části: Gluteus maximus – největší a nejmocnější část, Gluteus medius a minimus – stabilizace pánve. Aktivuje se při zvedání pánve a extenzi kyčlí. Cvičení: dřepy, výpady, hip thrusty. Pohyb: zvedání pánve nebo nohy směrem vzhůru.",
      image: "images/zadek.jpg",
    },
    {
      name: "Lýtkový sval",
      latin: "Gastrocnemius",
      description:
        "Má dvě hlavy: vnitřní a vnější. Aktivuje se při zvedání paty. Cvičení: výpony na lýtkách, sedící výpony. Pohyb: zvedání paty směrem vzhůru (flexe v kotníku). Pohybové směry: plantární flexe v kotníku.",
      image: "images/lytka.jpg",
    },
    {
      name: "Sval předloktí",
      latin: "Forearm Muscles",
      description:
        "Rozdělen na flexory a extenzory. Aktivuje se při stiskových a rotačních pohybech. Cvičení: zdvihy činek, prsty na kladce. Pohyb: flexe a extenze zápěstí a prstů. Pohybové směry: flexe a extenze v zápěstí.",
      image: "images/panak_predlokti.png",
    },
    {
      name: "Prsní sval",
      latin: "Pectoralis Major",
      description:
        "Má dvě hlavní části: klíčkovou a sternální část. Prsní svaly se aktivují při tlačících pohybech. Cvičení: bench press, tlak s jednoručkami. Pohyb: stlačení paží směrem k sobě. Pohybové směry: horizontální (při bench pressu) a vertikální (při tlaku nad hlavou).",
      image: "images/animace1panak.png",
    },
    {
      name: "Ramenní sval",
      latin: "Deltoideus",
      description:
        "Má tři části: Přední – zvedání paže dopředu, Střední – zvedání paže do stran, Zadní – zvedání paže dozadu. Aktivuje se při tlakových a zvedacích pohybech. Cvičení: shoulder press, boční a přední zdvihy. Pohybové směry: přední, boční a zadní pohyb.",
      image: "images/panak_ramena.png",
    },
    {
      name: "Stehenní přední sval",
      latin: "Quadriceps",
      description:
        "Má čtyři části: Rectus femoris, vastus medialis, vastus lateralis, vastus intermedius. Aktivuje se při prodlužování kolene. Cvičení: dřepy, leg press, výpady. Pohyb: extenze kolene.",
      image: "images/panak_stehna.png",
    },
    {
      name: "Tricepsový sval",
      latin: "Triceps Brachii",
      description:
        "Má tři části: Dlouhá hlava, boční hlava a střední hlava. Aktivuje se při tlacích nebo extendování paží. Cvičení: tricepsové stahování na kladce, kickbacky, bench press s úzkým úchopem. Pohyb: protažení paže a stlačení lokte směrem dolů.",
      image: "images/tricak.jpg",
    },
    {
      name: "Zádový sval",
      latin: "Latissimus Dorsi",
      description:
        "Skládá se z mnoha svalů, například trapezy, latisimy atp. Aktivuje se při tahání. Cvičení: shyby, přítahy v předklonu, stahování kladky. Pohyb: zvedání paží a přitahování rukou směrem k tělu. Pohybové směry: vertikální (při shybování) a horizontální (při přítazích).",
      image: "images/zada.jpg",
    },
    {
      name: " Stehení zadní sval",
      latin: "Deltoideus",
      description:
        "Má tři části: Přední – zvedání paže dopředu, Střední – zvedání paže do stran, Zadní – zvedání paže dozadu. Aktivuje se při tlakových a zvedacích pohybech. Cvičení: shoulder press, boční a přední zdvihy. Pohybové směry: přední, boční a zadní pohyb.",
      image: "images/ramena.jpg",
    },
  ];

  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const contextValue = {
    musclesData,
    screenSize,
  };

  return (
    <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>
  );
};

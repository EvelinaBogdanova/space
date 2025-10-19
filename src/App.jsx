import React, { useState } from "react";
import Header from "./components/Header";
import Home from "./page/Home";
import Planets from "./page/Planets";
import SpaceStations from "./page/SpaceStations";
import ScientificFacts from "./page/ScientificFacts";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Home />;
      case "planets":
        return <Planets />;
      case "space-stations":
        return <SpaceStations />;
      case "scientific-facts":
        return <ScientificFacts />;
      default:
        return <Home />;
    }
  };

  const handleNavClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <Header
        brand={{ text: "space", href: "#" }}
        links={[
          { label: "Головна", href: "#", onClick: () => handleNavClick("home") },
          { label: "Научные факты", href: "#", onClick: () => handleNavClick("scientific-facts") },
          { label: "Планеты", href: "#", onClick: () => handleNavClick("planets") },
          { label: "Космические станции", href: "#", onClick: () => handleNavClick("space-stations") },
        ]}
      />
      <main style={{ padding: 24, color: "#e7e9ee", background: "#0b0e14", minHeight: "100vh" }}>
        {renderPage()}
      </main>
    </>
  );
}
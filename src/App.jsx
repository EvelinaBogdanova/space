import Header from "./components/Header";

export default function App() {
  return (
    <>
      <Header
        brand={{ text: "space", href: "/" }}
        links={[
          { label: "Головна", href: "#" },
          { label: "Научьные факты", href: "#" },
          { label: "Планеты", href: "#" },
          { label: "касмические станции", href: "#" },
        ]}
      />
      <main style={{ padding: 24, color: "#e7e9ee", background: "#0b0e14", minHeight: "100vh" }}>
        Контент строници
      </main>
    </>
  );
}
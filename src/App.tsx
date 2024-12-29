import "./App.css";
import { Footer } from "./components/Layaout/Footer";
import { Header } from "./components/Layaout/Header";
import { useDarkMode } from "./hooks/useDarkMode";

function App() {
  const { isDark, setIsDark } = useDarkMode();

  return (
    <div className="min-h-screen flex flex-col">
      <Header isDark={isDark} onToggleTheme={() => setIsDark(!isDark)} />
      <div className="flex-1 relative">
        <div
          className={`absolute inset-0 -z-10 h-full w-full items-center ${
            isDark
              ? "[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"
              : "[background:radial-gradient(125%_125%_at_50%_10%,#f5f5f5_40%,#63e_100%)]"
          }`}
        ></div>
        <main className="container mx-auto px-4 py-8 flex items-center justify-center"></main>
      </div>
      <Footer />
    </div>
  );
}

export default App;

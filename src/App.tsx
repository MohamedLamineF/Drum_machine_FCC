import { useCallback, useState } from "react";
import "./App.css";
import { Footer } from "./components/Layaout/Footer";
import { Header } from "./components/Layaout/Header";
import { useDarkMode } from "./hooks/useDarkMode";
import { Display } from "./components/drum/Display";
import { VolumeControl } from "./components/drum/VolumeControl";
import { BankSwitch } from "./components/drum/BankSwitch";
import { DrumPad } from "./components/drum/DrumPad";
import { drumBanks } from "./data/drumBanks";

function App() {
  const { isDark, setIsDark } = useDarkMode();
  const [displayText, setDisplayText] = useState("");
  const [volume, setVolume] = useState(0.5);
  const [currentBank, setCurrentBank] = useState<"heater" | "piano">("heater");
  const [isPowered, setIsPowered] = useState(true);

  const handleVolumeChange = useCallback((newVolume: number) => {
    setVolume(newVolume);
    setDisplayText(`Volume: ${Math.round(newVolume * 100)}%`);
  }, []);

  const handleBankChange = useCallback((bank: "heater" | "piano") => {
    setCurrentBank(bank);
    setDisplayText(`Bank: ${bank === "heater" ? "Heater Kit" : "Piano Kit"}`);
  }, []);

  const handlePowerChange = useCallback((isOn: boolean) => {
    setIsPowered(isOn);
    setDisplayText(isOn ? "Power On" : "Power Off");
  }, []);

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
        <main className="container mx-auto p-4 flex items-center justify-center">
          <div
            id="drum-machine"
            className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-2xl max-w-md w-full transition-all duration-300"
          >
            <div className="flex flex-col gap-6">
              <div className="flex  gap-4">
                <Display
                  text={displayText}
                  isOn={isPowered}
                  onChange={handlePowerChange}
                />
              </div>

              <div className="flex gap-4">
                <VolumeControl
                  volume={volume}
                  onChange={handleVolumeChange}
                  isEnabled={isPowered}
                />

                <BankSwitch
                  currentBank={currentBank}
                  onChange={handleBankChange}
                  disabled={!isPowered}
                />
              </div>

              <div className="grid grid-cols-3 gap-4">
                {drumBanks[currentBank].map((pad) => (
                  <DrumPad
                    key={pad.id}
                    pad={pad}
                    volume={isPowered ? volume : 0}
                    onPlay={setDisplayText}
                    disabled={!isPowered}
                  />
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;

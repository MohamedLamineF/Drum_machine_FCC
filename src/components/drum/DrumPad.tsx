import { useEffect, useRef } from "react";
import { DrumPadProps } from "../../types";
import { useDrumPad } from "../../hooks/useDrumPad";

export function DrumPad({ pad, volume, onPlay, disabled }: DrumPadProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const { playSound } = useDrumPad(pad, audioRef, onPlay);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  return (
    <button
      className={`drum-pad group relative overflow-hidden bg-gradient-to-br from-purple-500 to-blue-500 dark:from-purple-600 dark:to-blue-600 text-white rounded-lg p-6 text-xl font-bold shadow-lg transition-all duration-200 ${
        disabled
          ? "opacity-50 cursor-not-allowed"
          : "hover:from-purple-600 hover:to-blue-600 dark:hover:from-purple-700 dark:hover:to-blue-700 active:scale-95"
      }`}
      onClick={disabled ? undefined : playSound}
      id={pad.id}
      disabled={disabled}
    >
      <span className="relative z-10 group-hover:scale-110 transition-transform duration-150">
        {pad.key}
      </span>
      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-150" />
      <audio
        ref={audioRef}
        className="clip"
        id={pad.key}
        src={pad.url}
        preload="auto"
      />
    </button>
  );
}

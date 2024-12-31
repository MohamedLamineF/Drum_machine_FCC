import { useCallback, useEffect } from "react";
import { useAudioPlayer } from "./useAudioPlayer";
import { DrumPad } from "../types";

export function useDrumPad(
  pad: DrumPad,
  audioRef: React.RefObject<HTMLAudioElement>,
  onPlay: (description: string) => void
) {
  const { playAudio } = useAudioPlayer();

  const playSound = useCallback(() => {
    if (audioRef.current) {
      playAudio(audioRef.current);
      onPlay(pad.description);
    }
  }, [audioRef, pad.description, onPlay, playAudio]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key.toUpperCase() === pad.key) {
        playSound();
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [pad.key, playSound]);

  return { playSound };
}

import { useCallback } from "react";

export function useAudioPlayer() {
  const playAudio = useCallback(async (audioElement: HTMLAudioElement) => {
    try {
      audioElement.currentTime = 0;
      await audioElement.play();
    } catch (error) {
      if (error instanceof Error && error.name !== "AbortError") {
        console.error("Error playing audio:", error);
      }
    }
  }, []);

  return { playAudio };
}

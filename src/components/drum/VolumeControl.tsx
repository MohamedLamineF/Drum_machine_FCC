import { Volume1, Volume2, VolumeX } from "lucide-react";
import { VolumeControlProps } from "../../types";

export function VolumeControl({
  volume,
  onChange,
  isEnabled,
}: VolumeControlProps) {
  const getVolumeIcon = () => {
    if (!isEnabled || volume === 0) return <VolumeX className="w-5 h-5" />;
    if (volume < 0.5) return <Volume1 className="w-5 h-5" />;
    return <Volume2 className="w-5 h-5" />;
  };

  return (
    <div className="flex items-center gap-4 bg-gray-100 dark:bg-gray-800 p-3 rounded-lg w-full">
      <button
        className={`text-gray-600 dark:text-gray-300 hover:text-purple-500 dark:hover:text-purple-400 transition-colors ${
          !isEnabled && "opacity-50"
        }`}
        onClick={() => isEnabled && onChange(volume === 0 ? 0.5 : 0)}
      >
        {getVolumeIcon()}
      </button>

      <div className="relative flex-1">
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          disabled={!isEnabled}
          onChange={(e) => onChange(parseFloat(e.target.value))}
          className="w-full h-2 bg-gray-300 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          style={{
            background: isEnabled
              ? `linear-gradient(to right, #8b5cf6 ${volume * 100}%, #d1d5db ${
                  volume * 100
                }%)`
              : undefined,
          }}
        />
      </div>
    </div>
  );
}

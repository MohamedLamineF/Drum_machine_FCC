import { Power } from "lucide-react";
import { DisplayProps } from "../../types";

export function Display({ text, isOn, onChange }: DisplayProps) {
  return (
    <div
      id="display"
      className="flex justify-between items-center bg-white dark:bg-gray-800 text-gray-800 dark:text-green-400 p-3 rounded-lg font-mono text-xl min-h-[60px] shadow-inner border border-gray-200 dark:border-gray-700 w-full"
    >
      <button
        onClick={() => onChange(!isOn)}
        className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
        aria-label="Toggle power"
      >
        <Power
          className={`w-6 h-6 transition-colors ${
            isOn ? "text-green-500" : "text-red-500"
          }`}
        />
      </button>
      <span className={` ${isOn ? "text-green-500" : "text-red-500"}`}>
        {text || "Ready"}
      </span>
    </div>
  );
}

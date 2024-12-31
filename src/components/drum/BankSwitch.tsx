import { Music2 } from "lucide-react";
import { BankSwitchProps } from "../../types";

export function BankSwitch({
  currentBank,
  onChange,
  disabled,
}: BankSwitchProps) {
  return (
    <div className="flex items-center gap-4 bg-gray-100 dark:bg-gray-800 p-3 rounded-lg w-full">
      <Music2
        className={`w-5 h-5 flex-shrink-0 dark:text-white  ${
          disabled ? "opacity-50" : ""
        }`}
      />
      <select
        value={currentBank}
        onChange={(e) => onChange(e.target.value as "heater" | "piano")}
        disabled={disabled}
        className="w-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md px-4 py-2 text-sm disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 focus:border-purple-500 dark:focus:border-purple-400 focus:ring-2 focus:ring-purple-500/20"
      >
        <option value="heater">Heater Kit</option>
        <option value="piano">Piano Kit</option>
      </select>
    </div>
  );
}

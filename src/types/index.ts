export interface DrumPad {
  key: string;
  id: string;
  url: string;
  description: string;
}

export interface HeaderProps {
  isDark: boolean;
  onToggleTheme: () => void;
}

export interface ThemeToggleProps {
  isDark: boolean;
  onToggle: () => void;
}

export interface BankSwitchProps {
  currentBank: "heater" | "piano";
  onChange: (bank: "heater" | "piano") => void;
  disabled?: boolean;
}

export interface DisplayProps {
  text: string;
  isOn: boolean;
  onChange: (isOn: boolean) => void;
}

export interface DrumPadProps {
  pad: DrumPad;
  volume: number;
  onPlay: (description: string) => void;
  disabled?: boolean;
}

export interface VolumeControlProps {
  volume: number;
  onChange: (value: number) => void;
  isEnabled: boolean;
}

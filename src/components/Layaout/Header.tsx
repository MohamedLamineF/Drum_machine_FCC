import { HeaderProps } from "../types";
import { ThemeToggle } from "../UI/ThemeToggle";

export function Header({ isDark, onToggleTheme }: HeaderProps) {
  return (
    <>
      <header className="sticky top-0 z-10 bg-white dark:bg-gray-800 shadow-lg p-2 transition-colors duration-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div></div>

            <div className="flex items-center justify-center gap-3">
              <span className="text-2xl font-bold tracking-tight text-black dark:text-white">
                Drum <span className="text-sky-400"> list</span>
              </span>
            </div>

            <ThemeToggle
              isDark={isDark}
              onToggle={onToggleTheme}
              aria-label="Toggle theme"
            />
          </div>
        </div>
      </header>
      <div className="sticky top-14 z-10 h-1 bg-gradient-to-r from-purple-500 to-blue-500"></div>
    </>
  );
}

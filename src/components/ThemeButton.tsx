import { Moon, Sun } from 'lucide-solid';

export default function ThemeButton() {
  const toggleTheme = () => {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('isDarkMode', String(isDark));
  };

  return (
    <button
      class="subtle group flex h-8 w-8 items-center justify-center p-2 active:scale-[0.97] motion-safe:transition-all motion-safe:duration-150 motion-safe:ease-out"
      aria-label="Toggle theme"
      onClick={toggleTheme}
    >
      <Sun class="h-full w-full group-active:filter-[blur(2px)] dark:hidden" />
      <Moon class="hidden h-full w-full group-active:filter-[blur(2px)] dark:block" />
    </button>
  );
}

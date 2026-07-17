import { signal } from '@preact/signals';
import { useEffect } from 'preact/hooks';
import { Moon, Sun } from 'lucide-preact';

const isDarkMode = signal(false);

function applyTheme(isDark: boolean) {
  document.documentElement.classList.toggle('dark', isDark);
}

export default function ThemeButton() {
  useEffect(() => {
    const stored = localStorage.getItem('isDarkMode');
    const initial =
      stored !== null
        ? stored === 'true'
        : window.matchMedia('(prefers-color-scheme: dark)').matches;
    isDarkMode.value = initial;
    applyTheme(initial);
  }, []);

  const toggleTheme = () => {
    const next = !isDarkMode.value;
    localStorage.setItem('isDarkMode', String(next));
    isDarkMode.value = next;
    applyTheme(next);
  };

  return (
    <button
      class="subtle group flex h-8 w-8 items-center justify-center p-2 active:scale-[0.97] motion-safe:transition-all motion-safe:duration-150 motion-safe:ease-out"
      aria-label="Toggle theme"
      onClick={toggleTheme}
    >
      {isDarkMode.value ? (
        <Moon class="h-full w-full group-active:filter-[blur(2px)]" />
      ) : (
        <Sun class="h-full w-full group-active:filter-[blur(2px)]" />
      )}
    </button>
  );
}

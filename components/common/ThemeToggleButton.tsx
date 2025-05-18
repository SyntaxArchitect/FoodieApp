'use client';
import { useTheme } from '../layout/ThemeProvider';

export default function ThemeToggleButton() {
    const { theme, toggleTheme } = useTheme();
    return (
        <button
            onClick={toggleTheme}
            className="fixed bottom-6 right-6 z-50 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white
                 rounded-full shadow-lg p-3 transition hover:bg-gray-300 dark:hover:bg-gray-600
                 focus:outline-none"
            aria-label="Toggle dark mode"
            style={{ fontSize: 24, boxShadow: '0 4px 24px rgba(0,0,0,0.2)' }}
        >
            {theme === 'dark' ? "🌙" : "☀️"}
        </button>
    );
}

import { createContext, useContext, useState } from 'react';

type Theme = 'light' | 'dark';
interface ThemeContextValue {
  theme: Theme;
  toggleTheme: () => void;
}

interface Props {
  children: React.ReactNode;
}

const THEME_KEY = 'ThemeKey';
const currentTheme: Theme =
  (localStorage.getItem(THEME_KEY) as Theme) || 'light';
const defaultValue: ThemeContextValue = {
  theme: currentTheme,
  toggleTheme: () => {},
};

const ThemeContext = createContext(defaultValue);

const useTheme = () => useContext(ThemeContext);

const ThemeProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState(defaultValue.theme);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem(THEME_KEY, newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, useTheme };

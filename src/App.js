import { createContext, useState } from 'react';

import './App.css';
import Header from './components/Header'

const themes = {
  light: 'white',
  dark: 'black',
}

export const ThemeContext = createContext(themes.light)

function App() {
  const [theme, setTheme] = useState(themes.light)

  const context = {
    currentTheme: theme,
    switchTheme: setTheme,
  }
  return (
    <ThemeContext.Provider 
    className="App"
    value = {theme}>
      <Header />
    </ThemeContext.Provider>
  );
}

export default App;

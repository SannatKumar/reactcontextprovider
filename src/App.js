import { createContext, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './App.css';
//import Header from './components/Header' <Header />

const themes = {
  light: 'white',
  dark: 'black',
}

export const ThemeContext = createContext(themes.light)

function App() {
  const [theme, setTheme] = useState(themes.light)
  //calling dispatch for the function
  const dispatch = useDispatch()

  const counter = useSelector(state => state.counter)

  const context = {
    currentTheme: theme,
    switchTheme: setTheme,
  }
  return (
    <ThemeContext.Provider 
    className="App"
    value = {context}>
      
      <h1>{counter}</h1>
    </ThemeContext.Provider>
  );
}

export default App;

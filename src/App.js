import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './global';
import { light, dark } from './themes';
import { Header } from './components/Header/Header';
import { Converter } from './components/ConverterCalculator/ConverterCalculator';

function App() {
  const stored = localStorage.getItem('isDarkMode');
  const [isDarkMode, setIsDarkMode] = useState(
    stored === 'true' ? true : false
  );

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('isDarkMode', !isDarkMode);
  };

  return (
     <ThemeProvider theme={isDarkMode ? dark : light}>
      <GlobalStyles />
      <Header toggleThemes={toggleTheme} />
      <Converter />
    </ThemeProvider>
  );
}

export default App;


import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import AppRouters from './routers/router';
import GlobalStyle from "./style/global";
import { defaultTheme } from './style/theme';

function App() {

  const [theme, setTheme] = useState(defaultTheme);

  return (  
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <AppRouters />
        <GlobalStyle />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;

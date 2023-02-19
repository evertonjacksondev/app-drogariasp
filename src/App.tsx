
import { BrowserRouter } from 'react-router-dom';
import AppRouters from './routers/router';
import GlobalStyle from "./style/global";

function App() {
  return (
    <BrowserRouter>
      <AppRouters />
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;

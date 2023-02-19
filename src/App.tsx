
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AppRouters from './routers/router';

function App() {
  return (
    <BrowserRouter>
      <AppRouters />
    </BrowserRouter>
  );
}

export default App;

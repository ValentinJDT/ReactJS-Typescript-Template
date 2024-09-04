import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages';
import './i18n';

function App() {
  return (
    <BrowserRouter basename="/frontend">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/navBar';
import Products from './pages/productos'; 
import Home from './pages/home';
import Ofertas from './pages/Ofertas'
import NotFound from './pages/NotFound';
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="root">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<Products />} />
          <Route path="/Ofertas" element={<Ofertas />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

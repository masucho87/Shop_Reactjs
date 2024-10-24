import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/home';
import Products from './pages/productos'; 
import ProductDetail from './components/ProductDetail';
import NotFound from './pages/NotFound';
import './styles/App.css';
import Ofertas from './pages/Ofertas';

function App() {
  return (
    <Router>
      <div className="root">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<Products />} />
          <Route path="/productos/:id" element={<ProductDetail />} />
          <Route path="/ofertas/" element={<Ofertas />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

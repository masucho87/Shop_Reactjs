import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/navBar';
import ItemListContainer from './components/itemsListConteiner/itemListConteiner';
import Products from './pages/productos'; 
import Home from './pages/Home'
import './App.css';

function App() {
  return (
    <Router>
      <div className="root">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<Products />} />
          <Route path="/bienvenidos" element={<ItemListContainer saludo={'Bienvenidos'} />} />
          <Route path="*" element={<h1>404 - Página no encontrada</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

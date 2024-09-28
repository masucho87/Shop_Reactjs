import NavBar from './components/Navbar/navBar';
import ItemListConteiner from './components/itemsListConteiner/itemListConteiner';
import './App.css';
import './Styles.css';

function App() {
  return (
    <div className="root">
      <NavBar />
      <ItemListConteiner saludo={'Bienvenidos'} />
    </div>
  );
}

export default App;

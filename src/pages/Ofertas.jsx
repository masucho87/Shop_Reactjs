import React, { useState, useEffect } from "react";
import { ofertas } from '../data/ofertas';
import ItemList from "../components/itemList";

function Ofertas() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fectchOfertas = () => {
            setTimeout(() => {
                setItems(ofertas);
            }, 1000); 
        };
        fectchOfertas();
    }, []);

    return (
        <div>
            <h1>Nuestras Ofertas de esta semana</h1>
            {items.length > 0 ? (
                // Pasamos el prop esOferta={true} para que el componente sepa que son ofertas
                <ItemList items={items} esOferta={true} />
            ) : (
                <p>Cargando ofertas...</p>
            )}
        </div>
    );
}

export default Ofertas;

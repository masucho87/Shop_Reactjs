import React, { useState, useEffect } from "react";
import { ofertas } from '../data/ofertas';
import ItemList from "../components/itemList";

function Ofertas() {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fectchOfertas = async () => {
            setLoading(true); 
            try {
                const result = await new Promise((resolve) => {
                    setTimeout(() => {
                        resolve(ofertas);
                    }, 1000); 
                });
                setItems(result);
            } catch (error) {
                console.error("Error al obtener los ofertas:", error);
            } finally {
                setLoading(false);
            }
        };

        fectchOfertas();
    }, []);

    return (
        <div>
            <h1>Nuestras Ofertas de esta semana</h1>
            {items.length > 0 ? (
                <ItemList items={items} esOferta={true} />
            ) : (
                <p>Cargando ofertas...</p>
            )}
        </div>
    );
}

export default Ofertas;

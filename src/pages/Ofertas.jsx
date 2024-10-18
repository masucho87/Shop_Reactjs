import React, { useState, useEffect } from "react";
import { ofertas } from '../data/ofertas';
import ItemList from "../components/itemList";

function Ofertas() {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchOfertas = async () => {
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

        fetchOfertas();
    }, []);

    return (
        <div>
            <h1>Nuestras Ofertas de esta semana</h1>
            {loading ? (  
                <p>Cargando ofertas...</p>
            ) : items.length > 0 ? (
                <ItemList items={items} esOferta={true} />
            ) : (
                <p>No hay ofertas disponibles.</p> 
            )}
        </div>
    );
}

export default Ofertas;

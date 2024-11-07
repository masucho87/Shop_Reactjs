import React, { useState, useEffect, useContext } from 'react';
import { cartContext } from '../context/cartContext';
import ItemList from '../components/itemList';
import { getOfertas } from '../firebase/db';

function Oferta() {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
 
    const valor = useContext(cartContext);

    useEffect(() => {
        const fetchOfertas = async () => {
            setLoading(true); 
            try {
                
                const result = await getOfertas();
                setItems(result); 
            } catch (error) {
                console.error("Error al obtener los productos:", error);
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

export default Oferta;

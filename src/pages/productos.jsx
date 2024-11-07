import React, { useState, useEffect, useContext } from 'react';
import { cartContext } from '../context/cartContext';
import ItemList from '../components/itemList';
import { getProductos } from '../firebase/db';


function Products() {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
 
    const valor = useContext(cartContext);

    useEffect(() => {
        const fetchProductos = async () => {
            setLoading(true); 
            try {
                
                const result = await getProductos();
                setItems(result); 
            } catch (error) {
                console.error("Error al obtener los productos:", error);
            } finally {
                setLoading(false);
            }        
        };

        fetchProductos();
    }, []);

    return (
        <div>
            <h1>Nuestros Productos</h1>
            {loading ? (
                <p>Cargando productos...</p>
            ) : items.length > 0 ? (
                <ItemList items={items} />
            ) : (
                <p>No hay productos disponibles.</p>
            )}
        </div>
    );
}

export default Products;

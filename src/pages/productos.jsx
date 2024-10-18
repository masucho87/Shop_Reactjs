import React, { useState, useEffect } from "react";
import ItemList from "../components/itemList";
import { productos } from "../data/productos";

function Products() {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProductos = async () => {
            setLoading(true); 
            try {
                const result = await new Promise((resolve) => {
                    setTimeout(() => {
                        resolve(productos);
                    }, 1000); 
                });
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

import React, { useState, useEffect } from "react";
import ItemList from "../components/itemList";
import { productos } from "../data/productos";

function Products() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchProductos = () => {
            setTimeout(() => {
                setItems(productos);
            }, 1000); 
        };
        fetchProductos();
    }, []);

    return (
        <div>
            <h1>Nuestros Productos</h1>
            {items.length > 0 ? (
                <ItemList items={items} />
            ) : (
                <p>Cargando productos...</p>
            )}
        </div>
    );
}

export default Products;

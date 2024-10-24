import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { productos } from '../data/productos';
import Button from 'react-bootstrap/Button';
import '../styles/ProductDetail.css';

function ProductDetail() {
    const { id } = useParams(); 
    const [product, setProduct] = useState(null);
    const [cartCount, setCartCount] = useState(0); 
    useEffect(() => {
        
        const foundProduct = productos.find(p => p.ID === parseInt(id));
        setProduct(foundProduct);
    }, [id]);

    const incrementCount = () => {
        setCartCount(cartCount + 1); 
    };

    const decrementCount = () => {
        if (cartCount > 0) {
            setCartCount(cartCount - 1); 
        }
    };

    if (!product) return <p>Producto no encontrado</p>; 

    return (
        <div className="product-detail-container">
            <h1>{product.Nombre}</h1>
            <img src={product.Imagen} alt={product.Nombre} className="product-image" />
            <p>{product.Descripcion}</p> 
            
            {product.PrecioOferta ? (
                <div className="offer-container">
                    <span className="precio-regular">Precio: ${product.Precio}</span><br />
                    <span className="precio-oferta">Precio Oferta: ${product.PrecioOferta}</span>
                </div>
            ) : (
                <p>Precio: ${product.Precio}</p>
            )}

            <div className="counter-container">
                <Button variant="outline-secondary" onClick={decrementCount}>-</Button>
                <span className="counter-value">{cartCount}</span> 
                <Button variant="outline-secondary" onClick={incrementCount}>+</Button>
            </div>

            <Button 
                variant="success"
                onClick={() => console.log(`${cartCount} producto(s) añadido(s) al carrito`)} 
                className="add-to-cart-button" 
            >
                Añadir al carrito
            </Button>
        </div>
    );
}

export default ProductDetail;

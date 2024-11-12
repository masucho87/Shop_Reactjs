import React, { useContext, useState } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import DeleteIcon from '@mui/icons-material/Delete';
import { CartContext } from '../context/cartContext'; 
import '../styles/CartWidget.css'; 
import { db } from '../firebase/db';
import Swal from 'sweetalert2';
import { collection, addDoc } from 'firebase/firestore'; 

const CartWidget = () => {
  const { cart, removeFromCart } = useContext(CartContext);
  const [isCartVisible, setIsCartVisible] = useState(false);

  const contadorCarrito = cart.length;  
  const totalCompra = cart.reduce((total, product) => total + (product.Precio * product.quantity), 0);

  const toggleCartVisibility = () => {
    setIsCartVisible(!isCartVisible);
  };

  const procederPago = async () => {
    try {
      const orderRef = await addDoc(collection(db, 'orders'), {
        products: cart,
        total: totalCompra,
        date: new Date()
      });
      const orderId = orderRef.id;

      Swal.fire({
        icon: 'success',
        title: 'Compra realizada con éxito',
        text: `ID de la compra: ${orderId}`,
      });
    } catch (error) {
      console.error('Error al procesar la compra:', error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Hubo un error al procesar la compra. Intenta nuevamente.',
      });
    }
  };

  return (
    <div className="cart-widget">
      <Badge badgeContent={contadorCarrito} color="primary">
        <ShoppingCartIcon className="cart-icon" onClick={toggleCartVisibility} />
      </Badge>
      <span className="cart-text">Carrito</span>

      {isCartVisible && (
        <div className={`cart-dropdown ${isCartVisible ? 'visible' : ''}`}>
          <h4>Productos en el carrito</h4>
          {cart.length === 0 ? (
            <p>No hay productos en el carrito</p>
          ) : (
            <ul className="cart-list">
              {cart.map((product) => (
                <li key={product.id} className="cart-item">
                  <div className="cart-item-details">
                    <p className="product-name">{product.Nombre} x{product.quantity}</p>
                    <p className="product-price">${product.Precio * product.quantity}</p>
                  </div>
                  <button 
                    className="remove-btn"
                    onClick={() => removeFromCart(product.id)} 
                  >
                    <DeleteIcon className="delete-icon" />
                  </button>
                </li>
              ))}
            </ul>
          )}
          <div className="cart-total">
            <h5>Total: ${totalCompra.toFixed(2)}</h5> 
          </div>
          <div>
            <button className="checkout-btn" onClick={procederPago}>Proceder al pago</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartWidget;

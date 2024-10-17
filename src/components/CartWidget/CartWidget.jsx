import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';

const CartWidget = () => {
  const contadorCarrito = 2; 

  return (
    <div className="cart" style={{ display: 'flex', alignItems: 'center' }}>
      <Badge badgeContent={contadorCarrito} color="primary">
        <ShoppingCartIcon style={{ fontSize: 30, color: 'blue' }} />
      </Badge>
      <span style={{ marginLeft: '10px' }}>Carrito</span>
    </div>
  );
};

export default CartWidget;

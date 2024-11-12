# Proyecto de E-commerce en React

Este proyecto es una aplicación de e-commerce desarrollada en React, que permite a los usuarios explorar productos, ver ofertas y agregar artículos a un carrito de compras. Incluye una integración de contexto (`Context API`) para manejar el estado global del carrito en toda la aplicación.

## Tecnologías Utilizadas

- **[React](https://react.dev/)**: Biblioteca para la creación de interfaces de usuario.
- **[React Router](https://reactrouter.com/)**: Biblioteca para la navegación entre las diferentes páginas.
- **[React Bootstrap](https://react-bootstrap.github.io/)** y **[Material-UI](https://mui.com/)**: Librerías de diseño y estilo de componentes.
- **[SweetAlert](https://sweetalert.js.org/)**: Librería para mostrar alertas atractivas y personalizables.
- **[Context API](https://react.dev/learn/passing-data-deeply-with-context)**: API de React para gestionar el estado global.
- **JavaScript (ES6+)**: Lenguaje de programación utilizado para la lógica de la aplicación.

## Funcionalidades

1. **Listado de Productos**: Los usuarios pueden explorar una lista de productos con detalles básicos.
2. **Ofertas**: Página específica para productos en oferta.
3. **Carrito de Compras**: Los usuarios pueden agregar productos al carrito y ver el total de artículos.
4. **Gestión de Estado Global**: Se usa `Context API` para almacenar el estado del carrito en toda la aplicación.
5. **Confirmación de Compra**: Al proceder con la compra, se utiliza SweetAlert para mostrar un mensaje de confirmación y vaciar el carrito.


## Estructura de Carpetas

	├── public │ ├── index.html ├── src │ ├── components │ │ ├── Item.jsx │ │ ├── CartWidget.jsx │ ├── context │ │ └── cartContext.js │ ├── pages │ │ ├── Oferta.jsx │ ├── styles │ │ └── Items.css │ ├── App.js │ └── index.js ├── README.md └── package.json

## Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/tu-repositorio.git

2. Clona el repositorio:
   ```bash
   
   git clone https://github.com/masucho87/Shop_Reactjs.git

3. Instala las dependencias:
   ```bash
	 npm install

4.  Inicia la aplicación:
	```bash
	 npm start

## Configuración y Uso del Contexto para el Carrito

En este proyecto, el estado del carrito se gestiona mediante un contexto para facilitar la manipulación global del carrito y la integración con múltiples componentes.
### Definición del Contexto

En `src/context/cartContext.js`, definimos el contexto de carrito y las funciones necesarias para manipular los productos.
```bash
import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const productInCart = prevCart.find(item => item.id === product.id);
      if (productInCart) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const getCartCount = () => cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, getCartCount }}>
      {children}
    </CartContext.Provider>
  );
}; 
```  
### Uso del Contexto en Componentes

#### CartWidget

El componente `CartWidget` muestra la cantidad de productos en el carrito.
```bash
import React, { useContext } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import { CartContext } from '../context/cartContext';

const CartWidget = () => {
  const { getCartCount } = useContext(CartContext);
  const contadorCarrito = getCartCount();

  return (
    <div className="cart" style={{ display: 'flex', alignItems: 'center' }}>
      <Badge badgeContent={contadorCarrito} color="primary">
        <ShoppingCartIcon className='carrito' />
      </Badge>
      <span style={{ marginLeft: '10px' }}>Carrito</span>
    </div>
  );
};

export default CartWidget;

``` 
#### Agregar Productos al Carrito

En el componente `Item`, usamos `addToCart` del contexto para añadir productos al carrito.
```bash
import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { CartContext } from '../context/cartContext';

function Item({ item }) {
  const { addToCart } = useContext(CartContext);

  return (
    <Card className="custom-card"> 
      <Card.Img variant="top" src={item.Imagen} alt={item.Nombre} />
      <Card.Body>
        <Card.Title>{item.Nombre}</Card.Title>
        <Card.Text>Precio: ${item.Precio}</Card.Text>
        <Button variant="primary" onClick={() => addToCart(item)}>
          Agregar al carrito
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Item;
``` 
## Estilos

Los estilos están en `src/styles/Items.css` para personalizar la presentación de los productos y el carrito.
```bash
.custom-card {
  max-width: 300px;
  min-height: 450px;
}

.card-image {
  height: 150px;
  object-fit: cover;
}
``` 

## Funcionalidad de Confirmación de Compra con SweetAlert
Cuando el usuario procede con la compra, el carrito se vacía y se muestra una alerta de confirmación usando SweetAlert.
```bash
import Swal from 'sweetalert2';

const procederPago = () => {
  Swal.fire({
    title: '¿Estás seguro?',
    text: '¿Deseas confirmar la compra?',
    icon: 'question',
    showCancelButton: true,
    confirmButtonText: 'Confirmar',
    cancelButtonText: 'Cancelar',
  }).then((result) => {
    if (result.isConfirmed) {
      // Vaciar el carrito después de la compra
      setCart([]);
      Swal.fire('Compra realizada', '¡Tu compra ha sido exitosa!', 'success');
    }
  });
};

``` 





import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../styles/Items.css'; 
import { Link } from 'react-router-dom';

function Item({ item, esOferta }) {
    return (
        <Card style={{ maxWidth: '18rem', height: '24rem' }} className="custom-card"> 
            <Card.Img 
                variant="top" 
                src={item.Imagen} 
                alt={item.Nombre} 
                className="card-image" 
            />
            <Card.Body>
                <Card.Title>{item.Nombre}</Card.Title>
                <Card.Text>
                    Tipo: {item.Tipo} <br />
                    {esOferta && item.PrecioOferta ? (
                        <>
                            <span className="precio-regular">
                                Precio: ${item.Precio}
                            </span> <br />
                            <span className="precio-oferta">
                                Precio Oferta: ${item.PrecioOferta}
                            </span>
                        </>
                    ) : (
                        <span>Precio: ${item.Precio}</span>
                    )}
                </Card.Text>
                <Button 
                    variant="primary"
                    as={Link}
                    to={`/productos/${item.ID}`} 
 
                >
                    Ver más
                </Button>
            </Card.Body>
        </Card>
    );
}

export default Item;

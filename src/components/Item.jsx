import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../Items.css'; 

function Item({ item }) {
    return (
        <Card style={{ width: '18rem', height: '24rem' }} className="custom-card"> {/* Tamaño fijo */}
            <Card.Img 
                variant="top" 
                src={item.imagen} 
                alt={item.nombre} 
                className="card-image" 
            />
            <Card.Body>
                <Card.Title>{item.Nombre}</Card.Title>
                <Card.Text>
                    Tipo: {item.Tipo} <br />
                    Precio: ${item.Precio} <br />
                </Card.Text>
                <Button variant="primary">Comprar</Button>
            </Card.Body>
        </Card>
    );
}

export default Item;

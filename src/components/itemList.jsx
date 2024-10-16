import React from 'react';
import Item from './Item';
import { Container, Row, Col } from 'react-bootstrap'; // Importa los componentes de Bootstrap

function ItemList({ items }) {
    return (
        <Container>
            <Row>
                {items.map((item) => (
                    <Col key={item.id} xs={12} sm={6} md={4} lg={3}> {/* Controla cuántas columnas mostrar */}
                        <Item item={item} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default ItemList;

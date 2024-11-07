import React from 'react';
import Item from './Item';
import '../styles/Items.css'
import { Container, Row, Col } from 'react-bootstrap';


function ItemList({ items, esOferta }) {
    return (
        <div className="cards-container">
            <Row>
                {items.map((item) => (
                    <Col key={item.ID} xs={12} sm={6} md={4} lg={3}> 
                        <Item item={item} esOferta={esOferta} />
                    </Col>
                ))}
            </Row>
        </div>
    );
}

export default ItemList;
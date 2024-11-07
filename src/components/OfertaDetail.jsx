import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../firebase/config'; 
import { doc, getDoc } from 'firebase/firestore';
import Button from 'react-bootstrap/Button';
import '../styles/ProductDetail.css';

function OfferDetail() {
    const { id } = useParams();
    const [offer, setOffer] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!id) {
            setError("ID de oferta no válido");
            setLoading(false);
            return;
        }

        const fetchOffer = async () => {
            setLoading(true);
            try {
                const offerRef = doc(db, 'ofertas', id);
                const offerSnap = await getDoc(offerRef);

                if (offerSnap.exists()) {
                    setOffer(offerSnap.data());
                } else {
                    setError("Oferta no encontrada");
                }
            } catch (err) {
                setError("Error al cargar la oferta");
            } finally {
                setLoading(false);
            }
        };

        fetchOffer();
    }, [id]);

    if (loading) return <p>Cargando oferta...</p>;
    if (error) return <p>{error}</p>; 
    if (!offer) return <p>Oferta no encontrada</p>;

    return (
        <div className="offer-detail-container">
            <h1>{offer.Nombre}</h1>
            <img src={offer.Imagen} alt={offer.Nombre} className="offer-image" />
            <p>{offer.Descripcion}</p> 
            {offer.PrecioOferta ? (
                <div className="offer-container">
                    <span className="precio-regular">Precio: ${offer.Precio}</span><br />
                    <span className="precio-oferta">Precio Oferta: ${offer.PrecioOferta}</span>
                </div>
            ) : (
                <p>Precio: ${offer.Precio}</p>
            )}

            <div className="counter-container">
                <Button variant="outline-secondary">-</Button>
                <span className="counter-value">0</span>
                <Button variant="outline-secondary">+</Button>
            </div>
            <Button 
                variant="success"
                onClick={() => console.log("Añadido al carrito")} 
                className="add-to-cart-button" 
            >
                Añadir al carrito
            </Button>
        </div>
    );
}

export default OfferDetail;

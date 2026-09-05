import React from 'react';
import { Link } from 'react-router-dom';

const ItemCard = ({ item, section }) => {
    const isClickable = section === 'uniforms' || section === 'school-merch';
    const CardContent = (
        <>
            <img src={item.imageUrl} alt={item.name} className="item-image" />
            <div className="item-info">
                <h3 className="item-title">{item.name}</h3>
                <p className="item-price">₱{item.price.toFixed(2)}</p>
                {isClickable && <button className="add-to-cart-btn">Add to Cart</button>}
            </div>
        </>
    );

    return isClickable ? (
        <Link to={`/item/${section}/${item.id}`} className="item-card-link">
            <div className="item-card clickable">{CardContent}</div>
        </Link>
    ) : (
        <div className="item-card">{CardContent}</div>
    );
};

export default ItemCard;
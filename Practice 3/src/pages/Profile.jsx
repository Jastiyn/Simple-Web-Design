import React, { useState } from 'react';
import logo from '../assets/catdp.jpg';
import uniforms from '../data/uniforms';
import schoolMerch from '../data/schoolMerch';
import { CreditCard, Package, Truck, Undo, } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const STATUS_KEYS = ['toPay', 'toShip', 'toReceived', 'toReturn'];
const STATUS_LABELS = {
    toPay: 'To Pay',
    toShip: 'To Ship',
    toReceived: ' To Received',
    toReturn: 'To Return',
};
const STATUS_ICONS = {
    toPay: <CreditCard size={20} />,
    toShip: <Truck size={20} />,
    toReceived: <Package size={20} />,
    toReturn: <Undo size={20} />,
  };

function Profile() {
    const [selected, setSelected] = useState('toPay');
    const location = useLocation();
    const { name, email } = location.state || {
        name: 'Guest User',
        email: 'guest@example.com',
    };

    const orders = {
        toPay: [
            { id: '1', name: 'Traditional Uniform Set', price: 760.00, imageUrl: uniforms[0].imageUrl },
            { id: '4', name: 'Premium Blazer', price: 920.00, imageUrl: uniforms[1].imageUrl },
            { id: '5', name: 'Psychology Uniform Set', price: 890.00, imageUrl: uniforms[4].imageUrl },
        ],
        toShip: [
            { id: '2', name: 'School ID', price: 100.00, imageUrl: schoolMerch[0].imageUrl },
            { id: '6', name: 'NU Mug', price: 120.00, imageUrl: schoolMerch[6].imageUrl },
        ],
        toReceived: [
            { id: '3', name: 'Windbreaker School Hoodie', price: 299.00, imageUrl: schoolMerch[1].imageUrl }
        ],
        toReturn: [],
    };

    const items = orders[selected] || [];

    return (
        <div className="profile-container">
            <div className="profile-sidebar">
                <img className="avatar" src={logo} alt="avatar" />
                <h1 className="profile-name">{name}</h1>
                <p className="profile-email">{email}</p>
                <p className="profile-joined">Member since December 16, 2022</p>
            </div>

            <main className="profile-main">
                <div className="summary-bar">
                {STATUS_KEYS.map(key => (
                    <div
                    key={key}
                    className={`summary-item ${selected === key ? 'active' : ''}`}
                    onClick={() => setSelected(key)}
                    >
                    <div className="icon">{STATUS_ICONS[key]}</div>
                    <span className="count">{orders[key]?.length || 0}</span>
                    <span className="label">{STATUS_LABELS[key]}</span>
                    </div>
                ))}
                </div>

                <section className="order-section">
  <h2>{STATUS_LABELS[selected]}:</h2>

  {items.length > 0 ? (
    <ul className="order-items">
      {items.map(item => (
        <li key={item.id} className="order-item">
          <img
            src={item.imageUrl}
            alt={item.name}
            className="item-thumb"
          />
          <div className="item-info">
            <span className="item-name">{item.name}</span>
            <span className="item-price">₱{item.price.toFixed(2)}</span>
            <button
              className="view-btn"
              onClick={() => window.alert(`View details for ${item.name}`)}
            >
              View
            </button>
          </div>
        </li>
      ))}
    </ul>
  ) : (
    <p className="no-items">
      You have no items {STATUS_LABELS[selected].toLowerCase()}.
    </p>
  )}
</section>
            </main>
        </div>
    );
}

export default Profile;
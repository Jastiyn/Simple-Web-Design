import React from 'react';
import ItemCard from '../components/ItemCard';

const Cart = () => {
    const sectionId = 'cart';
    const cartItems = [
        {
            id: 'u2',
            name: 'Premium Blazer',
            price: 920.00,
            imageUrl: 'https://scontent.fmnl25-3.fna.fbcdn.net/v/t39.30808-6/470220185_1314982029943267_3811247214457704998_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeEaOIU69u0Us9bY8q3GsUi8XNN721KEh1Bc03vbUoSHUPR7yWth2OKZkJMMOFVxmbY-wPA07gBlIbXYCItSnD1Q&_nc_ohc=ZX1I8lFLI10Q7kNvwGOsahT&_nc_oc=AdmbVxdlbzmLIlGdOHs0pwPtMY6bsfZKkIviS2hNJUD1D9SwRtktyENbQrmiYcX5hjM&_nc_zt=23&_nc_ht=scontent.fmnl25-3.fna&_nc_gid=zojVuiNMm50RZuVOfCJFmA&oh=00_AfHabjjS3vG-EKiirZI8eVaY9-kK_Fj-bh2qpwsm5yCK1A&oe=681D3063',
            descrption: 'Wool-blend blazer for formal events',
        },
        {
            id: 'm6',
            name: 'NU Bulldog Pin',
            price: 30.00,
            imageUrl: 'https://scontent.fmnl3-1.fna.fbcdn.net/v/t1.6435-9/193718778_511269803647831_2743205953032775898_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHAxUMLl4PjFayknI-GZ_K9n--wK_jsRYCf77Ar-OxFgJSwrxcdVootTm03lw-skZubnZ4bkdUFu3NuyeI30xF9&_nc_ohc=jl97v3icV7YQ7kNvwEM0z6p&_nc_oc=AdkydoQI-sYicwi2rPdWIb2AWnIbxa1eWqLwS2BnFAS5lGlZCXtP0rX9efW9Ra_z92w&_nc_zt=23&_nc_ht=scontent.fmnl3-1.fna&_nc_gid=69KZJG0S7XLmz0T1F3mlZA&oh=00_AfLoMqjLrPSJXrVWaOrPSvymF-heCSxVf1y44u_5rTg8XA&oe=6842D2BB',
            descrption: 'A Pin with National University Bulldogs Design',
        },
    ];

    return (
        <div >
            <h1 style={{ padding: '2rem' }}>Your Cart</h1>
            {cartItems.length === 0
                ? <p>Your cart is empty.</p>
                : (
                    <div className='item-grid'>
                        {cartItems.map(item => (
                            <ItemCard key={item.id} item={item} section={sectionId} />
                        ))}
                    </div>
                )
            }
        </div>
    );
};

export default Cart;
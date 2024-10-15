
// import React from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';

// const Checkout = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const ebook = location.state?.ebook;

//   const handleBackToCatalog = () => {
//     navigate('/catalog');
//   };

//   const handleConfirmPurchase = () => {
//     navigate('/payment', { state: { ebook } });
//   };

//   if (!ebook) {
//     return <p>No ebook selected for checkout.</p>;
//   }

//   return (
//     <div style={styles.checkoutContainer}>
//       <button onClick={handleBackToCatalog} style={styles.backButton}>Back to Catalog</button>
//       <h2 style={styles.heading}>Checkout</h2>
//       <div style={styles.checkoutDetails}>
//         <img src={ebook.image} alt={ebook.title} style={styles.bookImage} />
//         <h3 style={styles.bookTitle}>{ebook.title}</h3>
//         <p style={styles.price}>Price: ${ebook.price}</p>
//       </div>
//       <div style={styles.footer}>
//         <button onClick={handleConfirmPurchase} style={styles.confirmButton}>
//           Confirm Purchase
//         </button>
//       </div>
//     </div>
//   );
// };

// const styles = {
//   checkoutContainer: {
//     padding: '20px',
//     margin: '0 auto',
//     textAlign: 'center',
//     position: 'relative', 
    
//   },
//   backButton: {
//     backgroundColor: '#ddd',
//     border: 'none',
//     borderRadius: '4px',
//     padding: '10px 20px',
//     cursor: 'pointer',
//     fontSize: '16px',
//     marginBottom: '20px',
//   },
//   heading: {
//     fontSize: '32px',
//     marginBottom: '20px',
//     fontWeight: 'bold',
//   },
//   checkoutDetails: {
//     marginTop: '20px',
//   },
//   bookImage: {
//     width: '200px',
//     height: 'auto',
//     objectFit: 'cover',
//     borderRadius: '4px',
//     marginBottom: '10px',
//   },
//   bookTitle: {
//     fontSize: '24px',
//     fontWeight: 'bold',
//   },
//   price: {
//     fontSize: '18px',
//     color: '#333',
//   },
//   footer: {
//     position: 'absolute',
//     bottom: '20px',
//     right: '20px',
//     textAlign: 'right',
//   },
//   confirmButton: {
//     backgroundColor: '#001F3F',
//     color: 'white',
//     border: 'none',
//     borderRadius: '4px',
//     padding: '10px 20px',
//     cursor: 'pointer',
//     fontSize: '16px',
//   },
// };

// export default Checkout;

import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const cart = location.state?.cart || [];

  const handleBackToCatalog = () => {
    navigate('/catalog');
  };

  const handleConfirmPurchase = () => {
    navigate('/payment', { state: { cart } });
  };

  const totalPrice = cart.reduce((sum, ebook) => sum + ebook.price, 0);

  if (cart.length === 0) {
    return <p>No items in the cart for checkout.</p>;
  }

  return (
    <div style={styles.checkoutContainer}>
      <button onClick={handleBackToCatalog} style={styles.backButton}>Back to Catalog</button>
      <h2 style={styles.heading}>Checkout</h2>
      <div style={styles.checkoutDetails}>
        {cart.map((ebook) => (
          <div key={ebook.id} style={styles.bookItem}>
            <img src={ebook.image} alt={ebook.title} style={styles.bookImage} />
            <h3 style={styles.bookTitle}>{ebook.title}</h3>
            <p style={styles.price}>Price: ₹{ebook.price}.00</p>
          </div>
        ))}
      </div>
      <h3>Total Price: ₹{totalPrice}.00</h3>
      <div style={styles.footer}>
        <button onClick={handleConfirmPurchase} style={styles.confirmButton}>
          Confirm Purchase
        </button>
      </div>
    </div>
  );
};

const styles = {
  checkoutContainer: {
    padding: '20px',
    maxWidth: '1200px',
    margin: '0 auto',
    textAlign: 'center',
  },
  checkoutDetails: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', // Flexible grid layout
    gap: '20px',
    marginTop: '20px',
  },
  bookItem: {
    padding: '15px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
    textAlign: 'center',
    transition: 'transform 0.3s ease', // Hover effect
  },
  bookItemHover: {
    transform: 'scale(1.05)', // Slightly enlarge on hover
  },
  bookImage: {
    width: '100%',
    height: 'auto',
    objectFit: 'cover',
    marginBottom: '10px',
    borderRadius: '8px',
  },
  bookTitle: {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  price: {
    fontSize: '18px',
    color: '#333',
  },
  footer: {
    marginTop: '20px',
    textAlign: 'right',
  },
  confirmButton: {
    backgroundColor: '#001F3F',
    color: 'white',
    padding: '10px 20px',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
  },
};
export default Checkout;

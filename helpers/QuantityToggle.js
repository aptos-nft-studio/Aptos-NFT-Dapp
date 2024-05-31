import React, { useState } from 'react';
import {MaxMint} from "../helpers/candyMachineInfo";
import styles from '../styles/Home.module.css';

function QuantityToggle({ onChange }) {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    if (quantity < MaxMint) { // Check if quantity is less than MaxMint
      setQuantity(prevQuantity => prevQuantity + 1);
      onChange(quantity + 1); // Notify parent component about the change
    }
  };


  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
      onChange(quantity - 1); // Notify parent component about the change
    }
  };

  return (
    <div>
      <button className={styles.quantityButton} onClick={handleDecrement}>-</button>
      <span id="quantityField" className={styles.quantityField}>{quantity}</span>
      <button className={styles.quantityButton} onClick={handleIncrement}>+</button>
    </div>
  );
}

export default QuantityToggle;

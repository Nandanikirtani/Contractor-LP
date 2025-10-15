import React from 'react';
import { motion } from 'framer-motion';
import '../styles/App.css';

const PricingCard = ({ title, price, features, popular, index = 0 }) => {
  return (
    <motion.div 
      className={`pricing-card ${popular ? 'popular' : ''}`}
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.2,
        ease: [0.4, 0, 0.2, 1]
      }}
      whileHover={{ y: -10, scale: popular ? 1.05 : 1.03 }}
    >
      <motion.div 
        className="pricing-glow-effect"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      />
      
      {popular && (
        <motion.div 
          className="popular-badge"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          🔥 Most Popular
        </motion.div>
      )}
      
      <h3 className="pricing-title">{title}</h3>
      <div className="pricing-price">
        <span className="currency">$</span>
        <motion.span 
          className="amount"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, type: "spring" }}
        >
          {price}
        </motion.span>
        <span className="period">/month</span>
      </div>
      <ul className="pricing-features">
        {features.map((feature, idx) => (
          <motion.li 
            key={idx} 
            className="pricing-feature"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 + (idx * 0.05) }}
            whileHover={{ x: 5 }}
          >
            <motion.span 
              className="check"
              whileHover={{ scale: 1.3, rotate: 360 }}
              transition={{ duration: 0.3 }}
            >
              ✓
            </motion.span>
            {feature}
          </motion.li>
        ))}
      </ul>
      <motion.button 
        className="pricing-btn"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="btn-text">Choose Plan</span>
        <motion.span 
          className="btn-arrow"
          initial={{ x: 0 }}
          whileHover={{ x: 5 }}
        >
          →
        </motion.span>
      </motion.button>
    </motion.div>
  );
};

export default PricingCard;

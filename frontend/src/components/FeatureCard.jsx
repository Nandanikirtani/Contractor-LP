import React from 'react';
import { motion } from 'framer-motion';
import '../styles/App.css';

const FeatureCard = ({ icon, title, description, image }) => {
  return (
    <motion.div 
      className="feature-card"
      whileHover={{ scale: 1.03, y: -10 }}
      transition={{ duration: 0.3 }}
    >
      {image ? (
        <div className="feature-image-container">
          <img src={image} alt={title} className="feature-image" />
        </div>
      ) : (
        <div className="feature-icon">{icon}</div>
      )}
      <div className="feature-content-bottom">
        <h3 className="feature-title">{title}</h3>
        <p className="feature-description">{description}</p>
      </div>
    </motion.div>
  );
};

export default FeatureCard;

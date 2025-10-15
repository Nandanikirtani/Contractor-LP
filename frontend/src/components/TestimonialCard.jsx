import React from 'react';
import { motion } from 'framer-motion';
import '../styles/App.css';

const TestimonialCard = ({ name, role, image, testimonial, rating, index = 0 }) => {
  return (
    <motion.div 
      className="testimonial-card"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.15,
        ease: "easeOut"
      }}
      whileHover={{ scale: 1.02, y: -5 }}
    >
      <motion.div 
        className="quote-icon"
        initial={{ opacity: 0, scale: 0, rotate: -15 }}
        whileInView={{ opacity: 0.15, scale: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        aria-hidden="true"
      >
        “
      </motion.div>

      <div className="testimonial-header">
        <div className="testimonial-img-wrapper">
          <motion.img 
            src={image} 
            alt={name} 
            className="testimonial-img"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.3 }}
          />
          <motion.div 
            className="verified-badge"
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 250, delay: 0.4 }}
            aria-hidden="true"
          >
            ✓
          </motion.div>
        </div>
        <div className="testimonial-info">
          <h4 className="testimonial-name">{name}</h4>
          <p className="testimonial-role">{role}</p>
        </div>
      </div>
      <div className="rating">
        {[...Array(rating)].map((_, i) => (
          <motion.span 
            key={i} 
            className="star"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 + (i * 0.1) }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.2, rotate: 10 }}
          >
            ★
          </motion.span>
        ))}
      </div>
      <p className="testimonial-text">"{testimonial}"</p>
      <div className="testimonial-bottom-gradient" />
    </motion.div>
  );
};

export default TestimonialCard;

// src/ImageGallery.js
import React, { useState } from 'react';
import './ImageGallery.css';

const images = [
  { src: 'https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Phone 1', category: 'phone' },
  { src: 'https://images.pexels.com/photos/1275929/pexels-photo-1275929.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load', alt: 'Phone 2', category: 'phone' },
  { src: 'https://images.pexels.com/photos/424299/pexels-photo-424299.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load', alt: 'Phone 3', category: 'phone' },
  { src: 'https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Phone 4', category: 'phone' },
  { src: 'https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Phone 5', category: 'phone' },
  { src: 'https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Laptop 1', category: 'laptop' },
  { src: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600', alt: 'Laptop 2', category: 'laptop' },
  { src: 'https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600', alt: 'Laptop 3', category: 'laptop' },
  { src: 'https://images.pexels.com/photos/459653/pexels-photo-459653.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Laptop 4', category: 'laptop' },
  { src: 'https://images.pexels.com/photos/2312369/pexels-photo-2312369.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Laptop 5', category: 'laptop' },
  { src: 'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Headphones 1', category: 'headphones' },
  { src: 'https://images.pexels.com/photos/610945/pexels-photo-610945.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Headphones 2', category: 'headphones' },
  { src: 'https://images.pexels.com/photos/815494/pexels-photo-815494.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Headphones 3', category: 'headphones' },
  { src: 'https://images.pexels.com/photos/159472/headphones-instagram-video-games-razer-159472.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Headphones 4', category: 'headphones' },
  { src: 'https://images.pexels.com/photos/185030/pexels-photo-185030.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Headphones 5', category: 'headphones' },
  { src: 'https://images.pexels.com/photos/267391/pexels-photo-267391.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Smartwatch 1', category: 'smartwatch' },
  { src: 'https://images.pexels.com/photos/23475/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600', alt: 'Smartwatch 2', category: 'smartwatch' },
  { src: 'https://images.pexels.com/photos/51011/pexels-photo-51011.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Smartwatch 3', category: 'smartwatch' },
  { src: 'https://images.pexels.com/photos/1334602/pexels-photo-1334602.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Smartwatch 4', category: 'smartwatch' },
  { src: 'https://images.pexels.com/photos/3646165/pexels-photo-3646165.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Smartwatch 5', category: 'smartwatch' },
  { src: 'https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Tablet 1', category: 'tablet' },
  { src: 'https://images.pexels.com/photos/40739/mobile-phone-smartphone-tablet-white-40739.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Tablet 2', category: 'tablet' },
  { src: 'https://images.pexels.com/photos/1110355/pexels-photo-1110355.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Tablet 3', category: 'tablet' },
  { src: 'https://images.pexels.com/photos/3082341/pexels-photo-3082341.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Tablet 4', category: 'tablet' },
  { src: 'https://images.pexels.com/photos/38544/imac-apple-mockup-app-38544.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Tablet 5', category: 'tablet' },
];

const categories = ['all', 'phone', 'laptop', 'headphones', 'smartwatch', 'tablet'];

const ImageGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filterImages = () => {
    if (selectedCategory === 'all') {
      return images;
    }
    return images.filter(image => image.category === selectedCategory);
  };

  return (
    <div>
      <div className="category-buttons">
        {categories.map((category, index) => (
          <button 
            key={index} 
            onClick={() => setSelectedCategory(category)} 
            className={category === selectedCategory ? 'active' : ''}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="gallery-container">
        {filterImages().map((image, index) => (
          <div key={index} className="image-wrapper">
            <img src={image.src} alt={image.alt} className="gallery-image" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;

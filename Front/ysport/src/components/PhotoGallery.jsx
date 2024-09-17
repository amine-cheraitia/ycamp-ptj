// src/components/PhotoGallery.js
import React, { useState, useEffect } from 'react';
import { fetchRandomSportPhotos } from '../services/unsplashService';

const PhotoGallery = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const loadPhotos = async () => {
      const fetchedPhotos = await fetchRandomSportPhotos();
      setPhotos(fetchedPhotos);    };

      loadPhotos();
    }, []);
  
    return (
      <div>
      <div className="photo-gallery">
        {photos.map(photo => (
          <img 
            key={photo.id} 
            src={photo.urls.small} 
            alt={photo.alt_description} 
            style={{ width: '180px', height: '100px', objectFit: 'cover',  borderRadius: '8px' }} 
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;

import React, { createContext, useState, useEffect } from 'react';

const PhotoContext = createContext();

const PhotoProvider = ({ children }) => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('./photos.json');
        const data = await response.json();
        setPhotos(data.photos);
      } catch (error) {
        console.error('Error al cargar las fotos:', error);
      }
    };
  
    fetchData();
  }, [/* Dependencias del efecto */]);
  
  useEffect(() => {
    console.log('Fotos cargadas:', photos);
  }, [photos]);

  return (
    <PhotoContext.Provider value={{ photos }}>
      {children}
    </PhotoContext.Provider>
  );
};

export { PhotoContext, PhotoProvider };
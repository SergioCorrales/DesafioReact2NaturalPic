import React, { useContext } from 'react';
import { PhotoContext } from '../context/PhotoContext';  // Ruta ajustada

const Gallery = () => {
  const { photos } = useContext(PhotoContext);

  return (
    <div className="gallery grid-columns-5 p-3">
      {photos.map((photo) => (
        <img className="photo grid-columns-4" key={photo.id} src={photo.src.original} alt={photo.alt} />
      ))}
    </div>
  );
};

export default Gallery;
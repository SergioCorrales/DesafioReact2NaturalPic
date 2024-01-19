import React, { createContext, useState, useContext, useEffect} from 'react';

const FavoritePhotoContext = createContext();

//crear un hook personalizado para acceder al contexto
export const useFavoritePhotoContext = () => {
  return useContext(FavoritePhotoContext)
}

export const FavoritePhotoProvider = ({ children }) => {

  const [favoritePhotos, setFavoritePhotos] = useState([]);

  const toggleLiked = (id) => {
    //modificar la propiedad liked de la imagen clickeada
    setFavoritePhotos( prevFavoritePhotos => 
        prevFavoritePhotos.map( photo =>
          photo.id === id   ? {...photo, liked: !photo.liked  } : photo
        )
    )
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('./photos.json');
        const data = await response.json();
        setFavoritePhotos(data.photos);
      } catch (error) {
        console.error('Error al cargar las fotos:', error);
      }
    };
  
    fetchData();
  }, []);


  return (
    <FavoritePhotoContext.Provider value={{ favoritePhotos, toggleLiked }}>
      {children}
    </FavoritePhotoContext.Provider>
  );
};

import { useFavoritePhotoContext } from "../context/FavoritePhotoContext";

const Favorites = () => {

  const { favoritePhotos, addPhoto } = useFavoritePhotoContext();


  return (
    <div>
      <h1 className="App">Fotos favoritas</h1>
      <div className="p-3 gallery grid-columns-4">

        {
          favoritePhotos.filter( photo => photo.liked === true ).map(filteredPhoto => (
            <img  
              className="photo grid-columns-4" 
              key={filteredPhoto.id} 
              src={filteredPhoto.src.original} 
              alt={filteredPhoto.alt} 
          />
          ))
        }


      </div>
    </div>
  );
};
export default Favorites;

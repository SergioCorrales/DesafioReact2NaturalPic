import { useFavoritePhotoContext } from "../context/FavoritePhotoContext";
import IconHeart from "./IconHeart";

const Gallery = () => {

  const {  favoritePhotos, toggleLiked } = useFavoritePhotoContext();


  return (
    <div className="gallery grid-columns-5 p-3">
      {favoritePhotos.map((photo) => (
        <div>  
            <IconHeart filled={photo.liked}/>
          <img  
            className="photo grid-columns-4" 
            onClick={  () =>  toggleLiked(photo.id) }
            key={photo.id} 
            src={photo.src.original} 
            alt={photo.alt} 
          />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

import Favorites from "./views/Favorites";
import Home from "./views/Home";

import { FavoritePhotoProvider } from "./context/FavoritePhotoContext.jsx";
const PHOTO_URL = "/photos.json";

const App = () => {
  return (
    <div>
      <FavoritePhotoProvider>
        <Navbar />
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
            <Route
              path="/favoritos"
              element={<Favorites />}
            />
          </Routes>
      </FavoritePhotoProvider>
    </div>
  );
};
export default App;

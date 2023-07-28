import React, { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Catalog from "./components/card/Сatalog";
import Forward from "./components/forward/Forward";
import Footer from "./components/footer/Footer";
import Category from "./components/category/Category";
import data from "./data/data.json";
import Slider from "./components/slider/Slider ";
import Header from "./components/header/Header";
import Section from "./components/header/Section";
import ModalFavorites from "./components/modal/ModalFavorites";
import Regi from "./components/registracion/Regi";

function App() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const currentItems = JSON.parse(searchParams.get("items")) || [];

  const [selectedGenre, setSelectedGenre] = useState("All");
  const [searchResults, setSearchResults] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [forwardFavorites, setForwardFavorites] = useState(() =>
    data.map((item) => ({
      ...item,
      isFavorite: favorites.some((favItem) => favItem.id === item.id),
    }))
  );

  const handleGenreChange = (genre) => {
    setSelectedGenre(genre);
  };

  const handleSearch = (event) => {
    const query = event.target.value.trim().toLowerCase();

    if (query === "") {
      setSearchResults([]);
      return;
    }

    const filteredData = data.filter((item) =>
      item.title.toLowerCase().includes(query)
    );
    setSearchResults(filteredData);
  };
  const filterDataByGenre = () => {
    if (selectedGenre === "All") {
      return searchResults.length > 0 ? searchResults : data;
    } else {
      const filteredData = searchResults.length > 0
        ? searchResults.filter((item) => item.janr && item.janr.some((genre) => genre.trim() === selectedGenre))
        : data.filter((item) => item.janr && item.janr.some((genre) => genre.trim() === selectedGenre));
      return filteredData;
    }
  };

  const addFavorite = (item) => {
    if (!favorites.includes(item)) {
      setFavorites([...favorites, item]);
    }
  };

  const removeFavorite = (item) => {
    const updatedFavorites = favorites.filter((favorite) => favorite !== item);
    setFavorites(updatedFavorites);


    setForwardFavorites((prevForwardFavorites) =>
      prevForwardFavorites.map((favItem) =>
        favItem.id === item.id ? { ...favItem, isFavorite: false } : favItem
      )
    );
  };

  const toggleFavorite = (isFavorite, item) => {
    if (isFavorite) {
      addFavorite(item);
      addForwardFavorite(item);

    } else {
      removeFavorite(item);
    }
  };


  const handleNavigation = (item) => {
    setModalOpen(false);
  };

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  const addForwardFavorite = (item) => {
    if (!forwardFavorites.some((favorite) => favorite.id === item.id)) {
      setForwardFavorites([...forwardFavorites, item]);
    }
  };
  const removeFavoriteFromModal = (item) => {  
    
    removeFavorite(item);
    
    setForwardFavorites((prevForwardFavorites) =>
      prevForwardFavorites.map((favItem) =>
        favItem.id === item.id ? { ...favItem, isFavorite: false } : favItem
      )
    );
  };

  return (
    <div>
      <Header handleSearch={handleSearch} />

      <Section />
      <Slider data={data} handleNavigation={handleNavigation} />
      <ModalFavorites
        favorites={favorites}
        forwardFavorites={forwardFavorites}
        setForwardFavorites={setForwardFavorites}
        removeFavoriteFromModal={removeFavoriteFromModal}
        removeFavorite={removeFavorite}
        handleNavigation={handleNavigation}
        isModalOpen={isModalOpen}
        toggleModal={toggleModal}
      />
      <Category
        selectedGenre={selectedGenre}
        handleGenreChange={handleGenreChange}
        addFavorite={addFavorite}
      />
      <Routes>
      <Route path="/registration" element={<Regi/>} />
        <Route
          path="/forward"
          element={
            <Forward
              items={currentItems}
              forwardFavorites={forwardFavorites}
              favorites={favorites}
              setForwardFavorites={setForwardFavorites}
              toggleFavorite={toggleFavorite}

            />
          }
        />
        <Route
          path="/"
          element={
            <Catalog
              isLoading={false}
              filterDataByGenre={filterDataByGenre}
              handleNavigation={handleNavigation}
              favorites={favorites}
              toggleFavorite={toggleFavorite}
   
            />
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;    
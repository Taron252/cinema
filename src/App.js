// App.js
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

function App() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const currentItems = JSON.parse(searchParams.get("items")) || [];

  const [selectedGenre, setSelectedGenre] = useState("All");
  const [searchResults, setSearchResults] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);

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
      return searchResults.length > 0
        ? searchResults.filter((item) =>
            item.janr.some((genre) => genre.trim() === selectedGenre)
          )
        : data.filter((item) =>
            item.janr.some((genre) => genre.trim() === selectedGenre)
          );
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
  };

  const handleNavigation = (item) => {
    setModalOpen(false);
  };

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <div>
      <Header handleSearch={handleSearch} />
     
      <Section />
      <Slider data={data} 
        handleNavigation={handleNavigation}/>
         <ModalFavorites
        favorites={favorites}
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
        <Route path="/forward" element={<Forward items={currentItems} />} />
        <Route
          path="/"
          element={
            <Catalog
              isLoading={false}
              filterDataByGenre={filterDataByGenre}
              addFavorite={addFavorite}
              handleNavigation={handleNavigation}
            />
          }
        />
      </Routes>
      <Footer /> 
    </div>
  );
}

export default App;




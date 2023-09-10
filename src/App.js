import React, { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import axios from "axios";
import Forward from "./components/forward/Forward";
import Footer from "./components/footer/Footer";
import Category from "./components/category/Category";
import Slider from "./components/slider/Slider ";
import Header from "./components/header/Header";
import Section from "./components/header/Section";
import ModalFavorites from "./components/modal/ModalFavorites";
import Regi from "./components/registracion/Regi";
import Login from "./components/registracion/Login";
import Catalog from "./components/card/Сatalog"; 

function App() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const currentItems = JSON.parse(searchParams.get("items")) || [];

  const [selectedGenre, setSelectedGenre] = useState("All");
  const [searchResults, setSearchResults] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [forwardFavorites, setForwardFavorites] = useState([]);
  const [totalPages, setTotalPages] = useState(180); 
  const [isLoading, setIsLoading] = useState(true);

  const handleGenreChange = (genre) => {
    setSelectedGenre(genre);
    if (genre === "All") {
      setSearchResults([]);
    } else {
      const filteredData = forwardFavorites.filter((item) =>
        item.genres.some((g) => g.name === genre)
      );
      setSearchResults(filteredData);
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

  const [genres, setGenres] = useState([]); // State to store movie genres

  const apiKey = "50d3599ddc523933604a318a5ad46fc3";
  const apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=ru-RU&sort_by=popularity.desc&per_page=100`;
  const genresUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`;

  const fetchMoviesForPage = async (page) => {
    try {
      const moviesResponse = await axios.get(`${apiUrl}&page=${page}`);
      return moviesResponse.data.results;
    } catch (error) {
      console.error("Error fetching data:", error);
      return [];
    }
  };

  const fetchAllMovies = async () => {
    const allMovies = [];
    for (let page = 0; page <= totalPages; page++) {
      const movies = await fetchMoviesForPage(page);
      const moviesWithVideos = await Promise.all(
        movies.map(async (movie) => {
          const videosResponse = await axios.get(
            `https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=${apiKey}`
          );
          const videos = videosResponse.data.results;
          return { ...movie, videos };
        })
      );
      allMovies.push(...moviesWithVideos);
    }
    return allMovies;
  };

  const fetchAllData = async () => {
    try {
      const [moviesResponse, genresResponse] = await Promise.all([
        axios.get(apiUrl),
        axios.get(genresUrl),
      ]);

      // Fetch all movies
      const allMovies = await fetchAllMovies();

      // Set the total number of pages to 183


      // Assuming the API response has 'poster_path', 'title', 'id', and 'genre_ids' properties for movies
      const formattedMovies = allMovies.map((movie) => ({
        posterUrl: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
        title: movie.title,
        id: movie.id,
        genreIds: movie.genre_ids,
        overview: movie.overview,
        backdrop_path: `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`,
        releaseYear: movie.release_date
          ? movie.release_date.substring(0, 4)
          : "Unknown",
        // Add any other properties you need from the API response
      }));

      setGenres(genresResponse.data.genres);

      // Map genre IDs to genre names
      const moviesWithGenres = formattedMovies.map((movie) => ({
        ...movie,
        genres: movie.genreIds.map((genreId) =>
          genresResponse.data.genres.find((genre) => genre.id === genreId)
        ),
      }));

      setForwardFavorites(moviesWithGenres);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    setIsLoading(false);
  };

  const handleSearch = (event) => {
    const query = event.target.value.trim().toLowerCase();

    if (query === "") {
      setSearchResults([]); // Clear search results if the search query is empty
    } else {
      // Filter movies based on the search query
      const filteredData = forwardFavorites.filter((item) =>
        item.title.toLowerCase().includes(query)
      );
      setSearchResults(filteredData); // Update the search results with filtered data
    }
  };

  useEffect(() => {
    fetchAllData();
  }, [fetchAllData]);

  return (
    <div>
      <Header handleSearch={handleSearch} />
      <Section />
      <Slider data={forwardFavorites} handleNavigation={handleNavigation} />
      <ModalFavorites
  favorites={favorites}
  forwardFavorites={forwardFavorites}
  setForwardFavorites={setForwardFavorites}  // Add this line
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
        genres={genres}
      />
      <Routes>
        <Route path="/login" element={<Regi/>} />
        <Route path="/registration" element={<Login />} />
        <Route
          path="/forward"
          element={
            <Forward
              items={currentItems}
              forwardFavorites={forwardFavorites}
              favorites={favorites}
              setForwardFavorites={setForwardFavorites}
              toggleFavorite={toggleFavorite}
              genres={genres}
            />
          }
        />
        <Route
          path="/"
          element={
            <Catalog
              isLoading={isLoading}
              data={searchResults.length > 0 ? searchResults : forwardFavorites}
              itemsPerPage={12}
              updateIsFavorite={toggleFavorite}
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

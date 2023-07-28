import React from "react";
import style from "./Card.module.scss";
import Card from "./Card";

const Catalog = ({
  isLoading,
  filterDataByGenre,
  updateIsFavorite,
  handleNavigation,
  favorites,
  toggleFavorite,
}) => {
  const itemsPerPage = 12;

  const renderItems = () => {
    const filteredData = filterDataByGenre();
    return isLoading ? (
      [...Array(8)]
    ) : (
      <Card
        favorites={favorites}
        data={filteredData}
        itemsPerPage={itemsPerPage}
        loading={isLoading}
        handleNavigation={handleNavigation}
        toggleFavorite={toggleFavorite}
        updateIsFavorite={updateIsFavorite} // Pass the forwardFavorites prop
      />
    );
  };

  return <div className={style.div1}>{renderItems()}</div>;
};

export default Catalog;

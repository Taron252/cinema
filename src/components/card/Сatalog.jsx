import React from "react";
import style from "./Card.module.scss";
import Card from "./Card";

const Catalog = ({
  isLoading,
  data,
  itemsPerPage,
  updateIsFavorite,
  handleNavigation,
  favorites,
  toggleFavorite,
}) => {
  const renderItems = () => {
    return isLoading ? (
      [...Array(itemsPerPage)].map((_, index) => (
        <div key={index} className={style.box}>
          {/* Placeholder for the loading state */}
        </div>
      ))
    ) : (
      <Card
        favorites={favorites}
        data={data}
        itemsPerPage={itemsPerPage}
        loading={isLoading}
        handleNavigation={handleNavigation}
        toggleFavorite={toggleFavorite}
        updateIsFavorite={updateIsFavorite}
      />
    );
  };

  return <div className={style.div1}>{renderItems()}</div>;
};

export default Catalog;

import React from "react";
import style from "./Card.module.scss";
import Card from "./Card";

const Catalog = ({
  isLoading,
  filterDataByGenre,
  addFavorite,
  handleNavigation,
}) => {
  const itemsPerPage = 12;

  const renderItems = () => {
    const filteredData = filterDataByGenre();
    return isLoading ? (
      [...Array(8)]
    ) : (
      <Card
        data={filteredData}
        itemsPerPage={itemsPerPage}
        loading={isLoading}
        addFavorite={addFavorite}
        handleNavigation={handleNavigation}
      />
    );
  };

  return <div className={style.div1}>{renderItems()}</div>;
};

export default Catalog;

import React, { useState } from "react";
import style from "./Card.module.scss";

const LikeButton = ({ item, onToggle }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    if (onToggle) {
      onToggle(!isFavorite, item);
    }
  };

  return (
    <button className={style.but_like} onClick={toggleFavorite}>
      <img
        width={20}
        src={isFavorite ? "img/love.svg" : "img/broken.svg"}
        alt=""
      />
    </button>
  );
};

export default LikeButton;

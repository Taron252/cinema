import React, { useState } from "react";
import style from "./Forward.module.scss";
import Comment from "./Comment";
import StarRating from "./StarRating ";
import LikeButton from "../card/LikeButton";

const Forward = ({ items, toggleFavorite, forwardFavorites }) => {
  const [rating, setRating] = useState(0);
  const [likedItems, setLikedItems] = useState([]); 

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleLike = (item) => {
    if (!likedItems.includes(item.id)) {
      setLikedItems([...likedItems, item.id]);
      toggleFavorite(true, item); 
    }
  };

  return (
    <div className={style.forward}>
      {items && items.length > 0 ? (
        items.map((item, index) => (
          <div key={index} className={style.for_film}>
            <div className={style.name}>
              <div className={style.like}>
                <img src={item.img} alt="" />
                <LikeButton
                  item={item}
                  isFavorite={forwardFavorites.some(
                    (favorite) => favorite.id === item.id
                  )}
                  onToggle={(isFavorite) => handleLike(item)} 
                />
              </div>
              <div className={style.text}>
                <h2>{item.title}</h2>
                <p>{item.janr}</p>
                <div className={style.span}>
                  <span>{item.opis}</span>
                </div>
              </div>
            </div>

            <StarRating rating={rating} onRatingChange={handleRatingChange} />

            <div className={style.frame}>
              <a href={item.url}>
                <img src={item.frame} alt="" />
              </a>
              <Comment />
            </div>
          </div>
        ))
      ) : (
        <div>No items to display</div>
      )}
    </div>
  );
};

export default Forward;

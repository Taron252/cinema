import React, { useState } from "react";
import style from "./Forward.module.scss";
import Comment from "./Comment";
import StarRating from "./StarRating ";
import LikeButton from "../card/LikeButton";

const Forward = ({ items, toggleFavorite, forwardFavorites, genres }) => {
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
                <img src={item.posterUrl} alt="" />
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
                <h3>{item.releaseYear}</h3>
                <div className={style.span}>
                  {item.genres && Array.isArray(item.genres) && (
                    <p>
                      Genres:{" "}
                      {item.genres.map((genre) => genre.name).join(", ")}
                    </p>
                  )}
                  <span className={style.span1}>{item.overview}</span>
                </div>
              </div>
            </div>

            <StarRating rating={rating} onRatingChange={handleRatingChange} />

            <div className={style.frame}>
            <iframe
  title={item.title}
  width="920"
  height="560"
  src={`https://www.youtube.com/embed/${item.videos && item.videos.length > 0 ? item.videos[0].key : ''}`}
  allowFullScreen
></iframe>
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
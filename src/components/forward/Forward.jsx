import React, { useState } from "react";
import style from "./Forward.module.scss";
import Comment from "./Comment";
import StarRating from "./StarRating ";

const Forward = ({ items }) => {
  const [rating, setRating] = useState(0);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };
  return (
    <div className={style.forward}>
      {items && items.length > 0 ? (
        items.map((item, index) => (
          <div key={index} className={style.for_film}>
            <div className={style.name}>
              <img src={item.img} alt="" />
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

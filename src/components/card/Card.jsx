import React, { useState } from "react";
import ContentLoader from "react-content-loader";
import style from "./Card.module.scss";
import Pagination from "../pagination/Pagination";
import LearnButton from "./LearnButton ";
import Slide from "react-reveal/Slide";
import LikeButton from "./LikeButton";

const Card = ({
  data,
  itemsPerPage,
  loading = false,
  toggleFavorite,
  handleNavigation,
  favorites,
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className={style.card_form}>
      <div className={style.container}>
        {currentItems.map((item, index) => (
          <Slide left key={index}>
            <div className={style.box}>
              {loading ? (
                <ContentLoader
                  speed={1000}
                  width={400}
                  height={460}
                  viewBox="0 0 400 460"
                  backgroundColor="#ffc2c2"
                  foregroundColor="#fff"
                >
                  <rect x="0" y="0" rx="0" ry="0" width="230" height="170" />
                  <rect x="0" y="175" rx="0" ry="0" width="230" height="57" />
                  <rect x="0" y="238" rx="0" ry="0" width="230" height="10" />
                  <rect x="0" y="258" rx="0" ry="0" width="230" height="57" />
                </ContentLoader>
              ) : (
                <>
                  <div className={style.imgBx}>
                    <img
                      className={style.movie_card__image}
                      src={item.img}
                      alt=""
                    />
                  </div>
                  <div className={style.content}>
                    <h2 className={style.movie_card__title}>{item.title}</h2>
                    <div className={style.button}>
                      <LearnButton
                        item={item}
                        handleNavigation={handleNavigation}
                      />
                      <LikeButton
                        item={item}
                        isFavorite={favorites.some((fav) => fav.id === item.id)}
                        onToggle={(isFavorite) =>
                          toggleFavorite(isFavorite, item)
                        }
                      />
                    </div>
                  </div>
                </>
              )}
            </div>
          </Slide>
        ))}
      </div>
      <div className={style.page}>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default Card;

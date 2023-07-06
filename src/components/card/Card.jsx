import React, { useState } from "react";
import ContentLoader from "react-content-loader";
import style from "./Card.module.scss";
import Pagination from "../pagination/Pagination";
import LearnButton from "./LearnButton ";
import Slide from 'react-reveal/Slide';

const Card = ({
  data,
  itemsPerPage,
  loading = false,
  addFavorite,
  handleNavigation,
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleAddFavorite = (item) => {
    addFavorite(item);
  };

  return (
    <div className={style.card_form}>
      <div className={style.container}>
        {currentItems.map((item, index) => (

<Slide left>

          <div key={index} className={style.box}>
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
                    <button
                      className={style.but_like}
                      onClick={() => handleAddFavorite(item)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        id="Outline"
                        viewBox="0 0 24 24"
                        width="512"
                        height="512"
                      >
                        <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z" />
                      </svg>
                    </button>
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

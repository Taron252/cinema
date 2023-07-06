import React  from "react";
import style from "./Category.module.scss";
const Category = ({ handleGenreChange, selectedGenre }) => {
  const genres = [
    "All",
    " Фантастика",
    "Триллер",
    "Драма",
    "Биография",
    "Приключения",
    "Семейный",
    "Спорт",
    " Ужасы",
    " Комедия",
    " Боевик",
  ];

  return (

    <div className={style.genreFilter} >
      {genres.map((janr, index) => (
        <div className={style.btn_filtr}>
          <button id="gyago"
            key={index}
            className={janr.trim() === selectedGenre ? style.active : ""}
            onClick={() => handleGenreChange(janr.trim())}
          >
            {/* <Roll bottom cascade>  */}
            {janr }
            {/* </Roll> */}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Category;

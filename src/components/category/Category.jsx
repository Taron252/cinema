import React from "react";
import style from "./Category.module.scss";
import { Link } from "react-router-dom";
const Category = ({ handleGenreChange, selectedGenre, genres }) => {
  return (
    <div className={style.genreFilter}> 
    
    <div className={style.btn_filtr}>
   <Link  to="/"> <button
      key="All"
      id="gyago"
        className={selectedGenre === "All" ? style.active : ""}
        onClick={() => handleGenreChange("All")}
      >
        All
      </button>  </Link>  </div>
      {genres.map((janr) => (
             <div className={style.btn_filtr}>
       <Link  to="/"> <button
          key={janr.id}
          className={janr.name === selectedGenre ? style.active : ""}
          onClick={() => handleGenreChange(janr.name)}
        >
          {janr.name}
        </button>
       </Link>
      </div>
      ))}
    </div>
  );
};

export default Category;

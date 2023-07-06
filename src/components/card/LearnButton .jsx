import React from "react";
import { Link, useNavigate } from "react-router-dom";
import style from "./Card.module.scss";

const LearnButton = ({ item }) => {
  const navigate = useNavigate();

  const handleItemClick = () => {
    navigate(`/forward?items=${JSON.stringify([item])}`);
  };

  return (
    <button className={style.but_learn} onClick={handleItemClick}>
      <Link to={`/forward?items=${JSON.stringify([item])}`}>
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          className={style.icon}
          id="Isolation_Mode"
          data-name="Isolation Mode"
          viewBox="0 0 24 24"
        > */}
        <i id="slaq" className='fa fa-mail-forward'></i>
        {/* </svg> */}
      </Link>
    </button>
  );
};

export default LearnButton;

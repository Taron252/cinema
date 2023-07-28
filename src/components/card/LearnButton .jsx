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
        <i id="slaq" className="fa fa-mail-forward"></i>
      </Link>
    </button>
  );
};

export default LearnButton;

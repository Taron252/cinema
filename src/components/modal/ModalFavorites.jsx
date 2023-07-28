import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Modal.scss";
import LearnButton from "../card/LearnButton ";
import Bounce from "react-reveal/Bounce";

const ModalFavorites = ({
  favorites,
  handleNavigation,
  forwardFavorites,
  setForwardFavorites,
  removeFavoriteFromModal,
}) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  if (isModalOpen) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  const limitedFavorites = favorites.slice(0, 6);

  const handleLearnButtonClick = (favorite) => {
    handleNavigation(favorite);
  };

  const handleRemoveFavorite = (favorite) => {
    removeFavoriteFromModal(favorite);

    const index = forwardFavorites.findIndex((item) => item.id === favorite.id);
    if (index !== -1) {
      setForwardFavorites((prevForwardFavorites) => {
        const updatedForwardFavorites = [...prevForwardFavorites];
        updatedForwardFavorites[index].isFavorite = false;
        return updatedForwardFavorites;
      });
    }
  };

  return (
    <>
      <Bounce left duration={1700}>
        <button onClick={toggleModal} className="btn-modal">
          Favorites
        </button>
      </Bounce>
      {isModalOpen && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>Favorites Movies</h2>
            <div className="modal1">
              {limitedFavorites.map((favorite, index) => (
                <div key={index} className="modalDiv">
                  <img src={favorite.img} alt="" />
                  <Link to={`/forward?items=${JSON.stringify([favorite])}`}>
                    <LearnButton
                      item={favorite}
                      handleNavigation={() => handleLearnButtonClick(favorite)}
                    />
                  </Link>
                  <button
                    onClick={() => handleRemoveFavorite(favorite)}
                    className="remove"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      id="Isolation_Mode"
                      dataName="Isolation Mode"
                      viewBox="0 0 24 24"
                      width="17"
                      height="16"
                    >
                      <polygon points="24.061 2.061 21.939 -0.061 12 9.879 2.061 -0.061 -0.061 2.061 9.879 12 -0.061 21.939 2.061 24.061 12 14.121 21.939 24.061 24.061 21.939 14.121 12 24.061 2.061" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>

            <button className="close-modal" onClick={toggleModal}>
              <svg
                className="svg"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="17"
                height="16"
              >
                <g id="_01_align_center" dataName="01 align center">
                  <polygon points="24 1.414 22.586 0 12 10.586 1.414 0 0 1.414 10.586 12 0 22.586 1.414 24 12 13.414 22.586 24 24 22.586 13.414 12 24 1.414" />
                </g>
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalFavorites;

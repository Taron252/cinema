import React, { useState } from 'react';
import style from './Slider.module.scss';
import LearnButton from '../card/LearnButton ';
import Zoom from 'react-reveal/Zoom';
const Slider = ({ data, handleNavigation }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % totalPages);
  };

  const goToPreviousSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? totalPages - 1 : prevSlide - 1));
  };

  const renderItems = () => {
    const startIndex = currentSlide * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const items = data.slice(startIndex, endIndex);

    return items.map((item, index) => (
      <div key={index} className={style.slide}>
        <img className={style.slideImage} src={item.img} alt="Slide" />
        <div className={style.btn_slide}>
          <LearnButton item={item} handleNavigation={handleNavigation} />

        </div>
      </div>
    ));
  };

  return (
    <Zoom bottom duration={1700}>
      <div className={style.slider} id='sliderrrrrrrrr'>
        <button className={style.prevButton} onClick={goToPreviousSlide}>
          <svg width="45px" height="45px" viewBox="0 0 1024 1024" className="icon" version="1" xmlns="http://www.w3.org/2000/svg"><path d="M659.2 917.333333l66.133333-66.133333L386.133333 512 725.333333 172.8 659.2 106.666667 256 512z" fill="#fff" /></svg>
        </button>
        <div className={style.slideContainer}>
          <div className={style.slidesWrapper}>
            {renderItems()}

          </div>
        </div>
        <button className={style.nextButton} onClick={goToNextSlide}>
          <svg width="40px" height="40px" viewBox="0 0 45 45" version="1" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 48 48">
            <polygon fill="#fff" points="17.1,5 14,8.1 29.9,24 14,39.9 17.1,43 36,24" />
          </svg>
        </button>
      </div>
    </Zoom>
  );
};

export default Slider;

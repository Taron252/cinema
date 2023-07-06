import React from "react";
import "./Section.scss";
import Zoom from "react-reveal/Zoom";
import Roll from "react-reveal/Roll";
import Bounce from "react-reveal/Bounce";
export const Section = () => {
  return (
    <>
      <div className="flexi">
        <div className="left-text">
          <Zoom left duration={1700}>
            <h1 className="h11">
              FEEL THE SENSATIONS OF <br />{" "}
              <span className="span11">CINEMA</span> IN YOUR HOME
            </h1>
          </Zoom>
          <Roll right duration={1700}>
            <p className="p">
              Wide selection of films with the best audio and visual quality
            </p>
          </Roll>
          <Bounce left duration={1700}>
            <button className="but-join">Join Now</button>{" "}
            
          </Bounce>
        </div>

        <Bounce right duration={1700}>
          <div className="aj-mas">
            <main>
              <img
                className="img"
                src="https://estrogeni.net/wp-content/uploads/2019/08/myke-simon-unsplash-rome-golpe-capitale-1170x658-1.jpg"
                alt="zd"
              />
            </main>
          </div>
        </Bounce>
      </div>
    </>
  );
};

export default Section;

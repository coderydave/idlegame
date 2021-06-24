import React from "react";
import {
  prestigeIcon,
  upgradeIcon,
  shoppingCartIcon,
  managerIcon,
  optionsIcon,
  playIcon,
  tvIcon,
  coinsIcon,
  gemsIcon,
} from "../../assets/icons";
import "./Navigation.style.scss";

const Navigation = () => {
  return (
    <div className="navigation container">
      <div className="navbar-top">
        <div onClick={() => console.log("optionsIcon")} className="navtab">
          <img className="navicon" src={optionsIcon} alt="optionsIcon" />
        </div>
        <div onClick={() => console.log("gem")} className="navtablong">
          <div className="gemview">
            <img className="viewicon" src={gemsIcon} alt="coinsIcon" />
          </div>
        </div>
        <div onClick={() => console.log("money")} className="navtablong">
          <div className="goldview">
            <img className="viewicon" src={coinsIcon} alt="coinsIcon" />
          </div>
        </div>
        <div onClick={() => console.log("tvIcon")} className="navtab">
          <img className="navicon" src={tvIcon} alt="tvIcon" />
        </div>
      </div>
      <div className="navbar-bottom">
        <div onClick={() => console.log("upgradeIcon")} className="navtab">
          <img className="navicon" src={upgradeIcon} alt="upgradeIcon" />
        </div>
        <div onClick={() => console.log("managerIcon")} className="navtab">
          <img className="navicon" src={managerIcon} alt="managerIcon" />
        </div>
        <div onClick={() => console.log("prestigeIcon")} className="navtab">
          <img className="navicon" src={prestigeIcon} alt="prestigeIcon" />
        </div>
        <div onClick={() => console.log("shoppingCartIcon")} className="navtab">
          <img
            className="navicon"
            src={shoppingCartIcon}
            alt="shoppingCartIcon"
          />
        </div>
        <div onClick={() => console.log("playIcon")} className="navtab">
          <img className="navicon" src={playIcon} alt="playIcon" />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
